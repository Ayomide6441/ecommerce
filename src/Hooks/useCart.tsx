import { useQuery } from "@tanstack/react-query";

export function useCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/cartItems");
      if (!res.ok) throw new Error("Network error");
      return res.json();
    },
  });
}
