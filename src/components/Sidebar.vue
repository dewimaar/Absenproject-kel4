<template>
    <nav class="sidebar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/attendance">Attendance</router-link></li>
        <li><router-link to="/overtime">Overtime</router-link></li>
        <li><router-link to="/leave">Leave</router-link></li>
        <li><router-link to="/payroll">Payroll</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
  };
  </script>
  
  <style scoped>
  @import "./sidebarStyles.css";
  </style>
  