import ProductItem from "@/components/ui/ProductItem";
import { Text } from "@/components/ui/text";

function BestSelling() {
  return (
    <div className="container mb-24 flex flex-col ">
      <div className="text-center mb-10">
        <Text variant="label-2">Shop Now</Text>
        <Text variant="heading-2">Best Selling</Text>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4  gap-x-4 md:gap-x-4 lg:gap-x-6 gap-y-10">
        {new Array(6).fill(0).map((_, i) => {
          return (
            <div className="flex justify-center" key={i}>
              <ProductItem
                image="../cover.png"
                price={35.0}
                inStock={true}
                productName="Classic Monochrome Tees"
              />
            </div>
          );
        })}
        {/* <ProductItem
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
        /> */}
      </div>
    </div>
  );
}

export default BestSelling;
