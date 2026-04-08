import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow transition-all duration-300 hover:-translate-y-2 cursor-pointer"
    >
      <div className="aspect-[4/5] relative overflow-hidden bg-surface-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <button 
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-on-surface hover:text-red-500 transition-colors shadow-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <Heart className="w-5 h-5" />
        </button>
        {product.isEditorPick && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-tertiary-container/10 text-tertiary px-3 py-1 rounded-full text-[10px] font-sans uppercase tracking-widest font-bold backdrop-blur-sm">Editor's Pick</span>
          </div>
        )}
        {product.isStaffChoice && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-sans uppercase tracking-widest font-bold backdrop-blur-sm border border-primary/20">Staff Choice</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="text-[10px] font-sans uppercase tracking-widest text-outline mb-1">{product.category}</p>
        <h3 className="font-headline font-bold text-lg mb-2">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-primary font-headline font-bold text-xl">${product.price.toLocaleString()}</span>
          <button 
            className="cta-gradient text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
