import ProductItem from "@/components/ui/ProductItem";

function FeaturedList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
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
        image="../cover3.png"
        price={35.0}
        inStock={true}
        productName="Classic Monochrome Tees"
      />
      <ProductItem
        image="../cover5.png"
        price={35.0}
        inStock={true}
        productName="Classic Monochrome Tees"
      />
    </div>
  );
}

export default FeaturedList;
