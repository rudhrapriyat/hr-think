import React from 'react';
import { Briefcase, Users, Clock, CheckCircle, Plus, Search, MoreHorizontal } from 'lucide-react';

const jobs = [
  { id: 1, title: 'Senior Product Designer', department: 'Design', type: 'Full-time', candidates: 12, status: 'Active' },
  { id: 2, title: 'Backend Engineer (Node.js)', department: 'Engineering', type: 'Full-time', candidates: 45, status: 'Active' },
  { id: 3, title: 'Marketing Specialist', department: 'Marketing', type: 'Contract', candidates: 8, status: 'On Hold' },
  { id: 4, title: 'Sales Executive', department: 'Sales', type: 'Full-time', candidates: 23, status: 'Active' },
];

interface RecruitmentProps {
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  openModal: (title: string, content: React.ReactNode) => void;
}

export default function Recruitment({ showToast, openModal }: RecruitmentProps) {
  const handleCreateJob = () => {
    openModal('Create New Job Opening', (
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase">Job Title</label>
          <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20" placeholder="e.g. Senior React Developer" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Department</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
              <option>Engineering</option>
              <option>Design</option>
              <option>Marketing</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Employment Type</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
            </select>
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase">Job Description</label>
          <textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 h-24" placeholder="Describe the role..."></textarea>
        </div>
        <div className="pt-4 flex gap-3">
          <button className="flex-1 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg font-bold text-sm hover:bg-slate-200 transition-colors">Cancel</button>
          <button 
            onClick={() => showToast('Job opening created successfully!', 'success')}
            className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold text-sm hover:bg-indigo-700 transition-colors"
          >
            Post Job
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-display">Recruitment</h1>
          <p className="text-slate-500">Track job openings and manage candidate pipelines.</p>
        </div>
        <button 
          onClick={handleCreateJob}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Create Job Opening
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">Active Jobs</h3>
          </div>
          <p className="text-3xl font-bold text-slate-900">12</p>
          <p className="text-sm text-slate-500 mt-1">+2 from last month</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">Total Candidates</h3>
          </div>
          <p className="text-3xl font-bold text-slate-900">156</p>
          <p className="text-sm text-slate-500 mt-1">Across all active roles</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">Avg. Time to Hire</h3>
          </div>
          <p className="text-3xl font-bold text-slate-900">18 Days</p>
          <p className="text-sm text-slate-500 mt-1">-3 days improvement</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900">Job Openings</h3>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search jobs..." 
              className="bg-slate-50 border border-slate-200 rounded-lg py-1.5 pl-9 pr-4 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Job Title</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Candidates</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">{job.title}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">{job.department}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{job.type}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900">{job.candidates}</span>
                      <span className="text-xs text-slate-400 font-medium">Applied</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      job.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
