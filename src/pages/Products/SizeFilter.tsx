import SizePicker from "@/components/ui/sizePicker";
const availableSizes = ["S", "M", "L", "XL", "XXL"];
type Props = {
  onChange: (selected: string[]) => void;
};
export default function SizeFilter({ onChange }: Props) {
  return (
    <div>
      <label className="block mb-5 font-medium">Size</label>
      <SizePicker onChange={onChange} sizes={availableSizes} />
    </div>
  );
}
