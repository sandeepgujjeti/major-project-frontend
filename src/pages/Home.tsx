import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Home({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[819px] w-full overflow-hidden flex items-center bg-surface-container-low">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaFOZEnz1Z3fZKxLlJIIIN9b1qmdMmSZhnEN9LbdoCzR46luYWKK8L0I_XG8CAtnIyMP1dDD1FfRyCO-It5gsmBhF1Pi8YVO24c1S3m-hIXs-1svlYEqntbhvFtRko-r5K7WzdbTALSAqoUx1w-Y6YsQjWuT1jsYqkxbDz8Wpf45AQpfWeRoXOKm01vX9zLTAjxFXMgrWuMCdJtzQjldfSZZnwXhWRmY9LKd1MwCP4qz8hYjTd5xDxtRP9YsfwwmGZj034Bcd5RQ" 
            alt="Hero" 
            className="w-full h-full object-cover brightness-95"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-2xl bg-white/20 backdrop-blur-md p-12 rounded-xl border border-white/30 shadow-2xl">
            <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block text-xs">New Season Arrival</span>
            <h1 className="text-6xl font-headline font-extrabold text-on-surface leading-tight mb-6">The Art of <br/>Curated Living</h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-md font-sans leading-relaxed">Discover a collection where every piece is hand-selected for its design integrity and exceptional craftsmanship.</p>
            <button 
              onClick={() => onNavigate('search')}
              className="cta-gradient text-white px-10 py-4 rounded-lg font-bold text-lg hover:-translate-y-0.5 transition-all shadow-lg flex items-center gap-2"
            >
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-headline font-extrabold text-on-surface tracking-tight mb-2">Curated Categories</h2>
              <p className="text-on-surface-variant font-sans">Explore our meticulously organized collections</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-1 hover:underline">
              View All Collections <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[600px]">
            <div className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRGDDZq8BSavCzxWua5TshCN3shIsaowyXg-y9pwemG4ezEvmqCDrntUJ_4ZzgQR8pAUEZPDZcmdKEVCa91Gsl9h1UgGBQ90kxbf0qaIRQJOIM8u-qzyTy2bVJLA5BXTCIYxndfUVcHoNfgM7BMeU2s49L6GERce33I8sjVjgiByiQo4yqP_StYC3MMg4QZjO8COE2ER8iKKknsY3bc6whtW1eHSIWWgQVGJZDO3DzRaGdv5m5RikJnX-6SUEHZoC0cSzEUVztYQ" 
                alt="Home Decor" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-3xl font-headline font-bold mb-2">Home Decor</h3>
                <p className="text-white/80 font-sans text-sm">Elevate your living space with artisan pieces</p>
              </div>
            </div>
            <div className="md:col-span-2 relative rounded-xl overflow-hidden group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD644SVHOHOEkuFCFAZcMo8J-mxZi0G0ioqA32M1u0kbAHv7YHKu8odGmH0hYzGg0gtfZBJ1X5zjKrEPGRviVZBZ_bs9kvgKuM4fKJGyY9B8xInb5-TDscPMf4zlIcVQoKvHWuHvfWy5rZZXUz1XtvYa4EkZ74HBv_AUsN5AZtJpZ5caV2zTvJa-WTQEalcZzjlInNjh0LJ3jEOoJCTOifyz4bAeCjbb9twLgUnzhPEPAcsWXjXGaR_QKb62tJW6p_XFA7CkpG39Q" 
                alt="Fashion" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-2xl font-headline font-bold mb-1">Modern Fashion</h3>
                <p className="text-white/80 font-sans text-xs">Timeless silhouettes for the modern wardrobe</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgT-BTBsZrA5lBzhTiQpxLfAyibXffRYUWY-nvzbhja60wPIaoIe_NF9ALWoadFjqhSe2ue6U3vG0M1lShCTk-sB9lZXsOWoQ2ufGSvTdsLNV9m_sObnibcqCYiQOncKe50O_Tb5dyQnS5N5SqduDcF8XnuEzIR4hVWrXZoBM-fRUohbgu_mk80naLt-SaHUbC-Z5moZ_-fw8f4vAyhWfEJ803664S1TaLuXhBbiWr3yGpFS0vI1wcZpRQg4kLYnI2bmStXV5MMg" 
                alt="Electronics" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-xl font-headline font-bold">Electronics</h3>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsSS0LfxXufnqLCZT9c0e-QABpkMOvrZknmJxKh5FP5VAFx0raC4AGt5EEMWvcy9f_qZhV5FX0A4y8uaq4CZGQAIK_t4U7eX5eXzh2OaC-J3lmA6U8cKnVSkwDCfAhOGH_YAKWgCxr78HzmCaZ5mJb--xMOZjGB4pAnVyI60YTW_hUl1nEV0vS0n2OnIhokeeYcpCc8u9yniOhu_INzONJE3HAKBCHzPosf0ZMdDMXuZYYv6683MXlv6TPd6sxDplW6FirZlKBLg" 
                alt="Accessories" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-xl font-headline font-bold">Accessories</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Promo */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 bg-primary rounded-[2rem] p-16 text-white relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <span className="font-bold tracking-[0.2em] uppercase mb-6 block text-xs opacity-80">Exclusive Partnership</span>
              <h2 className="text-5xl font-headline font-extrabold mb-8 max-w-lg leading-tight">Elevated Living for the Modern Nomad</h2>
              <p className="text-xl opacity-80 mb-10 max-w-md font-sans">Discover our limited collaboration with global artisans focusing on sustainable travel essentials.</p>
              <div className="flex gap-4">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-surface-container transition-colors">Explore Collection</button>
              </div>
            </div>
            <div className="lg:col-span-5 bg-surface-container-high rounded-[2rem] overflow-hidden relative group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjL-fbVVR53uvhtddUrKA00tJUbyzydZ8wyGOdmyJ6YWvUOY8EeVK5oAcWds1EApCBk6tbQzAh6zBVpSW1VxZ6tsHx5cOjp08szPLhqjxF5sO7AVwA4timQokgYiFeEYCoc_syJ_QDSYRxSFGSRNzd9dQWbLeCXW7WtLHINY0KIO7eYBk94BQSFVco6kd5E1nhSg6GTIe3_zZ0QY2SGO2XZUImIdVKIwElDf7bax9xivDCqQKl0NYupY5XKTuKzaujMrTz-7a8Yw" 
                alt="Promo" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
