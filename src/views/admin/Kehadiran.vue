<template>
  <div class="kehadiran">
    <h1>Kehadiran</h1>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search..." class="search-input"/>
    </div>
    <table class="kehadiran-table">
      <thead>
        <tr>
          <th>Nama Karyawan</th>
          <th>Tanggal</th>
          <th>Status</th>
          <th>Jam Masuk</th>
          <th>Jam Keluar</th>
          <th>Terlambat</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="kehadiran in filteredKehadiran" :key="kehadiran.id">
          <td>{{ kehadiran.nama }}</td>
          <td>{{ kehadiran.tanggal }}</td>
          <td>{{ kehadiran.status }}</td>
          <td>{{ kehadiran.jamMasuk }}</td>
          <td>{{ kehadiran.jamKeluar }}</td>
          <td>{{ kehadiran.terlambat }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Kehadiran',
  data() {
    return {
      searchQuery: '',
      kehadiranList: [
        { id: 1, nama: 'John Doe', tanggal: '2024-06-01', status: 'Hadir', jamMasuk: '08:00', jamKeluar: '17:00', terlambat: 'No' },
        { id: 2, nama: 'Jane Smith', tanggal: '2024-06-01', status: 'Hadir', jamMasuk: '08:15', jamKeluar: '17:30', terlambat: 'Yes' },
        // Add more attendance records as needed
      ]
    };
  },
  computed: {
    filteredKehadiran() {
      return this.kehadiranList.filter(kehadiran => 
        kehadiran.nama.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        kehadiran.tanggal.includes(this.searchQuery.toLowerCase()) ||
        kehadiran.status.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        kehadiran.jamMasuk.includes(this.searchQuery.toLowerCase()) ||
        kehadiran.jamKeluar.includes(this.searchQuery.toLowerCase()) ||
        kehadiran.terlambat.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
.kehadiran {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.kehadiran h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

.kehadiran p {
  font-size: 1.2em;
}

.search-bar {
  margin-bottom: 20px;
}

.search-input {
  padding: 10px;
  width: 200px;
}

.kehadiran-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff; /* Background color putih */
}


.kehadiran-table th,
.kehadiran-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.kehadiran-table th {
  background-color: #f2f2f2;
}
</style>
