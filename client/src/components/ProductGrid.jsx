import { useEffect, useState } from "react";

function FlipCard({ frontContent, backContent, className = "", onClick }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((f) => !f);
    onClick?.();
  };

  return (
    <div
      className={`relative w-full h-[320px] sm:h-[340px] cursor-pointer [perspective:1400px] ${className}`}
      onClick={handleFlip}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`
          relative w-full h-full transition-transform duration-700
          [transform-style:preserve-3d]
          ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
        `}
      >
        <div className="absolute w-full h-full [backface-visibility:hidden]">{frontContent}</div>
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">{backContent}</div>
      </div>
    </div>
  );
}

export default function FlippingProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=8")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="bg-[#f6f8fa] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f3f50] mb-2">
            Featured Products
          </h2>
          <div className="w-16 h-0.5 bg-[#2f3f50] mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <FlipCard
              key={product.id}
              className="group select-none"
              frontContent={
                <div className="
                  w-full h-full overflow-hidden 
                  rounded-xl border border-[#e3e6e9]
                  bg-white
                  shadow-sm hover:shadow-md transition
                  flex flex-col relative
                ">
                  {/* Minimal Brand Badge */}
                  <div className="absolute left-4 top-4 bg-[#2f3f50] text-white px-2 py-0.5 text-xs font-semibold rounded-full shadow-sm tracking-wide z-10">
                    {product.brand}
                  </div>
                  {/* Product Image */}
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="object-contain w-28 h-28"
                    />
                  </div>
                  <div className="px-4 pb-5">
                    <h3 className="text-base font-medium text-[#2f3f50] mb-2 text-center line-clamp-2">
                      {product.title}
                    </h3>
                    <div className="flex justify-center">
                      <span className="
                        rounded bg-[#2f3f50] text-white px-4 py-1 
                        font-bold text-lg
                      ">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </div>
              }
              backContent={
                <div className="
                  w-full h-full flex flex-col
                  bg-white rounded-xl border border-[#e3e6e9]
                  shadow-sm overflow-hidden
                ">
                  <div className="flex-1 flex flex-col px-6 py-5">
                    <h4 className="text-base font-bold text-center text-[#2f3f50] mb-3 mt-2">
                      Product Details
                    </h4>
                    <p className="text-xs text-gray-600 text-center mb-4 flex-1">
                      {product.description}
                    </p>
                    <div className="flex flex-col gap-2 text-xs">
                      <div className="flex justify-between items-center text-[#2f3f50]">
                        <span>Rating:</span>
                        <span className="font-bold">{product.rating} / 5</span>
                      </div>
                      <div className="flex justify-between items-center text-[#2f3f50]">
                        <span>Stock:</span>
                        <span className="font-bold">{product.stock} units</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-6 pb-5">
                    <button className="
                      w-full bg-[#2f3f50] hover:bg-[#233041]
                      text-white py-2 px-4 text-base font-semibold uppercase
                      rounded transition
                    ">
                      Add to Cart
                    </button>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
