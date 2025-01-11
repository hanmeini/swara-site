<template>
  <!-- Hero Section -->
  <section class=" relative px-10 py-32 lg:flex lg:justify-between lg:items-start font-jakarta">
    <!-- Radial Gradient Circle di Kiri -->
    <div
      class="absolute top-1/3 -left-24 transform -translate-y-1/3 w-96 h-96 bg-gradient-to-br from-[#ff284ce1] to-transparent rounded-full opacity-30 blur-3xl z-0">
    </div>
    <!-- Radial Gradient Circle di Kanan -->
    <div
      class="absolute top-1/2 right-0 transform -translate-y-1/2 w-96 h-96 bg-gradient-to-bl from-[#ff284ce1] to-transparent rounded-full opacity-30 blur-3xl z-0">
    </div>
    <div class="p-3 flex flex-col gap-0 lg:gap-52 lg:w-[32%]">
      <h1 class="text-3xl sm:text-5xl lg:text-6xl leading-tight z-10 font-bold text-gray-800 items-start hero-text">
        <span class="text-[#A52A2D] italic font-semibold ">Suara</span> Anda,
        <span class="italic underline decoration-[#A52A2D] decoration-4 "><br />Perubahan</span><br /> kami.
      </h1>

      <div>
        <p class="mt-3 text-sm sm:text-xl lg:text-base">Memudahkan Anda melaporkan dan memantau kondisi fasilitas umum di sekitar Anda. Layanan publik yang berkualitas dimulai dari partisipasi aktif masyarakat dalam melaporkan permasalahan yang terjadi.</p>
        <button class="mt-4 px-2 py-1 bg-gray-800 text-white rounded-full flex justify-between gap-5 items-center ">
          <span class="text-sm font-semibold pr-4 pl-4">Sampaikan Keluhanmu</span>
          <div
            class="w-10 h-10 bg-[#A52A2D] rounded-full flex items-center justify-center transition-transform duration-300 translate-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white transform -rotate-45" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <line x1="12" y1="5" x2="19" y2="12"></line>
              <line x1="12" y1="19" x2="19" y2="12"></line>
            </svg>
          </div>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:grid-rows-auto lg:mt-0 lg:w-[60%] z-10">
      <div class="sm:w-full sm:h-full">
        <!-- Card 1 -->
        <div
          class="rounded-super-rounded overflow-hidden shadow group flex flex-col justify-between bg-gray-100 h-60 lg:w-full lg:h-[70%] mb-6">
          <div class="w-full h-full bg-[url('/assets/image/card1.png')] bg-center flex items-start">
            <div
              class="w-full h-full flex flex-col justify-center gap-44 items-start text-white px-6 inset-0 bg-gradient-to-t from-black/40 to-transparent">
              <h3 class="text-lg font-bold">Sejauh mana masalah sampah di Indonesia?</h3>
              <div>
                <button
                  class="mt-4 px-3 py-1 bg-gray-800/40 backdrop-blur-md text-white rounded-full flex justify-between gap-5 items-center group-hover:transition duration-300">
                  <span class="text-sm font-semibold pr-4 pl-4">Telusuri</span>
                  <div class="w-10 h-10 bg-[#a52a2d] rounded-full flex items-center justify-center translate-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white transform -rotate-45"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <line x1="12" y1="5" x2="19" y2="12"></line>
                      <line x1="12" y1="19" x2="19" y2="12"></line>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Card 2 -->
        <div
          class="rounded-super-rounded overflow-hidden shadow group flex flex-col justify-between bg-gray-100 h-60 lg:w-full lg:h-[45%] mb-6">
          <div class="w-full h-full bg-[url('/assets/image/card4.png')] bg-center bg-cover flex items-start">
            <div class="w-full h-full flex flex-col justify-end pb-4 items-start text-white px-6">
              <div>
                <p class="mt-2 text-base">Laporkan segala bentuk ketidakadilan dan bantu tegakkan hak masyarakat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-full">
        <!-- Card 3 -->
        <div
          class="rounded-super-rounded overflow-hidden shadow group flex flex-col justify-between bg-gray-100 h-60 lg:w-full lg:h-[45%] mb-6">
          <div class="w-full h-full bg-[url('/assets/image/card6.png')] bg-cover bg-center flex items-start">
            <div class="w-full h-full flex flex-col justify-center gap-10 items-start text-white px-6">
              <h3 class="text-lg font-bold">Aspirasi untuk Perubahan</h3>
              <div>
                <p class="mt-2 text-sm">Aspirasi Anda adalah langkah awal untuk perubahan</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Card 4 -->
        <div
          class="rounded-super-rounded overflow-hidden shadow group flex flex-col justify-end bg-gray-100 h-60 lg:w-full lg:h-[70%] mb-6 ">
          <div class="w-full h-full bg-[url('/assets/image/card2.png')] bg-center bg-cover flex items-start ">
            <div
              class="w-full h-full flex flex-col justify-end items-start text-white px-6 inset-0 bg-gradient-to-t from-black/40 to-transparent">
              <div class="mt-auto">
                <p class="mt-2 text-base">Tawuran Remaja Marak di Semarang, Dua Nyawa Melayang
                </p>
                <button
                  class="mt-4 mb-4 px-3 py-1 bg-gray-800/40 backdrop-blur-md text-white rounded-full flex justify-between gap-5 items-center group-hover:transition duration-300">
                  <span class="text-sm font-semibold pr-4 pl-4">Telusuri</span>
                  <div class="w-10 h-10 bg-[#a52a2d] rounded-full flex items-center justify-center translate-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white transform -rotate-45"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <line x1="12" y1="5" x2="19" y2="12"></line>
                      <line x1="12" y1="19" x2="19" y2="12"></line>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-full">
        <!-- Card 5 -->
        <div
          class="rounded-super-rounded overflow-hidden shadow group flex flex-col justify-between bg-gray-100 h-60 lg:w-full lg:h-[25%] mb-6">
          <div class="w-full h-full bg-[url('/assets/image/card5.png')] bg-center bg-cover  flex items-start">
            <div class="w-full h-full flex flex-col justify-center gap-1 items-start text-white px-6">
              <div>
                <p class="mt-2 text-base font-semibold ">Lorem ipsum <br>dolor sit amet <br> conse.</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Card 6 -->
        <div
          class="rounded-super-rounded overflow-hidden shadow group flex flex-col justify-between bg-gray-100 h-60 lg:w-full lg:h-[90%] mb-6">
          <div class="w-full h-full bg-[url('/assets/image/card3.png')] bg-center bg-cover flex items-start">
            <div
              class="w-full h-full flex flex-col justify-center gap-40 items-start text-white px-6 inset-0 bg-gradient-to-t from-black/40 to-transparent">
              <h3 class="text-lg font-bold">Mari jaga bersama dengan menyuarakan solusi yang membangun</h3>
              <button
                class="mt-4 px-2 py-1  bg-gray-800/40 backdrop-blur-md text-white rounded-full flex justify-between gap-5 items-center group-hover:transition duration-300">
                <span class="text-sm font-semibold pr-4 pl-4">Telusuri</span>
                <div class="w-10 h-10 bg-[#a52a2d] rounded-full flex items-center justify-center translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white transform -rotate-45"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                     <line x1="12" y1="5" x2="19" y2="12"></line>
                     <line x1="12" y1="19" x2="19" y2="12"></line>
                   </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Instansi -->
  <section class="flex flex-col justify-center items-center px-10 py-10 mb-7 w-auto">
    <h1 class="font-bold text-4xl opacity-70 mb-20">Instansi Terhubung</h1>
    <!-- Kotak -->
    <div class="flex flex-row gap-16 mb-10 w-auto">
      <!-- Kotak 1 -->
      <div class="p-1 shadow-lg rounded-super-rounded bg-gradient-to-br from-[#A52A2D] via-white to-[#A52A2D] w-full">
        <div class="w-full border-1 p-5 rounded-[calc(3rem-1.2rem)] bg-white flex justify-center items-center">
          <img class="max-w-full max-h-full" src="/assets/image/instansi1.png" alt="Instansi 1">
        </div>
      </div>
      <!-- Kotak 2 -->
      <div class="p-1 shadow-lg rounded-super-rounded bg-gradient-to-br from-[#A52A2D] via-white to-[#A52A2D] w-full">
        <div class="w-full border-1 p-5 rounded-[calc(3rem-1.2rem)] bg-white flex justify-center items-center">
          <img class="max-w-full max-h-full" src="/assets/image/instansi2.png" alt="Instansi 1">
        </div>
      </div>
      <!-- Kotak 3 -->
      <div class="p-1 shadow-lg rounded-super-rounded bg-gradient-to-br from-[#A52A2D] via-white to-[#A52A2D] w-full">
        <div class="w-full border-1 p-5 rounded-[calc(3rem-1.2rem)] bg-white flex justify-center items-center">
          <img class="max-w-full max-h-full" src="/assets/image/instansi3.png" alt="Instansi 1">
        </div>
      </div>
    </div>
  </section>

  <!-- About -->
  <section
    class="px-10 py-44 lg:flex lg:justify-between lg:items-start font-jakarta bg-[url('/assets/image/wave.png')] bg-no-repeat bg- bg-center flex flex-row gap-10 relative">
    <!-- image kiri -->
    <div class="flex p-5 flex-col gap-5">
      <div
        class="w-24 h-24 left-[28%] bottom-[73%] absolute bg-[url('assets/image/about1.png')] bg-cover bg-center rounded-super-rounded">
      </div>
      <div class="w-48 h-48 left-[5%] bottom-[40%] absolute bg-[#454955] rounded-super-rounded content-center px-4">
        <h1 class="text-white font-semibold">Mendukung perbaikan fasilitas demi kenyamanan dan keamanan bersama.</h1>
      </div>
      <div
        class="w-48 h-48 left-[20%] top-[60%] absolute bg-[url('assets/image/about2.png')] bg-cover bg-center rounded-super-rounded">
      </div>
    </div>

    <!-- image tengah -->
    <div
      class="shadow-lg rounded-extra-rounded p-1 bg-gradient-to-br from-[#A52A2D] via-white to-[#A52A2D] shadow-[#A52A2D]">
      <div class="bg-white h-96 w-60 rounded-[calc(8rem-1.2rem)] flex items-center justify-center relative">
        <img class="h-full w-full" src="/assets/image/masmas.png" alt="" srcset="">
        <button
          class="bg-white shadow-[#A52A2D] shadow-sm absolute w-32 h-10 rounded-e-3xl rounded-t-3xl p-3 flex flex-row gap-6 items-center justify-center bottom-[55%] left-[90%]">
          <h1 class="font-bold">Lapor</h1>
          <div
            class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white transform -rotate-45" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <line x1="12" y1="5" x2="19" y2="12"></line>
              <line x1="12" y1="19" x2="19" y2="12"></line>
            </svg>
          </div>
        </button>
        <button
          class="bg-white shadow-[#A52A2D] shadow-sm absolute w-32 h-10 rounded-e-3xl rounded-t-3xl p-3 flex flex-row gap-6 items-center justify-center bottom-[20%] left-[70%]">
          <h1 class="font-bold">Lapor</h1>
          <div
            class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white transform -rotate-45" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <line x1="12" y1="5" x2="19" y2="12"></line>
              <line x1="12" y1="19" x2="19" y2="12"></line>
            </svg>
          </div>
        </button>
        <button
          class="bg-white shadow-[#A52A2D] shadow-sm absolute w-32 h-10 rounded-t-3xl rounded-l-3xl p-3 flex flex-row gap-6 items-center justify-center bottom-[40%] right-[90%]">
          <div
            class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white transform -rotate-45" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <line x1="12" y1="5" x2="19" y2="12"></line>
              <line x1="12" y1="19" x2="19" y2="12"></line>
            </svg>
          </div>
          <h1 class="font-bold">Lapor</h1>
        </button>
      </div>
    </div>

    <!-- image kanan -->
    <div class="flex p-5 flex-col gap-5">
      <div
        class="w-48 h-48 absolute right-[18%] bottom-[60%] bg-[url('assets/image/about3.png')] bg-cover bg-center rounded-super-rounded">
      </div>
      <div
        class="w-24 h-24 absolute right-[7%] bottom-[45%] bg-[url('assets/image/about1.png')] bg-cover bg-center rounded-super-rounded">
      </div>
      <div class="w-48 h-48 absolute right-[20%] top-[60%]  bg-[#454955] rounded-super-rounded content-center px-4">
        <h1 class="text-white font-semibold">Menghubungkan masyarakat dengan instansi terkait untuk solusi yang tepat.
        </h1>
      </div>
    </div>
  </section>

  <!-- Kontak -->
  <section
    class="relative min-h-screen flex flex-col items-center justify-center bg-[url('/assets/image/sledingan.png')] bg-no-repeat bg-bottom  bg-[length:100%_50%] font-jakarta px-4 lg:px-20 py-16">
    <!-- Heading -->
    <div class="text-center mb-7 ">
      <h1 class="text-3xl lg:text-5xl font-bold">
        <span class="text-[#a52a2d] m">GET</span> IN TOUCH
      </h1>
      <p class="text-black font-medium mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br>tempor incididunt ut labore et
        dolore magna aliqua.
      </p>
    </div>

    <!-- Kontak Section -->
    <div
      class="p-1 rounded-super-rounded bg-gradient-to-br from-[#A52A2D] via-white to-[#A52A2D] mb-20 shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
      <div class="flex flex-col lg:flex-row bg-white rounded-[calc(3rem-1.2rem)] overflow-hidden w-full max-w-7xl">
        <!-- Bagian Kontak -->
        <div class="bg-[#a52a2d] relative p-6 rounded-[calc(3rem-1.5rem)] m-1 md:p-12 text-white max-w-sm">
          <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
          <p class="text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
          </p>
          <!-- Informasi Kontak -->
          <div class="flex items-center gap-3 mb-4 ">
            <div class="p-2 bg-white text-red-600 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <div>
              <p class="font-semibold">Call Us</p>
              <p class="text-sm">+628293788283702</p>
            </div>
          </div>
          <div class="flex items-center gap-3 mb-4">
            <div class="p-2 bg-white shadow-lg text-red-600 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path
                  d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </div>
            <div>
              <p class="font-semibold">Email Us</p>
              <p class="text-sm">SwaraIndonesia@gmail.com</p>
            </div>
          </div>
          <div class="flex items-center gap-3 mb-4">
            <div class="p-2 bg-white text-red-600 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <div>
              <p class="font-semibold">Head Office</p>
              <p class="text-sm">Jl. Tri Lomba Juang No.18, Semarang</p>
            </div>
          </div>

          <!-- Social Media -->
          <p class="font-semibold text-sm mb-2">Follow our social media</p>
          <div class="flex gap-2">
            <div class="p-1 bg-white text-red-600 font-bold rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
                <g fill="#a52a2d" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                  stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                  font-family="none" font-weight="none" font-size="none" text-anchor="none"
                  style="mix-blend-mode: normal">
                  <g transform="scale(10.66667,10.66667)">
                    <path
                      d="M8,3c-2.757,0 -5,2.243 -5,5v8c0,2.757 2.243,5 5,5h8c2.757,0 5,-2.243 5,-5v-8c0,-2.757 -2.243,-5 -5,-5zM8,5h8c1.654,0 3,1.346 3,3v8c0,1.654 -1.346,3 -3,3h-8c-1.654,0 -3,-1.346 -3,-3v-8c0,-1.654 1.346,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5zM12,9c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3z">
                    </path>
                  </g>
                </g>
              </svg>
            </div>

            <div class="p-1 bg-white text-red-600 font-bold rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
                <g fill="#a52a2d" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                  stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                  font-family="none" font-weight="none" font-size="none" text-anchor="none"
                  style="mix-blend-mode: normal">
                  <g transform="scale(5.12,5.12)">
                    <path
                      d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z">
                    </path>
                  </g>
                </g>
              </svg>
            </div>

            <div class="p-1 bg-white text-red-600 font-bold  rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
                <g fill="#a52a2d" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                  stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                  font-family="none" font-weight="none" font-size="none" text-anchor="none"
                  style="mix-blend-mode: normal">
                  <g transform="scale(10.66667,10.66667)">
                    <path
                      d="M2.36719,3l7.0957,10.14063l-6.72266,7.85938h2.64063l5.26367,-6.16992l4.31641,6.16992h6.91016l-7.42187,-10.625l6.29102,-7.375h-2.59961l-4.86914,5.6875l-3.97266,-5.6875zM6.20703,5h2.04883l9.77734,14h-2.03125z">
                    </path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div class="absolute bottom-0 left-0">
            <svg width="389" height="70" viewBox="0 0 389 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.2186 11.8041C60.6839 -20.2518 135.46 23.2536 213.774 22.2125C276.203 21.3825 329.049 -11.0565 372.37 11.8041C409.787 31.5489 372.37 82 372.37 82H14.2186C14.2186 82 -17.7732 33.8749 14.2186 11.8041Z"
                fill="#E9948F" fill-opacity="0.35" />
            </svg>
          </div>
          <div class="absolute bottom-0 left-0">
            <svg width="389" height="109" viewBox="0 0 389 109" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.2186 15.6908C60.6839 -26.9201 135.46 30.9102 213.774 29.5263C276.203 28.4231 329.049 -14.6971 372.37 15.6908C409.787 41.9369 372.37 109 372.37 109H14.2186C14.2186 109 -17.7732 45.0288 14.2186 15.6908Z"
                fill="#E9948F" fill-opacity="0.35" />
            </svg>
          </div>
        </div>

        <!-- Bagian Form -->
        <div class="p-8 md:p-12 bg-gradient-to-br from-white via-gray-50 to-red-100 flex-1">
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Input Nama Lengkap -->
              <div class="p-1 rounded-2xl bg-gradient-to-br from-[#A52A2D] via-white to-[#A52A2D]">
                <div
                  class="relative flex flex-row gap-2 bg-white border-2 border-transparent shadow-md rounded-xl items-center justify-center pl-2">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.99963 10.5C11.392 10.5 12.7274 9.96663 13.7119 9.01723C14.6965 8.06783 15.2496 6.78016 15.2496 5.4375C15.2496 4.09484 14.6965 2.80718 13.7119 1.85777C12.7274 0.908369 11.392 0.375 9.99963 0.375C8.60724 0.375 7.27188 0.908369 6.28732 1.85777C5.30275 2.80718 4.74963 4.09484 4.74963 5.4375C4.74963 6.78016 5.30275 8.06783 6.28732 9.01723C7.27188 9.96663 8.60724 10.5 9.99963 10.5ZM18.2859 20.625C19.3674 20.625 20.1986 19.6783 19.8119 18.7029C19.0532 16.7861 17.7087 15.1366 15.9564 13.9728C14.204 12.8091 12.1265 12.186 9.99875 12.186C7.87103 12.186 5.79348 12.8091 4.04113 13.9728C2.28879 15.1366 0.944289 16.7861 0.185625 18.7029C-0.199375 19.6783 0.630125 20.625 1.71163 20.625H18.2859Z"
                      fill="#A52A2D" />
                  </svg>
                  <input type="text" placeholder="Nama Lengkap"
                    class="w-full border-none focus:outline-none bg-white rounded-xl p-4 text-gray-800" />
                </div>
              </div>
              <!-- Input Perusahaan -->
              <div class="p-1 rounded-2xl bg-gradient-to-br from-[#A52A2D] via-white to-[#A52A2D]">
                <div
                  class="relative flex flex-row gap-2 bg-white border-2 border-transparent shadow-md rounded-xl items-center justify-center pl-2">
                  <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.733 0.25H6.267C5.455 0.25 4.798 0.25 4.267 0.295C3.717 0.342 3.234 0.44 2.787 0.676C2.07746 1.05316 1.50575 1.64553 1.154 2.368C0.931 2.822 0.838 3.312 0.794 3.875C0.75 4.424 0.75 5.102 0.75 5.947V16.053C0.75 16.898 0.75 17.576 0.793 18.125C0.838 18.688 0.931 19.178 1.153 19.632C1.50527 20.3548 2.07772 20.9472 2.788 21.324C3.234 21.56 3.718 21.658 4.266 21.704C4.681 21.74 5.17 21.748 5.75 21.75V14.5C5.75 13.7707 6.03973 13.0712 6.55546 12.5555C7.07118 12.0397 7.77065 11.75 8.5 11.75H9.5C10.2293 11.75 10.9288 12.0397 11.4445 12.5555C11.9603 13.0712 12.25 13.7707 12.25 14.5V21.75C12.7451 21.7543 13.2401 21.7393 13.734 21.705C14.283 21.658 14.766 21.56 15.212 21.324C15.9219 20.947 16.494 20.3546 16.846 19.632C17.069 19.178 17.162 18.688 17.206 18.124C17.25 17.576 17.25 16.898 17.25 16.054V5.947C17.25 5.102 17.25 4.424 17.207 3.875C17.163 3.312 17.069 2.822 16.847 2.368C16.4947 1.64523 15.9223 1.05282 15.212 0.676C14.766 0.44 14.282 0.342 13.734 0.296C13.202 0.25 12.545 0.25 11.734 0.25M4.25 5C4.25 4.80109 4.32902 4.61032 4.46967 4.46967C4.61032 4.32902 4.80109 4.25 5 4.25H7C7.19891 4.25 7.38968 4.32902 7.53033 4.46967C7.67098 4.61032 7.75 4.80109 7.75 5C7.75 5.19891 7.67098 5.38968 7.53033 5.53033C7.38968 5.67098 7.19891 5.75 7 5.75H5C4.80109 5.75 4.61032 5.67098 4.46967 5.53033C4.32902 5.38968 4.25 5.19891 4.25 5ZM5 8.25H7C7.19891 8.25 7.38968 8.32902 7.53033 8.46967C7.67098 8.61032 7.75 8.80109 7.75 9C7.75 9.19891 7.67098 9.38968 7.53033 9.53033C7.38968 9.67098 7.19891 9.75 7 9.75H5C4.80109 9.75 4.61032 9.67098 4.46967 9.53033C4.32902 9.38968 4.25 9.19891 4.25 9C4.25 8.80109 4.32902 8.61032 4.46967 8.46967C4.61032 8.32902 4.80109 8.25 5 8.25ZM10.25 5C10.25 4.80109 10.329 4.61032 10.4697 4.46967C10.6103 4.32902 10.8011 4.25 11 4.25H13C13.1989 4.25 13.3897 4.32902 13.5303 4.46967C13.671 4.61032 13.75 4.80109 13.75 5C13.75 5.19891 13.671 5.38968 13.5303 5.53033C13.3897 5.67098 13.1989 5.75 13 5.75H11C10.8011 5.75 10.6103 5.67098 10.4697 5.53033C10.329 5.38968 10.25 5.19891 10.25 5ZM11 8.25H13C13.1989 8.25 13.3897 8.32902 13.5303 8.46967C13.671 8.61032 13.75 8.80109 13.75 9C13.75 9.19891 13.671 9.38968 13.5303 9.53033C13.3897 9.67098 13.1989 9.75 13 9.75H11C10.8011 9.75 10.6103 9.67098 10.4697 9.53033C10.329 9.38968 10.25 9.19891 10.25 9C10.25 8.80109 10.329 8.61032 10.4697 8.46967C10.6103 8.32902 10.8011 8.25 11 8.25Z"
                      fill="#A52A2D" />
                  </svg>
                  <input type="text" placeholder="Perusahaan"
                    class="w-full border-none focus:outline-none bg-white rounded-xl p-4 text-gray-800" />
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Input Nomor Telepon -->
              <div class="p-1 rounded-2xl bg-gradient-to-br from-[#A52A2D] via-white to-[#A52A2D]">
                <div
                  class="relative flex flex-row gap-2 bg-white border-2 border-transparent shadow-md rounded-xl items-center justify-center pl-2">
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.0919 22.4375C17.1388 22.4375 15.7999 22.0928 13.795 20.9727C11.357 19.6055 9.47128 18.3433 7.04647 15.9248C4.70858 13.5884 3.57089 12.0757 1.9786 9.17826C0.179775 5.90677 0.486416 4.19193 0.829189 3.45902C1.23739 2.58304 1.83993 2.05912 2.61874 1.5391C3.0611 1.24927 3.52922 1.00083 4.01718 0.79691C4.06601 0.775914 4.11142 0.755895 4.15194 0.737828C4.39364 0.628942 4.75985 0.464391 5.22372 0.640172C5.53329 0.756383 5.80966 0.994176 6.24228 1.42142C7.12948 2.29642 8.34188 4.24515 8.78915 5.20218C9.08944 5.8472 9.28817 6.27299 9.28866 6.75052C9.28866 7.30961 9.00741 7.74076 8.6661 8.20609C8.60214 8.29349 8.53866 8.37699 8.47714 8.45804C8.10556 8.94633 8.02401 9.08744 8.07772 9.33939C8.18661 9.84574 8.99862 11.3531 10.3331 12.6846C11.6676 14.0162 13.1314 14.7769 13.6397 14.8853C13.9024 14.9414 14.0465 14.8565 14.5504 14.4717C14.6226 14.4165 14.6969 14.3594 14.7745 14.3023C15.295 13.9151 15.7061 13.6412 16.252 13.6412H16.255C16.7301 13.6412 17.1368 13.8472 17.8106 14.187C18.6895 14.6304 20.6969 15.8272 21.5772 16.7154C22.0055 17.147 22.2442 17.4224 22.3609 17.7315C22.5367 18.1968 22.3712 18.5616 22.2633 18.8057C22.2452 18.8462 22.2252 18.8907 22.2042 18.94C21.9987 19.4271 21.7487 19.8942 21.4576 20.3355C20.9386 21.1119 20.4127 21.7129 19.5348 22.1216C19.0839 22.3349 18.5906 22.4429 18.0919 22.4375Z"
                      fill="#A52A2D" />
                  </svg>
                  <input type="tel" placeholder="Nomor telepon"
                    class="w-full border-none focus:outline-none bg-white rounded-xl p-4 text-gray-800" />
                </div>
              </div>
              <!-- Input Email -->
              <div class="p-1 rounded-2xl bg-gradient-to-br from-[#A52A2D] via-white to-[#A52A2D]">
                <div
                  class="relative flex flex-row gap-2 bg-white border-2 border-transparent shadow-md rounded-xl items-center justify-center pl-2">
                  <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M1.36387 1.61388C0.375 2.60162 0.375 4.1935 0.375 7.375V9.625C0.375 12.8065 0.375 14.3984 1.36387 15.3861C2.35162 16.375 3.9435 16.375 7.125 16.375H13.875C17.0565 16.375 18.6484 16.375 19.6361 15.3861C20.625 14.3984 20.625 12.8065 20.625 9.625V7.375C20.625 4.1935 20.625 2.60162 19.6361 1.61388C18.6484 0.625 17.0565 0.625 13.875 0.625H7.125C3.9435 0.625 2.35162 0.625 1.36387 1.61388ZM4.37437 4.189C4.12613 4.02341 3.82227 3.96321 3.52965 4.02165C3.23702 4.08009 2.97959 4.25238 2.814 4.50062C2.64841 4.74887 2.58821 5.05272 2.64665 5.34535C2.70509 5.63798 2.87738 5.8954 3.12563 6.061L9.25237 10.1447C9.62188 10.391 10.056 10.5223 10.5 10.5223C10.944 10.5223 11.3781 10.391 11.7476 10.1447L17.8744 6.061C18.1226 5.8954 18.2949 5.63798 18.3534 5.34535C18.4118 5.05272 18.3516 4.74887 18.186 4.50062C18.0204 4.25238 17.763 4.08009 17.4704 4.02165C17.1777 3.96321 16.8739 4.02341 16.6256 4.189L10.5 8.27275L4.37437 4.189Z"
                      fill="#A52A2D" />
                  </svg>
                  <input type="email" placeholder="Email"
                    class="w-full border-none focus:outline-none bg-white rounded-xl p-4 text-gray-800" />
                </div>
              </div>
            </div>

            <!-- Input Pesan -->
            <div class="p-1 rounded-2xl bg-gradient-to-br from-[#A52A2D] via-white to-[#A52A2D]">
                <div
                  class="relative flex flex-row gap-2 bg-white border-2 border-transparent shadow-md rounded-xl items-center justify-center pl-2">
                  <textarea
              placeholder="Ketikkan pesan..."
              rows="4"
              class="w-full focus:outline-none border-none bg-white rounded-xl p-4 text-gray-800resize-none"
            ></textarea>
                </div>
              </div>

            <!-- Tombol Kirim -->
            <div class="flex justify-center items-center">
              <button type="submit"
                class="w-[30%] items-center justify-center bg-[#454955] hover:bg-gray-600 text-white font-bold py-3 rounded-super-rounded shadow-md transition-all duration-300">
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="flex flex-col">
    <div class="bg-gradient-to-r from-[#A52A2D] to-[#3D4047] p-10 flex justify-between">
      <div class="flex flex-col">
        <h1 class="text-white font-bold text-4xl mb-6">Our Newsletter</h1>
        <p class="text-white max-w-[50%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eaque
          ratione accusamus placeat voluptates reprehenderit.</p>
      </div>
      <div class="flex flex-col">
        <div class="p-1 rounded-full bg-gradient-to-br from-[#A52A2D] via-white to-[#A52A2D] mb-6">
          <form class="bg-white h-12 border-none focus:outline-none px-2 rounded-full flex justify-between items-center" action="">
            <input class="border-none focus:outline-none rounded-full h-12 text-center placeholder:text-gray-400"
              type="text" placeholder="Ketikan pesan">
            <button class="bg-[#A52A2D] text-white rounded-full px-4 py-3 font-semibold text-sm">
              Kirim Pesan
            </button>
          </form>
        </div>
        <h1 class="font-semibold text-white p-3">www.SwaraJateng.com</h1>
      </div>
    </div>

    <div class="relative bg-[url('assets/image/footer2.png')] bg-cover bg-center">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative p-10 flex flex-row justify-center gap-14">
        <div class=" flex flex-col w-full">
          <h1 class="font-bold text-white text-4xl mb-8">LOGO</h1>
          <div class="flex flex-row items-center">
            <a class="bg-white rounded-full p-2 mx-1" href="">
              <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.17084 0.507812H19.1714C23.3621 0.507812 26.7671 3.73919 26.7671 7.71627V18.1561C26.7671 20.0679 25.9668 21.9014 24.5423 23.2533C23.1179 24.6051 21.1859 25.3646 19.1714 25.3646H8.17084C3.98014 25.3646 0.575195 22.1332 0.575195 18.1561V7.71627C0.575195 5.80447 1.37545 3.97097 2.79991 2.61912C4.22437 1.26727 6.15635 0.507813 8.17084 0.507812ZM7.90892 2.99349C6.65854 2.99349 5.45938 3.46488 4.57524 4.30395C3.69109 5.14303 3.19438 6.28107 3.19438 7.4677V18.4047C3.19438 20.8779 5.30283 22.8789 7.90892 22.8789H19.4333C20.6837 22.8789 21.8829 22.4075 22.767 21.5684C23.6512 20.7293 24.1479 19.5913 24.1479 18.4047V7.4677C24.1479 4.99445 22.0394 2.99349 19.4333 2.99349H7.90892ZM20.5465 4.85774C20.9806 4.85774 21.397 5.02142 21.704 5.31277C22.011 5.60411 22.1835 5.99926 22.1835 6.41129C22.1835 6.82332 22.011 7.21847 21.704 7.50981C21.397 7.80116 20.9806 7.96484 20.5465 7.96484C20.1123 7.96484 19.696 7.80116 19.389 7.50981C19.082 7.21847 18.9095 6.82332 18.9095 6.41129C18.9095 5.99926 19.082 5.60411 19.389 5.31277C19.696 5.02142 20.1123 4.85774 20.5465 4.85774ZM13.6711 6.722C15.4078 6.722 17.0733 7.37671 18.3012 8.54209C19.5292 9.70748 20.2191 11.2881 20.2191 12.9362C20.2191 14.5843 19.5292 16.1649 18.3012 17.3303C17.0733 18.4957 15.4078 19.1504 13.6711 19.1504C11.9345 19.1504 10.269 18.4957 9.04102 17.3303C7.81303 16.1649 7.12316 14.5843 7.12316 12.9362C7.12316 11.2881 7.81303 9.70748 9.04102 8.54209C10.269 7.37671 11.9345 6.722 13.6711 6.722ZM13.6711 9.20767C12.6291 9.20767 11.6298 9.6005 10.8931 10.2997C10.1563 10.999 9.74235 11.9473 9.74235 12.9362C9.74235 13.925 10.1563 14.8734 10.8931 15.5726C11.6298 16.2719 12.6291 16.6647 13.6711 16.6647C14.7131 16.6647 15.7124 16.2719 16.4492 15.5726C17.186 14.8734 17.5999 13.925 17.5999 12.9362C17.5999 11.9473 17.186 10.999 16.4492 10.2997C15.7124 9.6005 14.7131 9.20767 13.6711 9.20767Z"
                  fill="#454955" />
              </svg>
            </a>
            <a class="bg-white rounded-full p-2 mx-1" href="">
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M28.7186 14.4999C28.7186 6.68732 22.3779 0.34668 14.5653 0.34668C6.75275 0.34668 0.412109 6.68732 0.412109 14.4999C0.412109 21.3501 5.28082 27.0538 11.7347 28.3701V18.7459H8.90404V14.4999H11.7347V10.9616C11.7347 8.23003 13.9567 6.00797 16.6883 6.00797H20.2266V10.2539H17.396C16.6176 10.2539 15.9807 10.8908 15.9807 11.6693V14.4999H20.2266V18.7459H15.9807V28.5824C23.128 27.8747 28.7186 21.8454 28.7186 14.4999Z"
                  fill="#454955" />
              </svg>
            </a>
            <a class="bg-white rounded-full p-2 mx-1" href="">
              <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.7696 0.609375H22.2424L14.6563 9.30188L23.5817 21.1324H16.594L11.1171 13.9587L4.85737 21.1324H1.38134L9.49478 11.8317L0.936523 0.610992H8.1021L13.0452 7.16677L18.7696 0.609375ZM17.5484 19.049H19.4732L7.05072 2.58436H4.98677L17.5484 19.049Z"
                  fill="#454955" />
              </svg>
            </a>
          </div>
        </div>
        <div class="relative flex flex-col w-full">
          <h1 class="font-bold text-white text-lg mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            cum
            Lorem ipsum dolor sit amet..</h1>
          <p class="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa quos recusandae neque
            voluptates! Neque quos harum, maxime commodi beatae sunt!</p>
        </div>
        <div class="relative flex flex-col w-full items-center">
          <h1 class="font-bold text-white text-lg mb-8 items-start">Navigasi</h1>
          <div class="text-white flex flex-col">
            <a class="mb-2" href="">Beranda</a>
            <a class="mb-2" href="">Tentang Kami</a>
            <a class="mb-2" href="">Layanan</a>
          </div>
        </div>
        <div class="relative flex flex-col w-full">
          <div class="flex items-center gap-4 rounded-md">
            <div class="bg-white p-2 rounded-full">
              <svg width="30" height="30" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M2.75047 3.13865C0.472656 5.41387 0.472656 9.08065 0.472656 16.409V21.5918C0.472656 28.9201 0.472656 32.5869 2.75047 34.8621C5.02569 37.1399 8.69247 37.1399 16.0208 37.1399H31.569C38.8974 37.1399 42.5642 37.1399 44.8394 34.8621C47.1172 32.5869 47.1172 28.9201 47.1172 21.5918V16.409C47.1172 9.08065 47.1172 5.41387 44.8394 3.13865C42.5642 0.86084 38.8974 0.86084 31.569 0.86084H16.0208C8.69247 0.86084 5.02569 0.86084 2.75047 3.13865ZM9.68496 9.07028C9.11315 8.68885 8.41323 8.55019 7.73919 8.6848C7.06514 8.81942 6.47217 9.21628 6.09074 9.78809C5.7093 10.3599 5.57064 11.0598 5.70525 11.7339C5.83987 12.4079 6.23673 13.0009 6.80855 13.3823L20.9211 22.789C21.7723 23.3561 22.7722 23.6587 23.7949 23.6587C24.8177 23.6587 25.8176 23.3561 26.6688 22.789L40.7813 13.3823C41.3532 13.0009 41.75 12.4079 41.8846 11.7339C42.0192 11.0598 41.8806 10.3599 41.4992 9.78809C41.1177 9.21628 40.5248 8.81942 39.8507 8.6848C39.1767 8.55019 38.4767 8.68885 37.9049 9.07028L23.7949 18.4769L9.68496 9.07028Z"
                  fill="#454955" />
              </svg>
            </div>
            <h1 class="font-bold text-white text-xl">SwaraJateng@gmail.com</h1>
          </div>
        </div>
      </div>
      <div class="relative bg-white h-[2px]"></div>
      <div class="relative p-5 flex justify-center items-center">
        <h1 class="font-bold text-white">© 2025 Swara</h1>
      </div>
    </div>
  </footer>
</template>

<style>
.shadow-custom {
  box-shadow: -5px -5px 1px rgba(165, 42, 45, 0.8), 5px 5px 1px rgba(165, 42, 45, 0.7);
}
</style>
<script setup>
</script>