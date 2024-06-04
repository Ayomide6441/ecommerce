import ProductItem from "@/components/ui/ProductItem";
function LatestList() {
  return (
    <div className="flex justify-between">
      <ProductItem
        image="../cover.png"
        price={35.0}
        inStock={true}
        productName="Classic Monochrome Tees"
      />
      <ProductItem
        image="../cover.png"
        price={27.0}
        inStock={true}
        productName="Monochromatic Wardrobe"
      />
    </div>
  );
}

export default LatestList;
