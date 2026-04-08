import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low mt-20 border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-8 md:mb-0">
          <span className="text-xl font-headline font-bold text-on-surface">The Elevated Marketplace</span>
          <p className="text-outline text-sm max-w-xs">A curated collection of premium products for the discerning minimalist.</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-8">
            <button className="text-outline text-xs tracking-wide uppercase font-sans font-bold hover:text-primary transition-colors">Support</button>
            <button className="text-outline text-xs tracking-wide uppercase font-sans font-bold hover:text-primary transition-colors">Terms</button>
            <button className="text-outline text-xs tracking-wide uppercase font-sans font-bold hover:text-primary transition-colors">Privacy</button>
          </div>
          <span className="text-outline/40 text-xs font-sans uppercase tracking-widest">© 2024 The Elevated Marketplace. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
