<template>
    <section id="overtime">
      <h2>Overtime</h2>
      <ul>
        <li v-for="(record, index) in overtimeRecords" :key="index">
          {{ record.date }} - {{ record.hours }} hours
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Overtime',
    data() {
      return {
        overtimeRecords: [
          { date: '2024-05-01', hours: 2 },
          { date: '2024-05-02', hours: 3 },
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
  