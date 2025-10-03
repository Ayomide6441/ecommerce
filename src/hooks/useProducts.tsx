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
export interface User {
  id: number;
  fullName: string;
  email: string;
  password: string;
  addresses: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  }[];
}

export interface Review {
  id: number;
  productId: number;
  userId: number;
  comment: string;
  rating: number;
  date: string;
}

export interface ReviewWithUser extends Review {
  user: User; // 👈 always present since you’re expanding
}

export function useProductReview(productId: string | undefined) {
  return useQuery<ReviewWithUser[]>({
    queryKey: ["review", productId],
    queryFn: async () => {
      if (!productId) return [];

      const res = await fetch(
        `http://localhost:8000/reviews?productId=${productId}&_expand=user`
      );
      if (!res.ok) throw new Error("Failed to fetch reviews");

      // json-server with `_expand=user` attaches the full `user` object
      const reviews: ReviewWithUser[] = await res.json();
      return reviews;
    },
    enabled: !!productId,
  });
}
