import { createStore } from 'vuex';

const store = createStore({
  state: {
    currentTime: new Date(),
    attendance: []
  },
  getters: {
    formattedTime: (state) => state.currentTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    formattedDate: (state) => state.currentTime.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    attendanceList: (state) => state.attendance
  },
  mutations: {
    updateTime(state) {
      state.currentTime = new Date();
    },
    addAttendance(state, payload) {
      state.attendance.push(payload);
    }
  },
  actions: {
    updateTime({ commit }) {
      commit('updateTime');
    },
    addAttendance({ commit }, payload) {
      commit('addAttendance', payload);
    }
  }
});

export default store;
