import { useQuery } from "@tanstack/react-query";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/categories");
      if (!res.ok) throw new Error("Network error");
      return res.json();
    },
  });
}
