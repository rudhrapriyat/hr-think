import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Calendar, 
  LogOut,
  ChevronRight,
  PieChart
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
}

export default function Sidebar({ activeTab, setActiveTab, onLogout, showToast }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'employees', icon: Users, label: 'Employees' },
    { id: 'recruitment', icon: Briefcase, label: 'Recruitment' },
    { id: 'schedule', icon: Calendar, label: 'Schedule' },
    { id: 'analytics', icon: PieChart, label: 'Analytics' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">H</span>
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight font-display">HR THINK</span>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 group",
                activeTab === item.id 
                  ? "bg-indigo-50 text-indigo-600" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className={cn(
                  "w-5 h-5",
                  activeTab === item.id ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"
                )} />
                <span className="font-medium text-sm">{item.label}</span>
              </div>
              {activeTab === item.id && <ChevronRight className="w-4 h-4" />}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-slate-100">
        <button 
          onClick={onLogout}
          className="flex items-center gap-3 text-rose-500 hover:text-rose-600 transition-colors w-full px-3 py-2 mt-2"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
}
