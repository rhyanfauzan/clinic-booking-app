import { defineStore } from 'pinia';

export const useTimeStore = defineStore('timeStore', {
  state: () => ({ hour: '', date: '', doctorId: '' }),
  getters: {
    theTime: (state) => state.hour,
    theDate: (state) => state.date,
    theDoctor: (state) => state.doctorId,
  },
  actions: {
    setHour(hour) {
      this.hour = hour;
    }, 
    setDate(date) {
      this.date = date;
    },
    setDoctor(doctorId) {
      this.doctorId = doctorId;
    },
  },
});

export const useVariableStore = defineStore('variable', {
  state: () => ({
    BASEURL: 'http://localhost:3000', // Dev local --
    // BASEURL: 'https://api.bookingclinicapp.zethansa.com', // Hosting --
  }),
});
