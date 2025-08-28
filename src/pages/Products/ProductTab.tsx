import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/text";

function ProductTab() {
  return (
    <Tabs defaultValue="details" className="flex gap-20 container mt-24">
      <TabsList variant="vertical" className="gap-2 mt-12">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="details">
          <Text variant="heading-5" className="mb-5">
            Detail
          </Text>
          <Text variant="body-1">
            Elevate your everyday style with our Men's Black T-Shirts, the
            ultimate wardrobe essential for modern men. Crafted with meticulous
            attention to detail and designed for comfort, these versatile black
            tees are a must-have addition to your collection. The classic black
            color never goes out of style. Whether you're dressing up for a
            special occasion or keeping it casual, these black t-shirts are the
            perfect choice, effortlessly complementing any outfit.<br></br>
            Elevate your everyday style with our Men's Black T-Shirts, the
            ultimate wardrobe essential for modern men. Crafted with meticulous
            attention to detail and designed for comfort, these versatile black
            tees are a must-have addition to your collection. The classic black
            color never goes out of style. Whether you're dressing up for a
            special occasion or keeping it casual, these black t-shirts are the
            perfect choice, effortlessly complementing any outfit.
          </Text>
          <ul className="list-disc list-inside pt-5">
            <li>
              <Text variant="body-1" className="inline">
                Premium Quality
              </Text>
            </li>
            <li>
              <Text variant="body-1" className="inline">
                Versatile Wardrobe Staple
              </Text>
            </li>
            <li>
              <Text variant="body-1" className="inline">
                Available in Various Sizes
              </Text>
            </li>
            <li>
              <Text variant="body-1" className="inline">
                Tailored Fit
              </Text>
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="reviews">Reviews content</TabsContent>
      </div>
    </Tabs>
  );
}

export default ProductTab;
