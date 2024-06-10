<template>
    <div class="data-jabatan">
      <h1>Data Jabatan</h1>
      
      <div class="top-bar">
        <button @click="showModal = true" class="add-button">Tambah Jabatan</button>
        <input type="text" v-model="searchQuery" placeholder="Search..." class="search-input"/>
      </div>
      
      <table class="jabatan-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Jabatan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="jabatan in filteredJabatan" :key="jabatan.id">
            <td>{{ jabatan.id }}</td>
            <td>{{ jabatan.nama }}</td>
            <td class="actions">
              <i @click="viewDetail(jabatan.id)" class="bi bi-info-circle text-primary"></i>
              <i @click="deleteJabatan(jabatan.id)" class="bi bi-trash text-danger"></i>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <span @click="showModal = false" class="close-button">&times;</span>
          <h2>Tambah Jabatan</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="namaJabatan">Nama Jabatan:</label>
              <input type="text" id="namaJabatan" v-model="newJabatanNama" required />
            </div>
            <button type="submit" class="submit-button">Tambah</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DataJabatan',
    data() {
      return {
        searchQuery: '',
        showModal: false,
        newJabatanNama: '',
        jabatanList: [
          { id: 1, nama: 'Manager' },
          { id: 2, nama: 'Supervisor' },
          // Add more positions as needed
        ]
      };
    },
    computed: {
      filteredJabatan() {
        return this.jabatanList.filter(jabatan => 
          jabatan.nama.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    methods: {
      addJabatan() {
        this.showModal = true;
      },
      submitForm() {
        const newId = this.jabatanList.length ? Math.max(this.jabatanList.map(j => j.id)) + 1 : 1;
        this.jabatanList.push({ id: newId, nama: this.newJabatanNama });
        this.newJabatanNama = '';
        this.showModal = false;
      },
      viewDetail(id) {
        alert('View details for ID: ' + id);
      },
      deleteJabatan(id) {
        this.jabatanList = this.jabatanList.filter(jabatan => jabatan.id !== id);
        alert('Deleted position with ID: ' + id);
      }
    }
  };
  </script>
  
  <style scoped>
  .data-jabatan {
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
  }
  
  .search-input {
    padding: 10px;
    width: 200px;
  }
  
  .jabatan-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .jabatan-table th,
  .jabatan-table td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  .jabatan-table th {
    background-color: #f2f2f2;
  }
  
  .actions {
    display: flex;
    gap: 10px;
  }
  
  .action-icon {
    cursor: pointer;
    font-size: 18px;
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
    background-color: #fefefe;
    padding: 40px;
    border: 1px solid #888;
    width: 500px;
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
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
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
  