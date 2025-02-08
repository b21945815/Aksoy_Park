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
            const sizeData = item['size-data'] || [];
            if (!sizeData.length) {
              sizeData.push(1);  
              sizeData.push(1);  
              sizeData.push(1);  
              sizeData.push(1);  
            }
            const listData = item['list-data'] || [];
            if (!sizeData.length) {
              sizeData.push("");  
            }

            return {
              name: item.name,
              url: item.url,
              subUrls: subUrls,
              sizeData: sizeData,
              listData: listData
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
