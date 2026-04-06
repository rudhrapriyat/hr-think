import React from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, MapPin, Users } from 'lucide-react';

const events = [
  { id: 1, title: 'Engineering Standup', time: '09:00 AM', type: 'Meeting', color: 'bg-indigo-500' },
  { id: 2, title: 'Sarah Jenkins (Design Review)', time: '11:30 AM', type: 'Review', color: 'bg-emerald-500' },
  { id: 3, title: 'Lunch Break', time: '01:00 PM', type: 'Break', color: 'bg-slate-400' },
  { id: 4, title: 'Marketing Sync', time: '03:00 PM', type: 'Meeting', color: 'bg-amber-500' },
  { id: 5, title: 'Interview: Frontend Dev', time: '04:30 PM', type: 'Interview', color: 'bg-violet-500' },
];

interface ScheduleProps {
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  openModal: (title: string, content: React.ReactNode) => void;
}

export default function Schedule({ showToast, openModal }: ScheduleProps) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleAddEvent = () => {
    openModal('Add New Event', (
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase">Event Title</label>
          <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20" placeholder="e.g. Design Review" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Start Time</label>
            <input type="time" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">End Time</label>
            <input type="time" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase">Participants</label>
          <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20" placeholder="Search team members..." />
        </div>
        <div className="pt-4 flex gap-3">
          <button className="flex-1 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg font-bold text-sm hover:bg-slate-200 transition-colors">Cancel</button>
          <button 
            onClick={() => showToast('Event scheduled successfully!', 'success')}
            className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold text-sm hover:bg-indigo-700 transition-colors"
          >
            Create Event
          </button>
        </div>
      </div>
    ));
  };

  const handleAddTask = () => {
    openModal('Add New Task', (
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase">Task Description</label>
          <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20" placeholder="What needs to be done?" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase">Priority</label>
          <div className="flex gap-2">
            {['Low', 'Medium', 'High'].map(p => (
              <button key={p} className="flex-1 py-2 border border-slate-200 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors">{p}</button>
            ))}
          </div>
        </div>
        <div className="pt-4 flex gap-3">
          <button className="flex-1 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg font-bold text-sm hover:bg-slate-200 transition-colors">Cancel</button>
          <button 
            onClick={() => showToast('Task added to your list!', 'success')}
            className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold text-sm hover:bg-indigo-700 transition-colors"
          >
            Add Task
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-display">Schedule</h1>
          <p className="text-slate-500">Manage team shifts, meetings, and leave requests.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => showToast('Switching to Month View...', 'info')}
            className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Month View
          </button>
          <button 
            onClick={handleAddEvent}
            className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Add Event
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar Grid */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-900 text-lg">April 2026</h3>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600 transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600 transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-px bg-slate-100 rounded-xl overflow-hidden border border-slate-100">
            {days.map(day => (
              <div key={day} className="bg-slate-50 p-4 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                {day}
              </div>
            ))}
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={`empty-${i}`} className="bg-white p-4 h-24 sm:h-32 opacity-25"></div>
            ))}
            {dates.slice(0, 31).map(date => (
              <div key={date} className={`bg-white p-4 h-24 sm:h-32 relative hover:bg-slate-50 transition-colors cursor-pointer group ${
                date === 6 ? 'ring-2 ring-inset ring-indigo-500' : ''
              }`}>
                <span className={`text-sm font-bold ${
                  date === 6 ? 'text-indigo-600' : 'text-slate-600'
                }`}>{date}</span>
                {date === 6 && (
                  <div className="mt-2 space-y-1">
                    <div className="h-1.5 w-full bg-indigo-500 rounded-full"></div>
                    <div className="h-1.5 w-2/3 bg-emerald-500 rounded-full"></div>
                  </div>
                )}
                {date === 12 && (
                  <div className="mt-2">
                    <div className="h-1.5 w-full bg-amber-500 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Daily Events */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900">Today's Schedule</h3>
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">April 6</span>
          </div>

          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.id} className="flex gap-4 group cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${event.color} ring-4 ring-white shadow-sm`}></div>
                  <div className="w-px flex-1 bg-slate-100 my-1"></div>
                </div>
                <div className="pb-6">
                  <p className="text-xs font-bold text-slate-400 mb-1">{event.time}</p>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{event.title}</h4>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <Clock className="w-3 h-3" />
                      {event.type}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <MapPin className="w-3 h-3" />
                      Remote
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={handleAddTask}
            className="w-full mt-4 py-3 border-2 border-dashed border-slate-200 rounded-xl text-sm font-bold text-slate-400 hover:border-indigo-200 hover:text-indigo-500 transition-all"
          >
            + Add New Task
          </button>
        </div>
      </div>
    </div>
  );
}
