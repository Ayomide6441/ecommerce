import ProductItem from "@/components/ui/ProductItem";

function FeaturedList() {
  return (
    <div className="grid grid-cols-4 gap-10">
      {new Array(5).fill(0).map((_, i) => {
        return (
          <div className="grid place-items-center" key={i}>
            <ProductItem
              image="../cover2.png"
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

export default FeaturedList;
