import ItemCounter from "@/components/common/item-counter";
import { Text } from "@/components/ui/text";

function CartSheetItems() {
  return (
    <div className="flex flex-col gap-8 mt-4">
      <div className="flex gap-6">
        <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-lg">
          <img
            src="../../../public/cover6.png"
            alt="demo"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Text>Essential Neutrals</Text>
          <div className="flex items-center gap-8">
            <ItemCounter onClick={() => {}} quantity={1} />
            <Text>$22.00</Text>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-lg">
          <img
            src="../../../public/cover1.png"
            alt="demo"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Text>Essential Neutrals</Text>
          <div className="flex items-center gap-8">
            <ItemCounter onClick={() => {}} quantity={1} />
            <Text>$22.00</Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSheetItems;
