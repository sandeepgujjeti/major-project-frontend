import React from 'react';
import { Minus, Plus, Trash2, CreditCard, Wallet, Lock, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../constants';

export default function Checkout() {
  const cartItems = [PRODUCTS[0], PRODUCTS[6]];

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <h1 className="font-headline font-extrabold text-4xl lg:text-5xl mb-12 tracking-tight">Your Selection</h1>
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Cart Items */}
        <div className="flex-1 w-full">
          <div className="space-y-8">
            {cartItems.map((item, i) => (
              <div key={i} className="group flex gap-8 pb-8 border-b border-outline-variant/15 last:border-0">
                <div className="w-32 h-40 bg-surface-container-low rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col justify-between py-1 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-sans text-[10px] tracking-widest uppercase text-tertiary font-bold mb-1 block">Curated Artifact</span>
                      <h3 className="font-headline font-bold text-xl mb-1">{item.name}</h3>
                      <p className="text-on-surface-variant text-sm font-sans">{item.brand}</p>
                    </div>
                    <span className="font-headline font-bold text-xl">${item.price.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center bg-surface-container rounded-full px-2 py-1">
                      <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-bold text-sm">1</span>
                      <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button className="flex items-center gap-1 text-sm font-medium text-outline hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Shipping Form */}
          <div className="mt-16 pt-16 border-t border-outline-variant/15">
            <h2 className="font-headline font-bold text-2xl mb-8">Shipping Particulars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1 md:col-span-2">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-2">Full Name</label>
                <input className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all" placeholder="Julian Sterling" type="text"/>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-2">Email Address</label>
                <input className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all" placeholder="julian@example.com" type="email"/>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-2">Phone Number</label>
                <input className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all" placeholder="+1 (555) 000-0000" type="tel"/>
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-2">Delivery Address</label>
                <input className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all" placeholder="123 Gallery Row, Apt 4B" type="text"/>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Summary */}
        <aside className="w-full lg:w-[420px] sticky top-32">
          <div className="bg-surface-container-low rounded-xl p-8 editorial-shadow">
            <h2 className="font-headline font-bold text-xl mb-6">Order Intelligence</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-on-surface-variant font-sans">
                <span>Subtotal</span>
                <span>$1,739.00</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant font-sans">
                <span>Curated Shipping</span>
                <span className="text-primary font-medium">Free</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant font-sans">
                <span>Estimated Tax</span>
                <span>$139.12</span>
              </div>
              <div className="pt-4 mt-4 border-t border-outline-variant/30 flex justify-between items-center">
                <span className="font-headline font-bold text-lg">Total</span>
                <span className="font-headline font-extrabold text-2xl text-primary">$1,878.12</span>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-outline mb-4">Payment Method</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg border-2 border-primary/20 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <CreditCard className="text-primary w-5 h-5" />
                    <span className="text-sm font-semibold">Credit Card</span>
                  </div>
                  <input defaultChecked name="payment" type="radio" className="text-primary focus:ring-primary" />
                </label>
                <label className="flex items-center justify-between p-4 bg-transparent border border-outline-variant/30 rounded-lg cursor-pointer hover:bg-surface-container-high transition-colors">
                  <div className="flex items-center gap-3">
                    <Wallet className="text-outline w-5 h-5" />
                    <span className="text-sm font-semibold">PayPal</span>
                  </div>
                  <input name="payment" type="radio" className="text-primary focus:ring-primary" />
                </label>
              </div>
            </div>
            <button className="w-full cta-gradient text-white py-5 rounded-lg font-headline font-extrabold text-lg shadow-lg shadow-primary/20 hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
              Place Order
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 opacity-40">
            <div className="flex items-center gap-1">
              <Lock className="w-3 h-3" />
              <span className="text-[10px] font-bold uppercase tracking-tighter">Secure Checkout</span>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              <span className="text-[10px] font-bold uppercase tracking-tighter">Certified Authenticity</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
