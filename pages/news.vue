<template>
    <section class="flex flex-col-reverse lg:flex-row py-16">
        <Sidebar/>
        <div class="flex flex-col items-center">
            <!-- search + navigator -->
            <div class="flex flex-row w-full lg:w-[80%] mt-10 justify-center relative px-6"     >
                <form class="w-full ml-5">
                    <label for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none p-4">
                            <svg class="w-4 h-4 text-[#A52A2D] dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-[#A52A2D] rounded-3xl bg-gray-50 focus:ring-[#A52A2D] focus:border-[#A52A2D]"
                            placeholder="Search" required />
                        
                    </div>
                </form>
            </div>
            <!-- sidebar + content -->
            <div class="w-full mt-10 px-6">
                <!-- Content -->
                <div class="flex-1 p-4" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200" >
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="grid gap-4">
                            <div class="h-auto max-w-full rounded-lg items-center justify-center text-center">
                                <p id="current-day" class="font-medium [font-size:_clamp(0.1rem, 5vw, 1rem)]">Senin, 11 Januari 2025</p>
                                <h1 class="font-bold [font-size:_clamp(1rem,5vw,2rem)]" id="greeting">Selamat Pagi</h1>
                                <p id="current-time" class="font-semibold text-3xl">--:--</p>
                            </div>
                            <div class="relative h-auto max-w-full rounded-lg">
                                <img class="h-auto max-w-full rounded-lg" src="/assets/image/berita1.png" alt="">
                                <a href="https://grafikanews.com/berita-kurangnya-fasilitas-sarpras-di-salah-satu-sekolah-di-banyuwangi.html" class="absolute top-[10%] left-[5%] text-white px-2 py-1 rounded-lg text-xs font-semibold lg:text-xl">
                                    Kurangnya Fasilitas SarPras di Salah Satu Sekolah di Banyuwangi
                                </a>
                            </div>
                            <div class="relative h-auto max-w-full rounded-lg">
                                <img class="h-auto max-w-full rounded-lg" src="/assets/image/berita4.png" alt="">
                                <a href="https://bengkuluekspress.disway.id/read/131739/sidak-wagub-temukan-fasilitas-ruang-pelayanan-di-samsat-kurang-memadai" class="absolute top-[10%] left-[5%] text-white px-2 py-1 rounded-lg text-xs font-semibold lg:text-xl">
                                    Sidak, Wagub Temukan Fasilitas Ruang Pelayanan di Samsat Kurang Memadai
                                </a>
                            </div>
                        </div>
                        <div class="grid gap-4" >
                            <div class="relative h-auto max-w-full rounded-lg ">
                                <img class="h-auto max-w-full rounded-lg" src="/assets/image/berita2.png " alt="">
                                <a href="https://tender-indonesia.com/m/proomdet.php?prm=11136" class="absolute top-[10%] left-[5%] text-white px-2 py-1 rounded-lg text-xs font-semibold lg:text-xl">
                                    Tender Pengadaan Sarana dan Prasarana Stadion Jatidiri
                                </a>
                            </div>
                            <div class="relative h-auto max-w-full rounded-lg">
                                <img class="h-auto max-w-full rounded-lg" src="/assets/image/berita5.png" alt="">
                                <a href="https://foto.bisnis.com/view/20240117/1733068/anggaran-dana-alokasi-khusus-pendidikan-2024" class="absolute top-[10%] left-[5%] text-white px-2 py-1 rounded-lg text-xs w-full lg:w-[70%] font-semibold lg:text-xl">
                                    Anggaran Dana Alokasi Khusus Pendidikan 2024 foto.bisnis.com
                                </a>
                            </div>
                        </div>
                        <div class="grid gap-4">
                            <div class="relative h-auto max-w-full rounded-lg">
                                <img class="h-auto max-w-full rounded-lg" src="/assets/image/berita3.png" alt="">
                                <a href="https://www.beritamerdekaonline.com/2022/12/pengelolaan-transportasi-umum-di-jateng-bikin-iri-warganet/" class="absolute top-[10%] left-[5%] text-white px-2 py-1 rounded-lg text-xs font-semibold lg:text-xl">
                                    Pengelolaan Transportasi Umum di Jateng Bikin Iri Warganet
                                </a>
                            </div>
                            <div class="relative h-auto max-w-full rounded-lg">
                                <img class="h-auto max-w-full rounded-lg" src="/assets/image/berita6.png" alt="">
                                <a href="https://www.beritamerdekaonline.com/2022/12/pengelolaan-transportasi-umum-di-jateng-bikin-iri-warganet/" class="absolute top-[10%] left-[5%] text-white px-2 py-1 rounded-lg text-xs w-full lg:w-[70%] font-semibold lg:text-xl">
                                    Ganjar Cek Jalan Rusak di Pekalongan
                                </a>
                            </div>
                            <div class="relative h-auto max-w-full rounded-lg">
                                <img class="h-auto max-w-full rounded-lg" src="/assets/image/berita7.png" alt="">
                                <p class="absolute top-[10%] left-[5%] text-white px-2 py-1 rounded-lg text-xs font-semibold lg:w-[70%] w-full lg:text-xl">
                                    Fasilitas di tlj tidak berguna
                                </p>
                            </div>
                        </div>
                        <div class="grid gap-4">
                            <div class="relative h-auto max-w-full rounded-lg">
                                <img class="h-auto max-w-full rounded-lg" src="/assets/image/berita8.png" alt="">
                                <a href="https://tripjogja.co.id" class="absolute top-[10%] left-[5%] text-white px-2 py-1 rounded-lg text-xs font-semibold lg:text-xl">
                                    Kota Lama Semarang, Fasilitas, Lokasi & Tiket Masuk 2024 - TripJogja™
                                </a>
                            </div>
                            <div class="relative h-auto max-w-full rounded-lg">
                                <img class="h-auto max-w-full rounded-lg" src="/assets/image/berita9.png" alt="">
                                <a href="jatengprov.gohttps://jatengprov.go.id/publik/temui-jalan-provinsi-rusak-dwi-lapor-lewat-aplikasi-jalan-cantik-dan-langsung-ditangani/" class="absolute top-0 lg:top-[10%] left-[5%] text-white px-2 py-1 rounded-lg text-[10px] font-semibold lg:text-xl">
                                    Temui Jalan Provinsi Rusak, Dwi Lapor Lewat Aplikasi Jalan Cantik dan Langsung Ditangani
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { onMounted } from 'vue';
import Sidebar from '~/components/Sidebar.vue';

onMounted(() => {
  function updateTime() {
    const timeElement = document.getElementById("current-time");
    const dayElement = document.getElementById("current-day");
    const greetingElement = document.getElementById("greeting");

    const now = new Date();
    
    const daysOfWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const monthsOfYear = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    
    const day = daysOfWeek[now.getDay()];
    const date = now.getDate();
    const month = monthsOfYear[now.getMonth()];
    const year = now.getFullYear();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');

    let greetingMessage = 'Selamat Pagi';
    if (hours >= 12 && hours < 17) {
      greetingMessage = 'Selamat Siang';
    } else if (hours >= 17 && hours < 19) {
      greetingMessage = 'Selamat Sore';
    } else if (hours >= 19 || hours < 5) {
      greetingMessage = 'Selamat Malam';
    }

    // Use backticks for template literals
    dayElement.textContent = `${day}, ${date} ${month} ${year}`;
    greetingElement.textContent = greetingMessage;
    timeElement.textContent = `${hours}:${minutes}`;
  }

  setInterval(updateTime, 1000);

  updateTime();
});
</script>
