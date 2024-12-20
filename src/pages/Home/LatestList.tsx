import ProductItem from "@/components/ui/ProductItem";
function LatestList() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4  gap-x-4 md:gap-x-4 lg:gap-x-6 gap-y-10">
      {new Array(6).fill(0).map((_, i) => {
        return (
          <div className="flex justify-center" key={i}>
            <ProductItem
              image="../cover1.png"
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
  );
}

export default LatestList;
