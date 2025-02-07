import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const FILE_URL = "/examples.json"; 

export function useExamples() {
  const queryClient = useQueryClient();
  
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

  const addImage = async (newImage) => {
    try {
      const response = await axios.post(FILE_URL, newImage);
      queryClient.invalidateQueries(["examples"]);
      return response.data;
    } catch (error) {
      throw new Error("Error adding new image");
    }
  };

  const editImage = async (imageName, updatedImage) => {
    try {
      const response = await axios.put(`${FILE_URL}/${imageName}`, updatedImage);
      queryClient.invalidateQueries(["examples"]);
      return response.data;
    } catch (error) {
      throw new Error("Error updating image");
    }
  };

  const deleteImage = async (imageName) => {
    try {
      const response = await axios.delete(`${FILE_URL}/${imageName}`);
      queryClient.invalidateQueries(["examples"]);
      return response.data;
    } catch (error) {
      throw new Error("Error deleting image");
    }
  };

  return { examples, isLoading, error, addImage, editImage, deleteImage };
}