import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const FILE_URL = "/works.json"; 

export function useWorks() {
  const { data: works, isLoading, error } = useQuery({
    queryKey: ["works"],
    queryFn: async () => {
      try {
        const response = await axios.get(FILE_URL); 

        const workData = response.data?.works || {}; 

        const formattedWorks = Object.keys(workData).map(category => ({
          category,
          items: workData[category].map(item => ({
            name: item.name,
            url: item.url
          }))
        }));

        return formattedWorks;
      } catch (error) {
        throw new Error("Error fetching or parsing JSON file");
      }
    },
  });

  return { works, isLoading, error };
}
