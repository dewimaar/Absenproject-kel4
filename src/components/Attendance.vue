<template>
    <section id="attendance">
      <h2>Attendance</h2>
      <ul>
        <li v-for="(record, index) in attendanceRecords" :key="index">
          {{ record.date }} - {{ record.status }}
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Attendance',
    data() {
      return {
        attendanceRecords: [
          { date: '2024-05-01', status: 'Present' },
          { date: '2024-05-02', status: 'Absent' },
          // Tambahkan data lainnya sesuai kebutuhan
        ],
      };
    },
  };
  </script>
  
  <style>
  section {
    margin-bottom: 2em;
  }
  
  h2 {
    color: #42b983;
  }
  </style>
  