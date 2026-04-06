import React, { useState } from 'react';
import { Search, Filter, MoreVertical, UserPlus, Mail, Phone, ChevronDown } from 'lucide-react';
import { MOCK_EMPLOYEES } from '../constants';

interface EmployeesProps {
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  openModal: (title: string, content: React.ReactNode) => void;
}

export default function Employees({ showToast, openModal }: EmployeesProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [deptFilter, setDeptFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

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

  const departments = ['All', ...new Set(MOCK_EMPLOYEES.map(e => e.department))];
  const statuses = ['All', 'Active', 'Remote', 'On Leave'];

  const filteredEmployees = MOCK_EMPLOYEES.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDept = deptFilter === 'All' || emp.department === deptFilter;
    const matchesStatus = statusFilter === 'All' || emp.status === statusFilter;

    return matchesSearch && matchesDept && matchesStatus;
  });

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-display">Employee Directory</h1>
          <p className="text-slate-500">Manage and view all your team members in one place.</p>
        </div>
        <button 
          onClick={handleAddEmployee}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <UserPlus className="w-4 h-4" />
          Add Employee
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by name, role, or department..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>
        
        <div className="flex gap-3">
          <div className="relative min-w-[140px]">
            <select 
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="w-full appearance-none bg-white border border-slate-200 rounded-xl py-2.5 pl-4 pr-10 text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all cursor-pointer"
            >
              {departments.map(dept => <option key={dept} value={dept}>{dept} Dept</option>)}
            </select>
            <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          <div className="relative min-w-[140px]">
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full appearance-none bg-white border border-slate-200 rounded-xl py-2.5 pl-4 pr-10 text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all cursor-pointer"
            >
              {statuses.map(status => <option key={status} value={status}>{status}</option>)}
            </select>
            <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Role & Dept</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Join Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={employee.avatar} 
                        alt={employee.name} 
                        className="w-10 h-10 rounded-full object-cover ring-1 ring-slate-200"
                        referrerPolicy="no-referrer"
                      />
                      <p className="text-sm font-semibold text-slate-900">{employee.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-900 font-medium">{employee.role}</p>
                    <p className="text-xs text-slate-500">{employee.department}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      employee.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                      employee.status === 'Remote' ? 'bg-indigo-100 text-indigo-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {employee.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                        <Phone className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{employee.joinDate}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-all">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredEmployees.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    No employees found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
