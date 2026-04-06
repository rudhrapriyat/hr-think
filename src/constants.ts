import { Employee, DepartmentStats, AttendanceData } from './types';

export const MOCK_EMPLOYEES: Employee[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Senior Product Designer',
    department: 'Design',
    status: 'Active',
    email: 'sarah.j@company.com',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
    joinDate: '2023-01-15',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Full Stack Developer',
    department: 'Engineering',
    status: 'Remote',
    email: 'm.chen@company.com',
    avatar: 'https://picsum.photos/seed/michael/100/100',
    joinDate: '2023-03-10',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'HR Manager',
    department: 'People',
    status: 'Active',
    email: 'elena.r@company.com',
    avatar: 'https://picsum.photos/seed/elena/100/100',
    joinDate: '2022-11-05',
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Data Scientist',
    department: 'Engineering',
    status: 'On Leave',
    email: 'd.kim@company.com',
    avatar: 'https://picsum.photos/seed/david/100/100',
    joinDate: '2023-06-20',
  },
  {
    id: '5',
    name: 'Jessica Taylor',
    role: 'Marketing Lead',
    department: 'Marketing',
    status: 'Active',
    email: 'j.taylor@company.com',
    avatar: 'https://picsum.photos/seed/jessica/100/100',
    joinDate: '2023-02-28',
  },
];

export const DEPARTMENT_STATS: DepartmentStats[] = [
  { name: 'Engineering', count: 45, color: '#3b82f6' },
  { name: 'Design', count: 12, color: '#ec4899' },
  { name: 'Marketing', count: 18, color: '#f59e0b' },
  { name: 'Sales', count: 25, color: '#10b981' },
  { name: 'People', count: 8, color: '#8b5cf6' },
];

export const OPEN_POSITIONS = [
  { id: '1', title: 'Senior Frontend Engineer', dept: 'Engineering', type: 'Full-time', candidates: 12, status: 'Active' },
  { id: '2', title: 'Product Manager', dept: 'Design', type: 'Full-time', candidates: 8, status: 'Active' },
  { id: '3', title: 'Sales Executive', dept: 'Sales', type: 'Contract', candidates: 24, status: 'Urgent' },
  { id: '4', title: 'HR Specialist', dept: 'People', type: 'Full-time', candidates: 5, status: 'Active' },
];

export const UPCOMING_EVENTS = [
  { id: '1', title: 'Interview: Sarah Miller', time: '10:00 AM', date: 'Today', type: 'Interview', color: 'bg-indigo-100 text-indigo-700' },
  { id: '2', title: 'Team Sync: Engineering', time: '02:00 PM', date: 'Today', type: 'Meeting', color: 'bg-emerald-100 text-emerald-700' },
  { id: '3', title: 'Quarterly Review', time: '09:00 AM', date: 'Tomorrow', type: 'Review', color: 'bg-amber-100 text-amber-700' },
  { id: '4', title: 'New Hire Orientation', time: '11:30 AM', date: 'Apr 10', type: 'Onboarding', color: 'bg-violet-100 text-violet-700' },
];

export const HIRING_TRENDS = [
  { month: 'Jan', hires: 4, applications: 120 },
  { month: 'Feb', hires: 6, applications: 150 },
  { month: 'Mar', hires: 8, applications: 180 },
  { month: 'Apr', hires: 5, applications: 140 },
  { month: 'May', hires: 10, applications: 210 },
  { month: 'Jun', hires: 12, applications: 250 },
];

export const ATTENDANCE_DATA: AttendanceData[] = [
  { day: 'Mon', present: 95, absent: 5 },
  { day: 'Tue', present: 98, absent: 2 },
  { day: 'Wed', present: 92, absent: 8 },
  { day: 'Thu', present: 96, absent: 4 },
  { day: 'Fri', present: 88, absent: 12 },
];
