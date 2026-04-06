import React from 'react';
import { Search, Bell, HelpCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search employees, documents, or tasks..." 
            className="w-full bg-slate-50 border border-slate-200 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-all relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-all">
          <HelpCircle className="w-5 h-5" />
        </button>
        
        <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
        
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Alex Rivera</p>
            <p className="text-xs text-slate-500">HR Director</p>
          </div>
          <img 
            src="https://picsum.photos/seed/admin/100/100" 
            alt="Profile" 
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-200"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}
