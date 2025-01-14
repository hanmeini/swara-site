import AOS from 'aos';
import 'aos/dist/aos.css'; // Hanya jika Anda ingin menggunakan style bawaan AOS

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook('app:mounted', () => {
      AOS.init({
        duration: 1000, // Durasi animasi (ms)
        easing: 'ease-in-out', // Efek easing
        once: true, // Animasi hanya terjadi sekali
        mirror: false, // Animasi saat scroll ke belakang
      });
    });
  }
});