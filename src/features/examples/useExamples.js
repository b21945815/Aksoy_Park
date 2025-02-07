import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const FILE_URL = "/examples.json"; 

export function useExamples() {
  
  const { data: examples, isLoading, error } = useQuery({
    queryKey: ["examples"],
    queryFn: async () => {
      try {
        const response = await axios.get(FILE_URL); 

        const imageData = response.data?.examples?.example || [];
        
        return imageData.map(item => ({
          name: item.name,
          url: item.url
        }));
      } catch (error) {
        throw new Error("Error fetching or parsing JSON file");
      }
    },
  });

  return { examples, isLoading, error };
}