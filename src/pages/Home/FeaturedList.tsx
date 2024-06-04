import ProductItem from "@/components/ui/ProductItem";

function FeaturedList() {
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
      <ProductItem
        image="../cover.png"
        price={22.0}
        inStock={true}
        productName="Essential Neutrals"
      />
    </div>
  );
}

export default FeaturedList;
