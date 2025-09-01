import { useParams } from "react-router-dom";

import HeaderBreadCrumb from "@/components/ui/HeaderBreadCrumb";
import { useProductDetail, useProductReview } from "@/Hooks/useProducts";

import ProductCarousel from "./ProductCarousel";
import ProductSide from "./ProductSide";
import ProductTab from "./ProductTab";

function getAverageRating(reviews: { rating: number }[]): number {
  if (reviews.length === 0) return 0;

  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  const avg = total / reviews.length;

  return parseFloat(avg.toFixed(1));
}

function Product() {
  const { productId } = useParams<{ productId: string }>();
  const { data: product, isLoading } = useProductDetail(productId);

  // const [isModalOpen, setModalOpen] = useState(false);
  const { data: reviews } = useProductReview(productId);
  const rating = reviews ? getAverageRating(reviews) : 0;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <HeaderBreadCrumb
        previous={{ Home: "/" }}
        current="Search"
        className="bg-transparent py-4 border-t-[1px] container px-0"
      />
      <div className="container flex gap-28 mt-10 items-start ">
        <ProductCarousel images={product.images} />
        <ProductSide product={product} rating={rating} reviews={reviews} />
      </div>

      <ProductTab reviews={reviews} rating={rating} />
    </>
  );
}

export default Product;

{
  /* This is just a test and product {JSON.stringify(product, null, 2)} */
}
