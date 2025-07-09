import React, { useState } from 'react';
import { Heart, Star, Plus } from 'lucide-react';
import Button from './Button';

const ProductCard = ({ product, onAddToCart }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#D1FFD7] group">
      <div className="relative overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <button onClick={() => setIsLiked(!isLiked)} className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all">
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-[#656565]'}`} />
        </button>
        <div className="absolute top-3 left-3 bg-[#B3FFB3] text-[#656565] px-2 py-1 rounded-full text-sm font-medium">
          {product.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[#656565] mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-[#808782]">{product.rating}</span>
          </div>
          <span className="text-sm text-[#808782]">({product.reviews} reviews)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-[#656565]">${product.price}</span>
          <Button variant="primary" size="sm" onClick={() => onAddToCart(product)}>
            <Plus className="w-4 h-4" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;