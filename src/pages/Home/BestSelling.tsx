import ProductItem from "@/components/common/product-item";
import { Text } from "@/components/ui/text";

function BestSelling() {
  return (
    <div className="container mb-24">
      <div className="text-center mb-10">
        <Text variant="label-2">Shop Now</Text>
        <Text variant="heading-2">Best Selling</Text>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <ProductItem
          image="../cover.png"
          price={35.0}
          inStock={true}
          productName="Classic Monochrome Tees"
        />
        <ProductItem
          image="../cover1.png"
          price={35.0}
          inStock={true}
          productName="Classic Monochrome Tees"
        />
        <ProductItem
          image="../cover2.png"
          price={35.0}
          inStock={true}
          productName="Classic Monochrome Tees"
        />
        <ProductItem
          image="../cover3.png"
          price={35.0}
          inStock={true}
          productName="Classic Monochrome Tees"
        />
        <ProductItem
          image="../cover4.png"
          price={35.0}
          inStock={true}
          productName="Classic Monochrome Tees"
        />
      </div>
    </div>
  );
}

export default BestSelling;
