import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const FILE_URL = "/images.json"; 

export function useWorks() {
  const { data: images, isLoading, error } = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      try {
        const response = await axios.get(FILE_URL); 

        const imageData = response.data?.images?.image || [];
        
        return imageData.map(item => ({
          name: item.name,
          url: item.url
        }));
      } catch (error) {
        throw new Error("Error fetching or parsing JSON file");
      }
    },
  });

  return { images, isLoading, error };
}
