<template>
  <div class="container mt-5">
    <!-- Baris untuk card Profil Karyawan, Sisa Cuti Tahunan, dan Pengingat -->
    <div class="row mb-4">
      <div class="col-lg-4 mb-3">
        <div class="card custom-card">
          <div class="card-body text-center">
            <h5 class="card-title">Profil Karyawan</h5>
            <img src="https://via.placeholder.com/150" class="rounded-circle mb-3" alt="Profil Karyawan">
            <p class="card-text">Nama Karyawan</p>
            <p class="card-text">Posisi</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-3">
        <div class="row">
          <div class="col-12 mb-3">
            <div class="card custom-card">
              <div class="card-body">
                <h5 class="card-title">Sisa Cuti Tahunan</h5>
                <p class="card-text">Isi sisa cuti tahunan di sini.</p>
              </div>
            </div>
          </div>
          <div class="col-12 mb-3">
            <div class="card custom-card">
              <div class="card-body text-center">
                <h5 class="card-title">Pengingat</h5>
                <i class="bi bi-clock" style="font-size: 2rem;"></i>
                <p class="card-text">Meeting pada jam 10:00 AM.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Baris untuk card Waktu dan Riwayat Kehadiran Terbaru -->
    <div class="row mb-4">
      <div class="col-lg-6 mb-3">
        <div class="card custom-card">
          <div class="card-body text-center">
            <h5 class="card-title">Waktu Saat Ini</h5>
            <p class="card-text">{{ currentTime }}</p>
            <p class="card-text">{{ currentDay }}, {{ currentDate }}</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mb-3">
        <div class="card custom-card">
          <div class="card-body">
            <h5 class="card-title">Riwayat Kehadiran Terbaru</h5>
            <p class="card-text">Isi riwayat kehadiran terbaru di sini.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Baris untuk tabel Total Lembur Bulanan -->
    <div class="row mb-4">
      <div class="col-lg-12 mb-3">
        <div class="card custom-card">
          <div class="card-body">
            <h5 class="card-title">Total Lembur Bulanan</h5>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Bulan</th>
                  <th scope="col">Total Jam Lembur</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Januari</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>Februari</td>
                  <td>35</td>
                </tr>
                <!-- Tambahkan data lainnya di sini -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      currentTime: '',
      currentDay: '',
      currentDate: ''
    };
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      this.currentDay = now.toLocaleDateString('id-ID', { weekday: 'long' });
      this.currentDate = now.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    }
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  }
}
</script>

<style src="./DashboardStyles.css"></style>
