import { useEffect, useState } from "react";

function FlipCard({ frontContent, backContent, className = "", onClick }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    onClick?.();
  };

  return (
    <div
      className={`relative w-full h-[280px] cursor-pointer [perspective:1000px] ${className}`}
      onClick={handleFlip}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          {frontContent}
        </div>
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {backContent}
        </div>
      </div>
    </div>
  );
}

export default function FlippingProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Use dummyjson.com API
    fetch("https://dummyjson.com/products?limit=8")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-gray-900 mb-2">Featured Products</h2>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
        </div>
        
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <FlipCard
              key={product.id}
              frontContent={
                <div className="w-full h-full bg-white border border-gray-200 hover:border-gray-300 transition-colors duration-200 flex flex-col">
                  <div className="flex-1 p-6 flex flex-col items-center justify-center">
                    <div className="w-32 h-32 mb-4 flex items-center justify-center">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 text-center mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-900">${product.price}</p>
                  </div>
                </div>
              }
              backContent={
                <div className="w-full h-full bg-white border border-gray-200 flex flex-col">
                  <div className="flex-1 p-6 flex flex-col">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 text-center">
                      Product Details
                    </h4>
                    <p className="text-xs text-gray-600 text-center mb-6 flex-1 line-clamp-6">
                      {product.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>Rating:</span>
                        <span className="font-medium">{product.rating}/5</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>Stock:</span>
                        <span className="font-medium">{product.stock} units</span>
                      </div>
                      <button className="w-full bg-gray-900 text-white py-2 px-4 text-sm font-medium hover:bg-gray-800 transition-colors duration-200 mt-4">
                        Add to Cart
                      </button>
                    </div>
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