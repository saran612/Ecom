import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type StarRatingProps = {
  rating: number;
  totalStars?: number;
  className?: string;
  size?: number;
};

export function StarRating({
  rating,
  totalStars = 5,
  className,
  size = 16,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1;
  const emptyStars = totalStars - Math.ceil(rating);

  return (
    <div className={cn("flex items-center", className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className="text-primary fill-primary"
          size={size}
        />
      ))}
      {partialStar > 0 && (
        <div className="relative">
          <Star className="text-primary" size={size} />
          <div
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{ width: `${partialStar * 100}%` }}
          >
            <Star className="text-primary fill-primary" size={size} />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star
          key={`empty-${i}`}
          className="text-muted-foreground/50"
          size={size}
        />
      ))}
    </div>
  );
}
