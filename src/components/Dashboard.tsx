import React from 'react';
import { 
  Users, 
  UserPlus, 
  Clock, 
  TrendingUp,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Mail,
  Briefcase,
  MapPin
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { motion } from 'motion/react';
import { DEPARTMENT_STATS, ATTENDANCE_DATA, MOCK_EMPLOYEES } from '../constants';

const metrics = [
  { label: 'Total Employees', value: '124', change: '+12%', trend: 'up', icon: Users, color: 'bg-indigo-500' },
  { label: 'New Hires', value: '8', change: '+2%', trend: 'up', icon: UserPlus, color: 'bg-emerald-500' },
  { label: 'Attendance Rate', value: '94%', change: '-1%', trend: 'down', icon: Clock, color: 'bg-amber-500' },
  { label: 'Retention Rate', value: '98%', change: '+0.5%', trend: 'up', icon: TrendingUp, color: 'bg-violet-500' },
];

interface DashboardProps {
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  openModal: (title: string, content: React.ReactNode) => void;
}

export default function Dashboard({ showToast, openModal }: DashboardProps) {
  const handleAddEmployee = () => {
    openModal('Add New Employee', (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20" placeholder="John" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20" placeholder="Doe" />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
          <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20" placeholder="john.doe@company.com" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase">Department</label>
          <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
            <option>Engineering</option>
            <option>Design</option>
            <option>Marketing</option>
            <option>Sales</option>
          </select>
        </div>
        <div className="pt-4 flex gap-3">
          <button className="flex-1 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg font-bold text-sm hover:bg-slate-200 transition-colors">Cancel</button>
          <button 
            onClick={() => showToast('Employee added successfully!', 'success')}
            className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold text-sm hover:bg-indigo-700 transition-colors"
          >
            Save Employee
          </button>
        </div>
      </div>
    ));
  };

  const handleDownloadReport = () => {
    showToast('Preparing your report for download...', 'info');
    setTimeout(() => {
      showToast('Dashboard report downloaded successfully!', 'success');
    }, 2000);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Good morning, Alex</h1>
          <p className="text-slate-500">Here's what's happening with your workforce today.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleDownloadReport}
            className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Download Report
          </button>
          <button 
            onClick={handleAddEmployee}
            className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
          >
            Add Employee
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`${metric.color} p-3 rounded-xl text-white`}>
                <metric.icon className="w-6 h-6" />
              </div>
              <button className="text-slate-400 hover:text-slate-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium">{metric.label}</p>
              <div className="flex items-end gap-2 mt-1">
                <h3 className="text-2xl font-bold text-slate-900">{metric.value}</h3>
                <span className={`flex items-center text-xs font-bold mb-1 ${
                  metric.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'
                }`}>
                  {metric.trend === 'up' ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                  {metric.change}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Attendance Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-900">Weekly Attendance</h3>
            <select className="bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium px-2 py-1 outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ATTENDANCE_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="present" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={32} />
                <Bar dataKey="absent" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Department Breakdown */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-8">Department Breakdown</h3>
          <div className="h-[250px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={DEPARTMENT_STATS}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="count"
                >
                  {DEPARTMENT_STATS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-2xl font-bold text-slate-900">124</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Total</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {DEPARTMENT_STATS.map((dept) => (
              <div key={dept.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: dept.color }}></div>
                  <span className="text-sm text-slate-600 font-medium">{dept.name}</span>
                </div>
                <span className="text-sm font-bold text-slate-900">{dept.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Employees Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900">Recent Hires</h3>
          <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Join Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_EMPLOYEES.map((employee) => (
                <tr key={employee.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={employee.avatar} 
                        alt={employee.name} 
                        className="w-10 h-10 rounded-full object-cover ring-1 ring-slate-200"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{employee.name}</p>
                        <p className="text-xs text-slate-500">{employee.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">{employee.role}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">{employee.department}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      employee.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                      employee.status === 'Remote' ? 'bg-indigo-100 text-indigo-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {employee.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{employee.joinDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
