import React from "react";
import {
  ShoppingCart,
  Star,
  Tag,
  Zap,
} from "lucide-react";

const WelcomeProductCard = ({ product }) => {
  return (
    <article className="group relative flex min-w-[290px] w-[290px] flex-col overflow-hidden rounded-2xl border border-[#dddccf] bg-white shadow-[0_4px_18px_rgba(55,76,49,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(55,76,49,0.15)] sm:min-w-[300px] sm:w-[300px] lg:min-w-0 lg:w-auto">
      
      {/* Product Image */}
      <div className="relative h-[270px] overflow-hidden bg-[#f5f4ea]">
        
        {/* Discount */}
        <div className="absolute left-3 top-3 z-20 rounded-full rounded-tl-none bg-[#176653] px-3 py-2 text-xs font-bold text-white shadow-md">
          {product.discount}
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute right-3 top-3 z-20 rounded-full rounded-tr-none bg-[#d99b18] px-3 py-2 text-xs font-bold text-white shadow-md">
            {product.badge}
          </div>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />

        {/* Image gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent" />

        {/* Add Button */}
        <button
          type="button"
          className="absolute bottom-3 right-3 z-20 flex items-center gap-2 rounded-xl bg-[#176653] px-5 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#105445] hover:scale-105 active:scale-95"
        >
          <span>{product.buttonText}</span>
          <ShoppingCart size={17} />
        </button>
      </div>

      {/* Product Content */}
      <div className="flex flex-1 flex-col p-4">
        
        {/* Product name */}
        <h3 className="min-h-[52px] font-serif text-[18px] leading-6 text-[#173f35]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1.5">
          <Star
            size={16}
            fill="#f4b400"
            color="#f4b400"
          />

          <span className="text-sm font-semibold text-[#264c42]">
            {product.rating}
          </span>

          <span className="text-xs text-gray-500">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-3">
          <span className="text-sm text-gray-400 line-through">
            {product.oldPrice}
          </span>

          <span className="text-xl font-bold text-[#163f35]">
            {product.price}
          </span>
        </div>

        {/* Quantity */}
        <div className="mt-2">
          <span className="inline-flex rounded-full bg-[#edf5e9] px-3 py-1 text-xs font-semibold text-[#176653]">
            {product.quantity}
          </span>
        </div>

        {/* Bottom offer */}
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-[#edf6ec] px-3 py-2 text-xs font-semibold text-[#176653]">
          <Tag size={14} />

          <span className="truncate">
            {product.bottomText}
          </span>
        </div>
      </div>
    </article>
  );
};

export default WelcomeProductCard;