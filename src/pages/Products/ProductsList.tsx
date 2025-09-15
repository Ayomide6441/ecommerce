import { useProducts } from "@/Hooks/useProducts";
import ProductItem from "@/components/ui/ProductItem";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  images: string[];
  price: number;
  stock: number;
  details: string;
  colors: string[];
  sizes: string[];
  categoryIds: number[];
  rating: number;
  status: boolean;
};

function ProductsList() {
  // console.log(filters);
  const { data: products, isLoading } = useProducts();
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {products.map((product: Product) => (
        <Link key={product.id} to={`/products/${product.id}`} pref>
          <ProductItem
            image={product.images[0]}
            price={product.price}
            inStock={product.status ? "in stock" : "out of stock"}
            productName={product.name}
          />
        </Link>
      ))}
    </div>
  );
}

export default ProductsList;
