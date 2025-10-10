import WishListBox from "@/features/wish-list/WishListBox";
import { Text } from "@ecommerce/ui/components/text";

function Wishlist() {
  return (
    <div className="flex flex-col gap-10">
      <Text variant="heading-5">Wishlist</Text>
      <WishListBox />
    </div>
  );
}

export default Wishlist;
