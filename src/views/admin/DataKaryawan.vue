<template>
    <div class="data-karyawan">
      <h1>Data Karyawan</h1>
      
      <div class="top-bar">
        <button @click="showModal = true" class="add-button">Tambah Karyawan</button>
        <input type="text" v-model="searchQuery" placeholder="Search..." class="search-input"/>
      </div>
      
      <table class="karyawan-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Karyawan</th>
            <th>NIK</th>
            <th>Jabatan</th>
            <th>Departemen</th>
            <th>Email</th>
            <th>Nomor Telepon</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="karyawan in filteredKaryawan" :key="karyawan.id">
            <td>{{ karyawan.id }}</td>
            <td>{{ karyawan.nama }}</td>
            <td>{{ karyawan.nik }}</td>
            <td>{{ karyawan.jabatan }}</td>
            <td>{{ karyawan.departemen }}</td>
            <td>{{ karyawan.email }}</td>
            <td>{{ karyawan.nomorTelepon }}</td>
            <td class="actions">
              <i @click="viewDetail(karyawan.id)" class="bi bi-info-circle text-primary"></i>
              <i @click="deleteKaryawan(karyawan.id)" class="bi bi-trash text-danger"></i>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <span @click="showModal = false" class="close-button">&times;</span>
          <h2>Tambah Karyawan</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <input type="text" id="namaKaryawan" v-model="newKaryawan.nama" placeholder="Nama Karyawan" required />
            </div>
            <div class="form-group">
              <input type="text" id="nikKaryawan" v-model="newKaryawan.nik" placeholder="NIK" required />
            </div>
            <div class="form-group">
              <input type="text" id="jabatanKaryawan" v-model="newKaryawan.jabatan" placeholder="Jabatan" required />
            </div>
            <div class="form-group">
              <input type="text" id="departemenKaryawan" v-model="newKaryawan.departemen" placeholder="Departemen" required />
            </div>
            <div class="form-group">
              <input type="email" id="emailKaryawan" v-model="newKaryawan.email" placeholder="Email" required />
            </div>
            <div class="form-group">
              <input type="text" id="nomorTeleponKaryawan" v-model="newKaryawan.nomorTelepon" placeholder="Nomor Telepon" required />
            </div>
            <button type="submit" class="submit-button">Tambah</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DataKaryawan',
    data() {
      return {
        searchQuery: '',
        showModal: false,
        newKaryawan: {
          nama: '',
          nik: '',
          jabatan: '',
          departemen: '',
          email: '',
          nomorTelepon: ''
        },
        karyawanList: [
          { id: 1, nama: 'John Doe', nik: '1234567890', jabatan: 'Manager', departemen: 'Sales', email: 'john.doe@example.com', nomorTelepon: '081234567890' },
          { id: 2, nama: 'Jane Smith', nik: '0987654321', jabatan: 'Supervisor', departemen: 'HR', email: 'jane.smith@example.com', nomorTelepon: '082345678901' },
          // Tambahkan data karyawan lainnya sesuai kebutuhan
        ]
      };
    },
    computed: {
      filteredKaryawan() {
        return this.karyawanList.filter(karyawan => 
          karyawan.nama.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          karyawan.nik.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          karyawan.jabatan.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          karyawan.departemen.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          karyawan.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          karyawan.nomorTelepon.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    methods: {
      addKaryawan() {
        this.showModal = true;
      },
      submitForm() {
        const newId = this.karyawanList.length ? Math.max(...this.karyawanList.map(k => k.id)) + 1 : 1;
        this.karyawanList.push({ id: newId, ...this.newKaryawan });
        this.newKaryawan = { nama: '', nik: '', jabatan: '', departemen: '', email: '', nomorTelepon: '' };
        this.showModal = false;
      },
      viewDetail(id) {
        alert('View details for ID: ' + id);
      },
      deleteKaryawan(id) {
        this.karyawanList = this.karyawanList.filter(karyawan => karyawan.id !== id);
        alert('Deleted karyawan with ID: ' + id);
      }
    }
  };
  </script>
  
  <style scoped>
  .data-karyawan {
    padding: 20px;
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
  }
  
  .search-input {
    padding: 10px;
    width: 200px;
  }
  
  .karyawan-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .karyawan-table th,
  .karyawan-table td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  .karyawan-table th {
    background-color: #f2f2f2;
  }
  
  .actions {
    display: flex;
    gap: 10px;
  }
  
  .actions .bi {
    cursor: pointer;
    font-size: 18px;
  }
  
  .text-primary {
    color: #007bff;
  }
  
  .text-danger {
    color: #dc3545;
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
    padding: 20px;
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
    margin-bottom: 15px;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
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
    margin-top: 10px;
    width: 100%;
    border-radius: 5px;
  }
  
  .submit-button:hover {
    background-color: #45a049;
  }
  </style>
  