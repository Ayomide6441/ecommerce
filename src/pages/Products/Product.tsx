import { useParams } from "react-router-dom";
import { useState } from "react";
import HeaderBreadCrumb from "@/components/ui/HeaderBreadCrumb";
import { useProductDetail } from "@/Hooks/useProducts";
import { Text } from "@/components/ui/text";
import ColorPicker from "../../components/ui/ColorPicker";
import SizePicker from "@/components/sizePicker";

const colorOptions = ["#AFCBFF", "#FFD88D", "#92B69E", "#3B82F6"];

function Product() {
  const { productId } = useParams();
  const { data: product, isLoading } = useProductDetail(productId);
  const [colors, setColors] = useState<string>("");
  const [size, setSize] = useState<string>("");
  // console.log(colors, size);
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <HeaderBreadCrumb previous={{ Home: "/" }} current="Search" />
      <div className="container flex gap-10 mt-10 items-start ">
        <div className="w-1/2 bg-black"></div>
        <div className="w-1/2">
          This is just a test and product {JSON.stringify(product, null, 2)}
          <Text variant="heading-3">{product.name}</Text>
          <div className="flex gap-4">
            <div className="bg-[#F6F6F6] rounded-full py-1 px-3 w-fit">
              <Text variant="label-1" className="text-[#5C5F6A]">
                {product.rating} - 54 Reviews
              </Text>
            </div>
            <div className="border-2 border-[#F6F6F6] border- rounded-full py-1 px-4 w-fit">
              <Text variant="label-1" className="text-[#0E1422]">
                {product ? "In Stock" : "Out of Stock"}
              </Text>
            </div>
          </div>
          <Text variant="heading-4">${product.price}</Text>
          <div>
            <Text
              variant="label-2"
              className="leading-[24px] tracking-[1px] text-[#5C5F6A]"
            >
              Available Color
            </Text>
            <ColorPicker colors={colorOptions} onChange={setColors} />
          </div>
          <div>
            <Text
              variant="label-2"
              className="leading-[24px] tracking-[1px] text-[#5C5F6A]"
            >
              Select Size
            </Text>
            <SizePicker onChange={setSize} sizes={product.sizes} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
