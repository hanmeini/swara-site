<template>
  <!-- Hero Section -->
  <section class="px-10 py-24 lg:flex lg:justify-between lg:items-start font-jakarta">
    <div class="p-3 flex flex-col gap-0 lg:gap-40 lg:w-[32%]">
      <h1 class="text-3xl sm:text-5xl lg:text-6xl leading-tight font-bold text-gray-800 items-start">
        <span class="text-[#A52A2D] italic font-semibold">Suara</span> Anda, 
        <span class="italic underline decoration-[#A52A2D] decoration-4"><br/>Perubahan</span><br /> kami.
      </h1>
      <div>
        <p class="mt-3 text-sm sm:text-xl lg:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi eum ut repudiandae nihil dolores.</p>
        <button
                class="mt-4 px-3 py-1.5 bg-gray-800 bg-opacity-65 text-white rounded-full flex justify-between gap-5 items-center group-hover:transition duration-300"
              >
                <span class="text-sm font-semibold pr-4 pl-4">Sampaikan Keluhanmu</span>
                <div
                  class="w-10 h-10 bg-[#A52A2D] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white transform -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <line x1="12" y1="5" x2="19" y2="12"></line>
                    <line x1="12" y1="19" x2="19" y2="12"></line>
                  </svg>
                </div>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 grid-rows-3 lg:grid-cols-3 lg:grid-rows-auto lg:mt-0 lg:w-[68%]">
      <div class="sm:w-full sm:h-full">
        <!-- Card 1 -->
        <div class="rounded-3xl overflow-hidden shadow group flex flex-col justify-between bg-gray-100 h-60 lg:w-full lg:h-[85%] mb-6">
          <div 
            class="w-full h-full bg-[url('/assets/image/card1.png')] bg-center transition-transform duration-300 group-hover:scale-105 flex items-start"
          >
            <div class="w-full h-full flex flex-col justify-center gap-28 items-start text-white px-6">
              <h3 class="text-lg font-bold">Lorem ipsum dolor sit amet</h3>
              <div>
                <p class="mt-2 text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button
                  class="mt-4 px-3 py-1.5 bg-gray-800 bg-opacity-65 text-white rounded-full flex justify-between gap-5 items-center group-hover:transition duration-300"
                >
                  <span class="text-sm font-semibold pr-4 pl-4">Telusuri</span>
                  <div
                    class="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white transform -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
        <div class="rounded-3xl shadow bg-[url('/assets/image/card1.png')] bg-cover bg-center text-white h-60 lg:w-full lg:h-[55%]">
          <h3 class="text-lg font-bold">Card 2 Lorem dolor sit amet</h3>
          <p class="mt-2">Sed do eiusmod tempor</p>
        </div>
      </div>
      <div class="w-full h-full">
        <!-- Card 3 -->
        <div class="rounded-3xl overflow-hidden shadow group flex flex-col justify-between bg-gray-100 h-60 lg:w-full lg:h-[60%] mb-6">
          <div 
            class="w-full h-full bg-[url('/assets/image/card1.png')] bg-center transition-transform duration-300 group-hover:scale-105 flex items-start"
          >
            <div class="w-full h-full flex flex-col justify-center gap-28 items-start text-white px-6">
              <h3 class="text-lg font-bold">Lorem ipsum dolor sit amet</h3>
              <div>
                <p class="mt-2 text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button
                  class="mt-4 px-3 py-1.5 bg-gray-800 bg-opacity-65 text-white rounded-full flex justify-between gap-5 items-center group-hover:transition duration-300"
                >
                  <span class="text-sm font-semibold pr-4 pl-4">Telusuri</span>
                  <div
                    class="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white transform -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
        <!-- Card 4 -->
        <div class="p-4 rounded-3xl shadow bg-[url('/assets/image/card1.png')] bg-cover bg-center text-white h-60 lg:w-full lg:h-[80%]">
          <h3 class="text-lg font-bold">Card 2 Lorem dolor sit amet</h3>
          <p class="mt-2">Sed do eiusmod tempor</p>
        </div>
      </div>
      <div class="w-full h-full">
        <!-- Card 5 -->
        <div class="rounded-3xl overflow-hidden shadow group flex flex-col justify-between bg-gray-100 h-60 lg:w-full lg:h-[40%] mb-6">
          <div 
            class="w-full h-full bg-[url('/assets/image/card1.png')] bg-center transition-transform duration-300 group-hover:scale-105 flex items-start"
          >
            <div class="w-full h-full flex flex-col justify-center gap-28 items-start text-white px-6">
              <h3 class="text-lg font-bold">Card 5 ipsum dolor sit amet</h3>
              <div>
                <p class="mt-2 text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button
                  class="mt-4 px-3 py-1.5 bg-gray-800 bg-opacity-65 text-white rounded-full flex justify-between gap-5 items-center group-hover:transition duration-300"
                >
                  <span class="text-sm font-semibold pr-4 pl-4">Telusuri</span>
                  <div
                    class="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white transform -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
        <!-- Card 6 -->
        <div class="p-4 rounded-3xl shadow bg-[url('/assets/image/card1.png')] bg-cover bg-center text-white h-60 lg:w-full lg:h-full">
          <h3 class="text-lg font-bold">Card 6 Lorem dolor sit amet</h3>
          <p class="mt-2">Sed do eiusmod tempor</p>
        </div>
      </div>
      </div>
  </section>
</template>

<script setup>
</script>
