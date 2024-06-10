<template>
  <section id="payroll">
    <h2>Payroll</h2>
    <ul>
      <li v-for="(record, index) in payrollRecords" :key="index">
        {{ record.date }} - ${{ record.amount }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Payroll',
  data() {
    return {
      payrollRecords: [
        { date: '2024-05-01', amount: 1000 },
        { date: '2024-05-02', amount: 1200 },
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
