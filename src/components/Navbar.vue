<template>
    <nav>
      <h3>Logo</h3>
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
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #35495e;
  }
  
  nav h3 {
    color: white;
  }
  
  nav ul {
    list-style: none;
    display: flex;
  }
  
  nav ul li {
    margin: 0 10px;
  }
  
  nav ul li a {
    color: white;
    text-decoration: none;
  }
  
  nav ul li a:hover {
    text-decoration: underline;
  }
  </style>
  