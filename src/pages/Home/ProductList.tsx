import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeaturedList from "./FeaturedList";
import LatestList from "./LatestList";

function ProductList() {
  return (
    <Tabs defaultValue="featured" className="container mb-24">
      <TabsList className="mb-12 flex justify-center bg-transparent gap-3">
        <TabsTrigger
          className="focus:border focus:px-6 focus:rounded-full shadow-none"
          value="featured"
        >
          Featured
        </TabsTrigger>
        <TabsTrigger
          className="focus:border focus:px-6 focus:rounded-full shadow-none"
          value="latest"
        >
          Latest
        </TabsTrigger>
      </TabsList>
      <TabsContent value="featured">
        <FeaturedList />
      </TabsContent>
      <TabsContent value="latest">
        <LatestList />
      </TabsContent>
    </Tabs>
  );
}

export default ProductList;
