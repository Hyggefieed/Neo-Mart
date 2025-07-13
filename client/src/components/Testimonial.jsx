import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const Marquee = ({
  children,
  direction = "left",
  speed = 50,
  pauseOnHover = true,
  className = "",
}) => {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, [children]);

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        className="flex min-w-full gap-5"
        style={{
          animation: `scroll-${direction} ${contentWidth / speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        <div ref={contentRef} className="flex gap-5 shrink-0">
          {children}
        </div>
        <div className="flex gap-5 shrink-0">{children}</div>
      </div>

      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

const ReviewCard = ({ avatar, name, rating, review }) => (
  <div className="w-72 p-5 bg-white rounded-lg border border-gray-100 shadow-xs flex-shrink-0">
    <div className="flex items-center gap-3 mb-3">
      <img
        src={avatar}
        alt={name}
        className="w-9 h-9 rounded-full object-cover"
      />
      <div className="min-w-0 flex-1">
        <h3 className="font-medium text-gray-900 text-sm">{name}</h3>
        <div className="flex gap-0.5 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < rating ? "text-gray-700 fill-gray-200" : "text-gray-300"}`}
              strokeWidth={1.5}
            />
          ))}
        </div>
      </div>
    </div>
    <p className="text-sm text-gray-600">{review}</p>
  </div>
);

export default function MarqueeDemo() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      rating: 5,
      review: "This product exceeded my expectations. The quality is outstanding and customer service was excellent.",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      rating: 4,
      review: "Great value for money. Would recommend to others looking for a reliable solution.",
    },
    {
      id: 3,
      name: "Emma Davis",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      rating: 5,
      review: "Absolutely love it! The features are exactly what I needed.",
    },
    {
      id: 4,
      name: "James Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 4,
      review: "Very impressed with the quality and attention to detail.",
    },
  ];

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-xl font-medium text-gray-900">
          Customer Reviews
        </h2>
        {/* <p className="mt-2 text-gray-500 max-w-lg mx-auto">
          What people are saying about our products
        </p> */}
      </div>
      
      <Marquee direction="left" speed={30}>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            avatar={review.avatar}
            name={review.name}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </Marquee>
    </div>
  );
}