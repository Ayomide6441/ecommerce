import { Star } from "lucide-react";
// Star rating component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={13}
          className={`${
            i < rating ? "fill-[#5C5F6A] text-[#5C5F6A]" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default StarRating;
