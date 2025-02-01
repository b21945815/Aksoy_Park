import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const FILE_URL = "/products.json"; 

export function useProducts() {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const response = await axios.get(FILE_URL); 

        const productData = response.data?.products || {}; 

        const formattedProducts = Object.keys(productData).map(category => ({
          category,
          items: productData[category].map(item => ({
            name: item.name,
            url: item.url
          }))
        }));

        return formattedProducts;
      } catch (error) {
        throw new Error("Error fetching or parsing JSON file");
      }
    },
  });

  return { products, isLoading, error };
}
