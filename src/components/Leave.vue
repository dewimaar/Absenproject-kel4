<template>
    <section id="leave">
      <h2>Leave</h2>
      <ul>
        <li v-for="(record, index) in leaveRecords" :key="index">
          {{ record.date }} - {{ record.type }}
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Leave',
    data() {
      return {
        leaveRecords: [
          { date: '2024-05-01', type: 'Sick Leave' },
          { date: '2024-05-02', type: 'Annual Leave' },
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
  