import React from 'react';
import { LayoutDashboard, Package, ShoppingBag, UploadCloud, TrendingUp, Search, Filter, Plus } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { cn } from '../lib/utils';

export default function SellerCenter() {
  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar */}
      <aside className="w-64 border-r border-outline-variant/10 bg-surface-container-low p-6 flex flex-col gap-8 fixed h-full">
        <div>
          <h1 className="text-xl font-headline font-black text-on-surface">Seller Center</h1>
          <p className="text-[10px] text-outline uppercase tracking-widest font-bold">Managing Storefront</p>
        </div>
        <nav className="flex flex-col gap-2">
          {[
            { icon: LayoutDashboard, label: 'Dashboard', active: true },
            { icon: Package, label: 'Inventory' },
            { icon: ShoppingBag, label: 'Orders' },
            { icon: UploadCloud, label: 'Product Upload' }
          ].map((item, i) => (
            <button 
              key={i} 
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg font-headline font-bold text-sm transition-all",
                item.active ? "bg-white text-primary shadow-sm" : "text-outline hover:bg-surface-container"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="mt-auto space-y-6">
          <button className="w-full cta-gradient text-white py-3 rounded-xl font-headline font-bold text-sm shadow-lg hover:-translate-y-0.5 transition-transform flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" />
            Create Listing
          </button>
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-primary/20"></div>
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface">Alex Chen</p>
              <p className="text-[10px] text-outline uppercase tracking-widest">Premium Seller</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8 flex-1">
        <header className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-headline font-extrabold tracking-tight text-on-surface">Store Overview</h2>
            <p className="text-on-surface-variant mt-1">Real-time performance and inventory metrics.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-surface-container-low text-on-surface px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-surface-container transition-colors">Export Report</button>
            <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold text-sm shadow-md hover:bg-primary-container transition-colors">Refresh Data</button>
          </div>
        </header>

        {/* Analytics Grid */}
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-8 bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-lg font-bold font-headline">Sales Performance</h3>
                <p className="text-sm text-on-surface-variant">Revenue growth over the last 30 days</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-primary">$42,850</span>
                <span className="block text-xs font-bold text-green-600">+12.5% vs last month</span>
              </div>
            </div>
            <div className="h-64 flex items-end justify-between gap-2 px-2">
              {[40, 55, 45, 70, 60, 85, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-primary/10 rounded-t-sm relative group" style={{ height: `${h}%` }}>
                  <div className={cn("absolute inset-x-0 bottom-0 bg-primary/40 rounded-t-sm transition-all group-hover:bg-primary", i === 6 ? "h-full bg-primary" : "h-full")}></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-[10px] font-bold text-outline uppercase tracking-tighter">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <span key={d}>{d}</span>)}
            </div>
          </div>
          <div className="col-span-4 flex flex-col gap-6">
            <div className="flex-1 bg-primary text-white p-8 rounded-xl shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-sm font-sans uppercase tracking-widest opacity-80">Total Orders</p>
                <h3 className="text-4xl font-black mt-2">1,284</h3>
                <div className="mt-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs font-bold">24 new today</span>
                </div>
              </div>
              <ShoppingBag className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
            </div>
            <div className="flex-1 bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
              <p className="text-sm font-sans uppercase tracking-widest text-on-surface-variant">Active Customers</p>
              <h3 className="text-4xl font-black mt-2 text-on-surface">892</h3>
              <div className="mt-6 flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-surface-container-high"></div>
                ))}
                <div className="w-8 h-8 rounded-full bg-outline-variant flex items-center justify-center text-[10px] font-bold text-white">+12</div>
              </div>
            </div>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
          <div className="p-6 flex justify-between items-center border-b border-surface-container">
            <h3 className="text-xl font-bold">Recent Inventory</h3>
            <div className="flex gap-2">
              <Search className="text-outline w-5 h-5 cursor-pointer" />
              <Filter className="text-outline w-5 h-5 cursor-pointer" />
            </div>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface text-[10px] font-bold text-outline uppercase tracking-widest">
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">SKU</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Stock</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {PRODUCTS.slice(0, 3).map(p => (
                <tr key={p.id} className="group hover:bg-surface/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={p.image} className="w-10 h-10 rounded object-cover" referrerPolicy="no-referrer" />
                      <div>
                        <p className="text-sm font-bold">{p.name}</p>
                        <p className="text-xs text-on-surface-variant">{p.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-mono text-outline">{p.sku}</td>
                  <td className="px-6 py-4 text-sm font-semibold">${p.price}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      p.status === 'In Stock' ? "bg-green-50 text-green-700" : "bg-tertiary-container/10 text-tertiary"
                    )}>
                      <span className={cn("w-1.5 h-1.5 rounded-full", p.status === 'In Stock' ? "bg-green-500" : "bg-tertiary")}></span>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-sm">{p.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
