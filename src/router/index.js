import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Attendance from '../components/Attendance.vue';
import Overtime from '../components/Overtime.vue';
import Leave from '../components/Leave.vue';
import Payroll from '../components/Payroll.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/attendance',
    name: 'Attendance',
    component: Attendance,
  },
  {
    path: '/overtime',
    name: 'Overtime',
    component: Overtime,
  },
  {
    path: '/leave',
    name: 'Leave',
    component: Leave,
  },
  {
    path: '/payroll',
    name: 'Payroll',
    component: Payroll,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
