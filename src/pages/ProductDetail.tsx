import React from 'react';
import { ChevronRight, Star, ShoppingBag, Truck, ShieldCheck, GitCompareArrows } from 'lucide-react';
import { PRODUCTS, REVIEWS } from '../constants';
import { cn } from '../lib/utils';

export default function ProductDetail({ productId }: { productId: string }) {
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[6]; // Default to Sound Engineer X

  return (
    <main className="pt-28 pb-20 px-8 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-8 text-xs font-sans uppercase tracking-widest text-outline">
        <button className="hover:text-primary">Home</button>
        <ChevronRight className="w-4 h-4" />
        <button className="hover:text-primary">{product.category}</button>
        <ChevronRight className="w-4 h-4" />
        <span className="text-on-surface-variant">{product.name}</span>
      </nav>

      {/* Product Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        {/* Gallery */}
        <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
          <div className="flex-1 bg-surface-container-low rounded-xl overflow-hidden group">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-row md:flex-col gap-4 w-full md:w-24">
            {[1, 2, 3].map(i => (
              <button key={i} className={cn("w-full aspect-square rounded-lg overflow-hidden bg-surface-container-low transition-all", i === 1 ? "border-2 border-primary" : "border border-outline-variant/20 hover:border-primary")}>
                <img src={product.image} className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-tertiary-container/10 text-tertiary font-sans text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Editor's Choice</span>
            <span className="text-outline text-sm font-sans uppercase tracking-widest">Artisan Audio Lab</span>
          </div>
          <h1 className="text-5xl font-headline font-extrabold tracking-tight text-on-surface mb-2">{product.name}</h1>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex text-primary">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className={cn("w-5 h-5", i <= Math.floor(product.rating) ? "fill-primary" : "text-outline")} />
              ))}
            </div>
            <span className="text-sm font-medium text-on-surface-variant">{product.rating} ({product.reviewsCount.toLocaleString()} Reviews)</span>
          </div>
          <div className="bg-surface-container-low rounded-xl p-6 mb-8">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-4xl font-headline font-extrabold text-primary">${product.price.toLocaleString()}</span>
              {product.oldPrice && <span className="text-outline line-through text-lg">${product.oldPrice.toLocaleString()}</span>}
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">{product.description}</p>
          </div>
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-4">
              <button className="flex-1 cta-gradient text-white font-headline font-bold py-4 rounded-lg shadow-lg hover:-translate-y-0.5 transition-transform">Buy Now</button>
              <button className="flex-1 bg-white border border-outline-variant/30 text-primary font-headline font-bold py-4 rounded-lg hover:bg-surface-container-low transition-colors">Add to Cart</button>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-3 text-sm font-sans uppercase tracking-widest text-outline hover:text-primary transition-colors">
              <GitCompareArrows className="w-5 h-5" />
              Compare to Similar
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 border border-outline-variant/10 rounded-lg">
              <Truck className="text-primary w-6 h-6" />
              <div>
                <p className="text-xs font-bold uppercase tracking-tighter">Free Shipping</p>
                <p className="text-[10px] text-outline">Arrives in 2-3 days</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 border border-outline-variant/10 rounded-lg">
              <ShieldCheck className="text-primary w-6 h-6" />
              <div>
                <p className="text-xs font-bold uppercase tracking-tighter">2-Year Warranty</p>
                <p className="text-[10px] text-outline">Comprehensive coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs & Comparison */}
      <section className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-headline font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary"></span>
              Technical Specifications
            </h3>
            <div className="space-y-0">
              {[
                { label: 'Driver Type', value: '40mm Dynamic Neodymium' },
                { label: 'Frequency Response', value: '5Hz – 40,000Hz' },
                { label: 'Impedance', value: '32 Ohms' },
                { label: 'Battery Life', value: 'Up to 45 Hours' },
                { label: 'Weight', value: '285 Grams' }
              ].map(spec => (
                <div key={spec.label} className="flex justify-between py-5 border-b border-outline-variant/10">
                  <span className="text-outline font-sans text-sm uppercase tracking-wider">{spec.label}</span>
                  <span className="font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-8">
            <h3 className="text-2xl font-headline font-bold mb-8">The Market Comparison</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-surface-container"></div>
                <div className="flex-1">
                  <p className="text-sm font-bold">Studio Master Pro</p>
                  <p className="text-xs text-outline">$349.00</p>
                </div>
                <span className="text-xs font-bold text-red-500 uppercase tracking-tighter">Lower Spec</span>
              </div>
              <div className="flex items-center gap-4 bg-primary/5 p-4 rounded-xl border border-primary/20 ring-2 ring-primary/10">
                <div className="w-12 h-12 rounded-lg bg-primary/20"></div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-primary">Sound Engineer X</p>
                  <p className="text-xs text-primary/70">$499.00</p>
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-tighter">Optimal Choice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-headline font-bold mb-8">Customer Stories</h3>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl font-headline font-extrabold text-on-surface">4.8</span>
              <div>
                <div className="flex text-primary mb-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-primary" />)}
                </div>
                <p className="text-xs text-outline uppercase tracking-widest">Based on 1.2k reviews</p>
              </div>
            </div>
            <div className="space-y-4">
              {[85, 10, 3, 1, 1].map((p, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-xs font-bold w-4">{5 - i}</span>
                  <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${p}%` }}></div>
                  </div>
                  <span className="text-xs text-outline w-8">{p}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-2/3 space-y-12">
            {REVIEWS.map(review => (
              <div key={review.id} className="pb-12 border-b border-outline-variant/10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg mb-1">{review.title}</h4>
                    <div className="flex text-primary mb-2">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-primary" />)}
                    </div>
                  </div>
                  <span className="text-xs text-outline">{review.date}</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-4">{review.content}</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">{review.initials}</div>
                  <span className="text-xs font-bold">{review.author}</span>
                  {review.isVerified && <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">Verified Buyer</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
