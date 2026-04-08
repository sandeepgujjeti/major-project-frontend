import React from 'react';
import { Search, Heart, ShoppingCart, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  return (
    <header className="fixed top-0 w-full z-50 glass-nav shadow-sm h-20 flex items-center">
      <nav className="flex justify-between items-center px-8 w-full max-w-screen-2xl mx-auto h-full">
        <div className="flex items-center gap-12">
          <button 
            onClick={() => onNavigate('home')}
            className="text-2xl font-headline font-black text-primary tracking-tight"
          >
            The Elevated Marketplace
          </button>
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onNavigate('search')}
              className={cn(
                "font-headline font-bold tracking-tight text-sm transition-colors",
                currentPage === 'search' ? "text-primary border-b-2 border-primary pb-1" : "text-outline hover:text-primary"
              )}
            >
              Categories
            </button>
            <button className="text-outline hover:text-primary transition-colors font-headline font-bold tracking-tight text-sm">
              Deals
            </button>
            <button 
              onClick={() => onNavigate('seller')}
              className={cn(
                "font-headline font-bold tracking-tight text-sm transition-colors",
                currentPage === 'seller' ? "text-primary border-b-2 border-primary pb-1" : "text-outline hover:text-primary"
              )}
            >
              Seller Center
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-surface-container-high px-4 py-2 rounded-full w-64 group focus-within:bg-surface-container-lowest transition-all focus-within:ring-2 focus-within:ring-primary/20">
            <Search className="text-outline w-5 h-5" />
            <input 
              type="text" 
              placeholder="Curated search..." 
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-outline/60 ml-2"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:scale-95 transition-transform">
              <Heart className="text-on-surface w-6 h-6" />
            </button>
            <button 
              onClick={() => onNavigate('checkout')}
              className="hover:scale-95 transition-transform relative"
            >
              <ShoppingCart className={cn("w-6 h-6", currentPage === 'checkout' ? "text-primary" : "text-on-surface")} />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
            </button>
            <button className="hover:scale-95 transition-transform">
              <User className="text-on-surface w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
