import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const FILE_URL = "/examples.json"; 

export function useExamples() {
  const { data: examples, isLoading, error } = useQuery({
    queryKey: ["examples"],
    queryFn: async () => {
      try {
        const response = await axios.get(FILE_URL); 

        const exampleData = response.data?.examples || {}; 

        const formattedExamples = Object.keys(exampleData).map(category => ({
          category,
          items: exampleData[category].map(item => ({
            name: item.name,
            url: item.url
          }))
        }));

        return formattedExamples;
      } catch (error) {
        throw new Error("Error fetching or parsing JSON file");
      }
    },
  });

  return { examples, isLoading, error };
}
