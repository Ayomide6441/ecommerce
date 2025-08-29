import { useParams } from "react-router-dom";

import HeaderBreadCrumb from "@/components/ui/HeaderBreadCrumb";
import { useProductDetail } from "@/Hooks/useProducts";

import ProductCarousel from "./ProductCarousel";
import ProductSide from "./ProductSide";
import ProductTab from "./ProductTab";

function Product() {
  const { productId } = useParams();
  const { data: product, isLoading } = useProductDetail(productId);

  // const [isModalOpen, setModalOpen] = useState(false);
  if (isLoading) return <div>Loading...</div>;
  // console.log(product);
  return (
    <>
      <HeaderBreadCrumb
        previous={{ Home: "/" }}
        current="Search"
        className="bg-transparent py-4 border-t-[1px] container px-0"
      />
      <div className="container flex gap-28 mt-10 items-start ">
        <ProductCarousel images={product.images} />
        <ProductSide product={product} />
      </div>

      <ProductTab />
    </>
  );
}

export default Product;

{
  /* This is just a test and product {JSON.stringify(product, null, 2)} */
}
