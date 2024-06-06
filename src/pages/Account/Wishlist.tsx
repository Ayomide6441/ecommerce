import WishListBox from "@/Features/WishList/WishListBox";
import { Text } from "@/components/ui/text";

function Wishlist() {
  return (
    <div className="flex flex-col gap-10">
      <Text variant="heading-5">Wishlist</Text>
      <WishListBox />
    </div>
  );
}

export default Wishlist;
