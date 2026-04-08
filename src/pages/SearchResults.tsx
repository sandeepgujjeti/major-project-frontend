import React from 'react';
import { ChevronRight, Check, ArrowLeft, ArrowRight, ChevronLeft } from 'lucide-react';
import { PRODUCTS, RELATED_FINDS } from '../constants';
import ProductCard from '../components/ProductCard';

export default function SearchResults({ onProductClick }: { onProductClick: (id: string) => void }) {
  return (
    <main className="pt-24 pb-20 px-8 max-w-screen-2xl mx-auto">
      {/* Breadcrumbs & Header */}
      <div className="flex flex-col gap-4 mb-12">
        <nav className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-outline/60">
          <button className="hover:text-primary">Home</button>
          <ChevronRight className="w-3 h-3" />
          <button className="hover:text-primary">Lifestyle</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-on-surface">Search Results</span>
        </nav>
        <div className="flex justify-between items-end">
          <div>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-on-surface">Curated Results</h1>
            <p className="text-outline mt-2">Showing 1–24 of 142 items for "Minimalist Workspace"</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-sans uppercase tracking-widest text-outline/60">Sorted by</span>
            <button className="flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded-lg text-sm font-semibold editorial-shadow border border-outline-variant/10">
              Newest Arrivals
              <ChevronRight className="w-4 h-4 rotate-90" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-12">
        {/* Sidebar Filters */}
        <aside className="w-64 flex-shrink-0">
          <div className="sticky top-28 flex flex-col gap-10">
            <section>
              <h3 className="font-headline font-bold text-sm mb-4 tracking-tight">Availability</h3>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded border border-outline-variant group-hover:border-primary flex items-center justify-center transition-colors bg-surface-container-lowest">
                    <Check className="text-primary w-3 h-3 opacity-0 transition-opacity" />
                  </div>
                  <span className="text-sm text-on-surface-variant font-medium">In Stock</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded border-2 border-primary flex items-center justify-center transition-colors bg-surface-container-lowest">
                    <Check className="text-primary w-3 h-3 opacity-100" />
                  </div>
                  <span className="text-sm text-on-surface font-semibold">Ready to Ship</span>
                </label>
              </div>
            </section>

            <section>
              <h3 className="font-headline font-bold text-sm mb-4 tracking-tight">Price Range</h3>
              <div className="px-2">
                <div className="h-1 bg-surface-container-high rounded-full relative mb-6">
                  <div className="absolute left-1/4 right-1/4 h-full bg-primary/20"></div>
                  <div className="absolute left-1/4 -top-1.5 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-sm cursor-pointer"></div>
                  <div className="absolute right-1/4 -top-1.5 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-sm cursor-pointer"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-sans text-outline">$50</span>
                  <span className="text-xs font-sans text-outline">$2,500</span>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-headline font-bold text-sm mb-4 tracking-tight">Brand</h3>
              <div className="flex flex-col gap-3">
                {['Aesthetic Studio', 'Mono Design', 'The Curator Co.'].map((brand, i) => (
                  <label key={brand} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className={brand === 'The Curator Co.' ? "w-5 h-5 rounded border-2 border-primary bg-surface-container-lowest flex items-center justify-center" : "w-5 h-5 rounded border border-outline-variant group-hover:border-primary transition-colors bg-surface-container-lowest"}>
                        {brand === 'The Curator Co.' && <Check className="text-primary w-3 h-3" />}
                      </div>
                      <span className={brand === 'The Curator Co.' ? "text-sm text-on-surface font-semibold" : "text-sm text-on-surface-variant"}>{brand}</span>
                    </div>
                    <span className="text-[10px] text-outline/40">{[12, 8, 21][i]}</span>
                  </label>
                ))}
              </div>
            </section>
            <button className="text-xs font-sans uppercase tracking-[0.1em] text-primary font-bold hover:underline underline-offset-4 w-fit">
              Reset All Filters
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {PRODUCTS.slice(0, 6).map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => onProductClick(product.id)} 
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center items-center gap-8">
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:border-primary hover:text-primary transition-all">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</span>
              <span className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-outline cursor-pointer">2</span>
              <span className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-outline cursor-pointer">3</span>
              <span className="px-2 text-outline">...</span>
              <span className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-outline cursor-pointer">6</span>
            </div>
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:border-primary hover:text-primary transition-all">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </div>

      {/* Similar Products Carousel */}
      <section className="mt-32 pt-20 border-t border-outline-variant/10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight mb-2">Explore Related Finds</h2>
            <p className="text-outline">Chosen for their minimalist soul and quality craftsmanship.</p>
          </div>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:border-primary hover:text-primary transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:border-primary hover:text-primary transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {RELATED_FINDS.map((item, i) => (
            <div key={i} className="flex flex-col gap-3 group cursor-pointer">
              <div className="aspect-square rounded-xl overflow-hidden bg-surface-container-low">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-headline font-bold text-sm">{item.name}</h4>
                <p className="text-xs text-primary font-bold">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
