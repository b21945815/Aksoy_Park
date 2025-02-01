import { useQuery } from "@tanstack/react-query";

export function useWorks() {
  const { data: images, isLoading, error } = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/images"); 
      if (!response.ok) {
        throw new Error("Error fetching images");
      }
      return response.json();
    },
  });

  return { images, isLoading, error };
}
