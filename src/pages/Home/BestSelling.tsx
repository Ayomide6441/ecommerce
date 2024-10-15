import ProductItem from "@/components/ui/ProductItem";
import { Text } from "@/components/ui/text";

function BestSelling() {
  return (
    <div className="container mb-24 flex flex-col ">
      <div className="text-center">
        <Text variant="label-2">Shop Now</Text>
        <Text variant="heading-2">Best Selling</Text>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <ProductItem
          image="../cover.png"
          price={35.0}
          inStock={true}
          productName="Classic Monochrome Tees"
        />
        <ProductItem
          image="../cover2.png"
          price={27.0}
          inStock={true}
          productName="Monochromatic Wardrobe"
        />
        <ProductItem
          image="../cover1.png"
          price={22.0}
          inStock={true}
          productName="Essential Neutrals"
        />
        <ProductItem
          image="../cover.png"
          price={35.0}
          inStock={true}
          productName="Classic Monochrome Tees"
        />
        <ProductItem
          image="../cover.png"
          price={35.0}
          inStock={true}
          productName="Classic Monochrome Tees"
        />
        <ProductItem
          image="../cover.png"
          price={35.0}
          inStock={true}
          productName="Classic Monochrome Tees"
        />
        <ProductItem
          image="../cover.png"
          price={35.0}
          inStock={true}
          productName="Classic Monochrome Tees"
        />
        <ProductItem
          image="../cover.png"
          price={35.0}
          inStock={true}
          productName="Classic Monochrome Tees"
        />
      </div>
    </div>
  );
}

export default BestSelling;
