<template>
  <h1>Laporan dan Analisis Karyawan</h1>
  <hr class="title-underline"/>
  <div class="laporan">
    
    <!-- Top bar -->
    <div class="top-bar">
      <input type="text" v-model="searchQuery" placeholder="Search..." class="search-input"/>
      <div class="button-group">
        <button @click="generateReport('pdf')" class="generate-button">
          <img src="pdf_logo.png" alt="PDF Logo" class="logo"> Generate PDF
        </button>
        <button @click="generateReport('excel')" class="generate-button">
          <img src="excel_logo.png" alt="Excel Logo" class="logo"> Generate Excel
        </button>
      </div>
    </div>

    <!-- Report sections -->
    <div class="report-section">
      <h5>Laporan Kehadiran Karyawan</h5>
      <table class="laporan-table">
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
          <tr v-for="record in filteredAttendanceRecords" :key="record.id">
            <td>{{ record.nama }}</td>
            <td>{{ record.tanggal }}</td>
            <td>{{ record.status }}</td>
            <td>{{ record.jamMasuk }}</td>
            <td>{{ record.jamKeluar }}</td>
            <td>{{ record.terlambat }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="report-section">
      <h5>Laporan Lembur</h5>
      <table class="laporan-table">
        <thead>
          <tr>
            <th>Nama Karyawan</th>
            <th>Tanggal</th>
            <th>Jumlah Jam</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="record in filteredOvertimeRecords" :key="record.id">
            <td>{{ record.nama }}</td>
            <td>{{ record.tanggal }}</td>
            <td>{{ record.jumlahJam }}</td>
            <td>{{ record.keterangan }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="report-section">
      <h5>Laporan Cuti</h5>
      <table class="laporan-table">
        <thead>
          <tr>
            <th>Nama Karyawan</th>
            <th>Tanggal Mulai</th>
            <th>Tanggal Selesai</th>
            <th>Jenis Cuti</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="record in filteredLeaveRecords" :key="record.id">
            <td>{{ record.nama }}</td>
            <td>{{ record.tanggalMulai }}</td>
            <td>{{ record.tanggalSelesai }}</td>
            <td>{{ record.jenisCuti }}</td>
            <td>{{ record.keterangan }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="report-section">
      <h2>Laporan Penggajian</h2>
      <table class="laporan-table">
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
          <tr v-for="record in filteredSalaryRecords" :key="record.id">
            <td>{{ record.nama }}</td>
            <td>{{ record.periode }}</td>
            <td>{{ formatCurrency(record.gajiPokok) }}</td>
            <td>{{ formatCurrency(record.tunjangan) }}</td>
            <td>{{ formatCurrency(record.potongan) }}</td>
            <td>{{ formatCurrency(record.totalGaji) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Analysis section -->
    <div class="analysis-section">
      <h2>Analisis Kinerja Karyawan</h2>
      <div class="charts-container">
        <canvas id="performanceChart" class="chart"></canvas>
        <canvas id="attendanceChart" class="chart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import * as d3 from 'd3';  // Assuming you're using D3.js for charts
import Chart from 'chart.js/auto';  // Import Chart.js

export default {
  name: 'Laporan',
  setup() {
    const searchQuery = ref('');
    const attendanceRecords = ref([
      { id: 1, nama: 'Dewi Maharani', tanggal: '2024-06-01', status: 'Hadir', jamMasuk: '08:00', jamKeluar: '17:00', terlambat: 'Tidak' },
      // Add more attendance records
    ]);
    const overtimeRecords = ref([
      { id: 1, nama: 'Dewi Maharani', tanggal: '2024-06-01', jumlahJam: 2, keterangan: 'Project Deadline' },
      // Add more overtime records
    ]);
    const leaveRecords = ref([
      { id: 1, nama: 'Dewi Maharani', tanggalMulai: '2024-05-01', tanggalSelesai: '2024-05-05', jenisCuti: 'Cuti Tahunan', keterangan: 'Liburan' },
      // Add more leave records
    ]);
    const salaryRecords = ref([
      { id: 1, nama: 'Dewi Maharani', periode: '2024-05', gajiPokok: 5000000, tunjangan: 500000, potongan: 0, totalGaji: 5500000 },
      // Add more salary records
    ]);

    const filteredAttendanceRecords = computed(() => {
      return attendanceRecords.value.filter(record =>
        record.nama.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        record.tanggal.includes(searchQuery.value)
      );
    });
    const filteredOvertimeRecords = computed(() => {
      return overtimeRecords.value.filter(record =>
        record.nama.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        record.tanggal.includes(searchQuery.value)
      );
    });
    const filteredLeaveRecords = computed(() => {
      return leaveRecords.value.filter(record =>
        record.nama.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        record.tanggalMulai.includes(searchQuery.value) ||
        record.tanggalSelesai.includes(searchQuery.value)
      );
    });
    const filteredSalaryRecords = computed(() => {
      return salaryRecords.value.filter(record =>
        record.nama.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        record.periode.includes(searchQuery.value)
      );
    });

    const formatCurrency = (value) => {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
    };

    const generateReport = (format) => {
      // Logic to generate PDF/Excel report
      alert(`Generating ${format.toUpperCase()} report...`);
    };

    const drawCharts = () => {
      // Use Chart.js to draw performance and attendance charts

      // Performance chart
      const performanceChartCtx = document.getElementById('performanceChart').getContext('2d');
      new Chart(performanceChartCtx, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Performance Score',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      // Attendance chart
      const attendanceChartCtx = document.getElementById('attendanceChart').getContext('2d');
      new Chart(attendanceChartCtx, {
        type: 'line',
        data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [{
            label: 'Attendance Rate (%)',
            data: [85, 90, 88, 92, 87, 85, 90],
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    };

    onMounted(() => {
      drawCharts();
    });

    return {
      searchQuery,
      filteredAttendanceRecords,
      filteredOvertimeRecords,
      filteredLeaveRecords,
      filteredSalaryRecords,
      formatCurrency,
      generateReport,
      drawCharts
    };
  }
};
</script>

<style scoped>
.laporan {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.laporan h1 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
}

.title-underline {
  border: 0;
  height: 2px;
  background: #848d84;
  margin-bottom: 20px;
}

.laporan .top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.search-input {
  padding: 10px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.button-group {
  display: flex;
}

.generate-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 10px;
  transition: background-color 0.3s ease;
}

.generate-button:hover {
  background-color: #45a049;
}

.report-section {
  margin-bottom: 30px;
}

.laporan-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.laporan-table th,
.laporan-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.laporan-table th {
  background-color: #f2f2f2;
  color: #333;
}

.laporan-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.analysis-section {
  margin-top: 40px;
}

.charts-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.chart {
  width: calc(50% - 20px);
  height: 300px;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

@media (max-width: 768px) {
  .chart {
    width: 100%;
  }
}
</style>
