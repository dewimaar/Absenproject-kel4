<template>
  <div class="lemburcuti">
    <h1>Lembur dan Cuti</h1>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search..." class="search-input"/>
    </div>
    <table class="lemburcuti-table">
      <thead>
        <tr>
          <th>Nama Karyawan</th>
          <th>Tanggal</th>
          <th>Jenis</th>
          <th>Keterangan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in filteredRecords" :key="record.id">
          <td>{{ record.nama }}</td>
          <td>{{ record.tanggal }}</td>
          <td>{{ record.jenis }}</td>
          <td>{{ record.keterangan }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'LemburCuti',
  data() {
    return {
      searchQuery: '',
      records: [
        { id: 1, nama: 'John Doe', tanggal: '2024-06-01', jenis: 'Lembur', keterangan: 'Lembur tambahan di akhir pekan' },
        { id: 2, nama: 'Jane Smith', tanggal: '2024-06-02', jenis: 'Cuti', keterangan: 'Cuti untuk acara keluarga' },
        // Tambahkan data lembur dan cuti lainnya sesuai kebutuhan
      ]
    };
  },
  computed: {
    filteredRecords() {
      return this.records.filter(record => 
        record.nama.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        record.tanggal.includes(this.searchQuery.toLowerCase()) ||
        record.jenis.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        record.keterangan.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
.lemburcuti {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.lemburcuti h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

.lemburcuti p {
  font-size: 1.2em;
}

.search-bar {
  margin-bottom: 20px;
}

.search-input {
  padding: 10px;
  width: 200px;
}

.lemburcuti-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff; /* Background color putih */
}

.lemburcuti-table th,
.lemburcuti-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.lemburcuti-table th {
  background-color: #f2f2f2;
}
</style>
