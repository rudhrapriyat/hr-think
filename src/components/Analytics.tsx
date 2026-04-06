import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Legend
} from 'recharts';
import { TrendingUp, Users, DollarSign, Target, ArrowUpRight } from 'lucide-react';

const growthData = [
  { month: 'Jan', employees: 85, budget: 45000 },
  { month: 'Feb', employees: 88, budget: 48000 },
  { month: 'Mar', employees: 95, budget: 52000 },
  { month: 'Apr', employees: 102, budget: 58000 },
  { month: 'May', employees: 110, budget: 62000 },
  { month: 'Jun', employees: 124, budget: 70000 },
];

const performanceData = [
  { name: 'Engineering', score: 92 },
  { name: 'Design', score: 88 },
  { name: 'Marketing', score: 85 },
  { name: 'Sales', score: 94 },
  { name: 'People', score: 90 },
];

interface AnalyticsProps {
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
}

export default function Analytics({ showToast }: AnalyticsProps) {
  const handleExport = () => {
    showToast('Generating CSV report...', 'info');
    setTimeout(() => {
      showToast('Analytics data exported successfully!', 'success');
    }, 2500);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-display">Analytics & Reports</h1>
          <p className="text-slate-500">In-depth analysis of workforce performance and growth.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleExport}
            className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Export Data
          </button>
          <select className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 outline-none">
            <option>Last 6 Months</option>
            <option>Last Year</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Avg. Performance', value: '91.4%', icon: Target, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: 'Monthly Growth', value: '+14.2%', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Cost per Hire', value: '$4,250', icon: DollarSign, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Active Projects', value: '38', icon: Users, color: 'text-violet-600', bg: 'bg-violet-50' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className={`w-10 h-10 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Growth Chart */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-900">Workforce Growth</h3>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
              <ArrowUpRight className="w-3 h-3" />
              24% Increase
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="colorEmployees" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="employees" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorEmployees)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-8">Performance by Department</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }} 
                  width={100}
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="score" fill="#6366f1" radius={[0, 4, 4, 0]} barSize={24}>
                  {performanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#6366f1' : '#8b5cf6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
