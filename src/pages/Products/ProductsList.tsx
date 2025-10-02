import { useCategories } from "@/hooks/useCategories";
import { useProducts } from "@/hooks/useProducts";
import ProductItem from "@/components/ui/ProductItem";
import { Link, useSearchParams } from "react-router-dom";

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

type Category = {
  id: number;
  name: string;
};

function ProductsList() {
  const { data: products = [], isLoading } = useProducts();
  const { data: dbCategories = [] } = useCategories() as { data: Category[] };
  const [searchParams] = useSearchParams();

  // 🔎 Extract filters from URL
  const categories = searchParams.get("categories")?.split(",") || [];
  const colors = searchParams.get("color")?.split(",") || [];
  const sizes = searchParams.get("size")?.split(",") || [];
  const minPrice = Number(searchParams.get("minPrice")) || 0;
  const maxPrice = Number(searchParams.get("maxPrice")) || Infinity;

  // 🧹 Filter logic
  const filteredProducts = products.filter((product: Product) => {
    const selectedCategoryIds = dbCategories
      .filter((cat) => categories.includes(cat.name))
      .map((cat) => cat.id);

    const matchCategory =
      selectedCategoryIds.length === 0 ||
      product.categoryIds.some((id) => selectedCategoryIds.includes(id));

    const matchColor =
      colors.length === 0 ||
      product.colors.some((color) => colors.includes(color));

    const matchSize =
      sizes.length === 0 || product.sizes.some((size) => sizes.includes(size));

    const matchPrice = product.price >= minPrice && product.price <= maxPrice;

    return matchCategory && matchColor && matchSize && matchPrice;
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        filteredProducts.map((product: Product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <ProductItem
              image={product.images[0]}
              price={product.price}
              inStock={product.status ? "in stock" : "out of stock"}
              productName={product.name}
            />
          </Link>
        ))
      )}
    </div>
  );
}

export default ProductsList;
