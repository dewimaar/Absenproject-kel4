<template>
  <div class="gaji">
    <h1>Penggajian Karyawan</h1>
    <div class="top-bar">
      <button @click="showModal = true" class="add-button">
        <i class="bi bi-plus-lg"></i> Tambah Gaji
      </button>
      <input type="text" v-model="searchQuery" placeholder="Search..." class="search-input"/>
    </div>
    <table class="gaji-table">
      <thead>
        <tr>
          <th>Nama Karyawan</th>
          <th>Periode</th>
          <th>Gaji Pokok</th>
          <th>Tunjangan</th>
          <th>Potongan</th>
          <th>Total Gaji</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in filteredRecords" :key="record.id">
          <td>{{ record.nama }}</td>
          <td>{{ record.periode }}</td>
          <td>{{ formatCurrency(record.gajiPokok) }}</td>
          <td>{{ formatCurrency(record.tunjangan) }}</td>
          <td>{{ formatCurrency(record.potongan) }}</td>
          <td>{{ formatCurrency(record.totalGaji) }}</td>
        </tr>
      </tbody>
    </table>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span @click="showModal = false" class="close-button">&times;</span>
        <h2>Tambah Gaji</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <input type="text" v-model="newRecord.nama" placeholder="Nama Karyawan" required />
          </div>
          <div class="form-group">
            <input type="month" v-model="newRecord.periode" placeholder="Periode" required />
          </div>
          <div class="form-group">
            <input type="number" v-model.number="newRecord.gajiPokok" placeholder="Gaji Pokok" required />
          </div>
          <div class="form-group">
            <input type="number" v-model.number="newRecord.tunjangan" placeholder="Tunjangan" required />
          </div>
          <div class="form-group">
            <input type="number" v-model.number="newRecord.potongan" placeholder="Potongan" required />
          </div>
          <div class="form-group">
            <input type="number" v-model="calculatedTotalGaji" placeholder="Total Gaji" readonly />
          </div>
          <button type="submit" class="submit-button">Tambah</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gaji',
  data() {
    return {
      searchQuery: '',
      showModal: false,
      newRecord: {
        nama: '',
        periode: '',
        gajiPokok: '',
        tunjangan: '',
        potongan: ''
      },
      records: [
        { id: 1, nama: 'John Doe', periode: '2024-05', gajiPokok: 5000000, tunjangan: 1000000, potongan: 500000, totalGaji: 5500000 },
        { id: 2, nama: 'Jane Smith', periode: '2024-05', gajiPokok: 6000000, tunjangan: 1500000, potongan: 600000, totalGaji: 6900000 },
        // Tambahkan data gaji lainnya sesuai kebutuhan
      ]
    };
  },
  computed: {
    filteredRecords() {
      return this.records.filter(record => 
        record.nama.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        record.periode.includes(this.searchQuery)
      );
    },
    calculatedTotalGaji() {
      return this.newRecord.gajiPokok + this.newRecord.tunjangan - this.newRecord.potongan;
    }
  },
  methods: {
    formatCurrency(value) {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
    },
    addGaji() {
      this.showModal = true;
    },
    submitForm() {
      const newId = this.records.length ? Math.max(...this.records.map(record => record.id)) + 1 : 1;
      this.records.push({ id: newId, ...this.newRecord, totalGaji: this.calculatedTotalGaji });
      this.newRecord = { nama: '', periode: '', gajiPokok: 0, tunjangan: 0, potongan: 0 };
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
.gaji {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.gaji h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

.gaji p {
  font-size: 1.2em;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.add-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.add-button i {
  margin-right: 5px;
}

.search-input {
  padding: 10px;
  width: 200px;
}

.gaji-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff; /* Background color putih */
}

.gaji-table th,
.gaji-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.gaji-table th {
  background-color: #f2f2f2;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  padding: 40px;
  border: 1px solid #888;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close-button:hover,
.close-button:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.form-group {
  margin-bottom: 10px;
}

.form-group input {
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  border-radius: 5px;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
