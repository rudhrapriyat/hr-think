export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  status: 'Active' | 'On Leave' | 'Remote';
  email: string;
  avatar: string;
  joinDate: string;
}

export interface DashboardMetrics {
  totalEmployees: number;
  activeNow: number;
  openPositions: number;
  newHiresThisMonth: number;
}

export interface DepartmentStats {
  name: string;
  count: number;
  color: string;
}

export interface AttendanceData {
  day: string;
  present: number;
  absent: number;
}
