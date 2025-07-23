import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/products");
      if (!res.ok) throw new Error("Network error");
      return res.json();
    },
  });
}

export function useProductDetail(productId: string | undefined) {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/products/${productId}`);
      if (!res.ok) throw new Error("Network error");
      return res.json();
    },
    enabled: !!productId,
  });
}
