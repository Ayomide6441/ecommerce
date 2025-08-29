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

// export function useProductReview(productId: string | undefined) {
//   return useQuery({
//     queryKey: ["review", productId],
//     queryFn: async () => {
//       // 1. Fetch reviews for the product
//       const res = await fetch(
//         `http://localhost:8000/reviews?productId=${productId}`
//       );
//       if (!res.ok) throw new Error("Network error");
//       const reviews = await res.json();

//       if (reviews.length === 0) return [];

//       // 2. Collect unique userIds
//       const userIds = [...new Set(reviews.map((r: any) => r.userId))];

//       // 3. Fetch only those users
//       const usersRes = await fetch(
//         `http://localhost:8000/users?${userIds
//           .map((id) => `id=${id}`)
//           .join("&")}`
//       );
//       if (!usersRes.ok) throw new Error("Network error");
//       const users = await usersRes.json();

//       // 4. Merge reviews with their corresponding user
//       return reviews.map((review: any) => ({
//         ...review,
//         user: users.find((u: any) => u.id === review.userId),
//       }));
//     },
//     enabled: !!productId,
//   });
// }
export interface Address {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface User {
  id: number;
  fullName: string;
  email: string;
  password: string;
  addresses: Address[];
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
  user: User | null;
}

export function useProductReview(productId: string | undefined) {
  return useQuery<ReviewWithUser[]>({
    queryKey: ["review", productId],
    queryFn: async (): Promise<ReviewWithUser[]> => {
      if (!productId) return [];

      // 1. Fetch reviews
      const res = await fetch(
        `http://localhost:8000/reviews?productId=${productId}`
      );
      if (!res.ok) throw new Error("Failed to fetch reviews");
      const reviews: Review[] = await res.json();

      if (reviews.length === 0) return [];

      // 2. Collect unique userIds
      const userIds = [...new Set(reviews.map((r) => r.userId))];

      // 3. Fetch users by ids
      const usersRes = await fetch(
        `http://localhost:8000/users?${userIds
          .map((id) => `id=${id}`)
          .join("&")}`
      );
      if (!usersRes.ok) throw new Error("Failed to fetch users");
      const users: User[] = await usersRes.json();

      // 4. Merge reviews with user
      return reviews.map((review) => ({
        ...review,
        user: users.find((u) => u.id === review.userId) ?? null,
      }));
    },
    enabled: Boolean(productId),
    initialData: [], // 👈 prevents undefined flashes
  });
}
