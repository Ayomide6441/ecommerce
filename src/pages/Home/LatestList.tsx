import ProductItem from "@/components/ui/ProductItem";
function LatestList() {
  return (
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
        image="../cover2.png"
        price={27.0}
        inStock={true}
        productName="Monochromatic Wardrobe"
      />
      <ProductItem
        image="../cover2.png"
        price={27.0}
        inStock={true}
        productName="Monochromatic Wardrobe"
      />
    </div>
  );
}

export default LatestList;
