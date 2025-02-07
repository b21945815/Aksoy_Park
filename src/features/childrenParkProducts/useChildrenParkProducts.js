import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const FILE_URL = "/childrenParkProducts.json"; 

export function useChildrenParkProducts() {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ["childrenParkProducts"],
    queryFn: async () => {
      try {
        const response = await axios.get(FILE_URL); 

        const productData = response.data?.products || {}; 

        const formattedProducts = Object.keys(productData).map(category => ({
          category,
          items: productData[category].map(item => {
            const subUrls = item['sub-urls'] || [];
            if (!subUrls.length) {
              subUrls.push(item.url);  
            }

            return {
              name: item.name,
              url: item.url,
              subUrls: subUrls
            };
          })
        }));

        return formattedProducts;
      } catch (error) {
        throw new Error("Error fetching or parsing JSON file");
      }
    },
  });

  return { products, isLoading, error };
}
