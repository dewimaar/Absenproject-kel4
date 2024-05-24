<template>
  <div class="dashboard">
    <div class="header">
      <h1>Dashboard Utama</h1>
    </div>
    <div class="content">
      <div class="card" v-if="profile">
        <h2>Profil Karyawan</h2>
        <p>Nama: {{ profile.name }}</p>
        <p>Posisi: {{ profile.position }}</p>
        <p>Email: {{ profile.email }}</p>
      </div>
      <div class="card" v-if="attendanceSummary">
        <h2>Ringkasan Kehadiran</h2>
        <p>Hadir: {{ attendanceSummary.present }}</p>
        <p>Terlambat: {{ attendanceSummary.late }}</p>
        <p>Absen: {{ attendanceSummary.absent }}</p>
      </div>
      <div class="card" v-if="recentAttendance">
        <h2>Riwayat Kehadiran Terbaru</h2>
        <ul>
          <li v-for="record in recentAttendance" :key="record.date">
            {{ record.date }} - {{ record.status }}
          </li>
        </ul>
      </div>
      <div class="card" v-if="overtime">
        <h2>Total Lembur Bulanan</h2>
        <p>{{ overtime.hours }} Jam</p>
      </div>
      <div class="card" v-if="leaveBalance">
        <h2>Sisa Cuti Tahunan</h2>
        <p>{{ leaveBalance.days }} Hari</p>
      </div>
      <div class="card" v-if="notifications && notifications.length">
        <h2>Notifikasi dan Pengingat</h2>
        <ul>
          <li v-for="notification in notifications" :key="notification.id">
            {{ notification.message }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        name: 'John Doe',
        position: 'Software Engineer',
        email: 'john.doe@example.com'
      },
      attendanceSummary: {
        present: 20,
        late: 2,
        absent: 1
      },
      recentAttendance: [
        { date: '2024-05-20', status: 'Hadir' },
        { date: '2024-05-19', status: 'Terlambat' },
        { date: '2024-05-18', status: 'Hadir' },
      ],
      overtime: {
        hours: 10
      },
      leaveBalance: {
        days: 5
      },
      notifications: [
        { id: 1, message: 'Lembur Anda pada 2024-05-19 telah disetujui.' },
        { id: 2, message: 'Cuti Anda pada 2024-05-22 telah disetujui.' },
      ]
    };
  }
};
</script>

<style>
.dashboard {
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex: 1 1 calc(33% - 40px);
  min-width: 250px;
}

.card h2 {
  margin-top: 0;
}

.card p {
  margin: 5px 0;
}

.card ul {
  padding-left: 20px;
}

.card ul li {
  margin-bottom: 5px;
}
</style>
