<template>
  <nav :class="[
      'fixed w-full items-center flex top-0 left-0 z-50 transition duration-300',
      isScrolled ? 'bg-white shadow-sm' : 'bg-transparent',
    ]"
  >
    <div class="container mx-auto px-7 py-4 w-screen flex justify-between items-center">
      <!-- Logo -->
      <div class="text-lg font-bold">Logo</div>

      <!-- Hamburger Button -->
      <button 
        @click="toggleMenu" 
        class="lg:hidden text-gray-800 focus:outline-none transition-transform duration-300"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6 transition-transform duration-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          v-if="!menuOpen"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6 transition-transform duration-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          v-else
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Menu -->
      <ul 
        :class="[
          'flex flex-col lg:flex-row lg:space-x-8 text-gray-800 font-semibold text-sm transition-all duration-200 ease-in-out',
          menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 lg:opacity-100 lg:scale-100',
        ]"
        class="absolute lg:static top-16 lg:top-auto left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:shadow-none shadow-md p-4 lg:p-0"
      >
        <li class="my-2 lg:my-0">
          <nuxt-link to="/beranda" class="hover:text-red-600 transition-all duration-200">Beranda</nuxt-link>
        </li>
        <li class="my-2 lg:my-0">
          <nuxt-link to="/tentang-kami" class="hover:text-red-600 transition-all duration-200">Tentang Kami</nuxt-link>
        </li>
        <li class="my-2 lg:my-0">
          <nuxt-link to="/layanan" class="hover:text-red-600 transition-all duration-200">Layanan</nuxt-link>
        </li>
        <li class="my-2 lg:my-0">
          <nuxt-link to="/kontak-kami" class="hover:text-red-600 transition-all duration-200">Kontak Kami</nuxt-link>
        </li>
      </ul>

      <!-- Sign Up Button -->
      <button 
        class="hidden lg:flex relative items-center px-7 bg-gray-700 text-white py-2.5 rounded-full group hover:bg-gray-600 transition duration-300"
      >
        <span class="text-sm font-semibold pr-5">Sign up</span>
        <div 
          class="absolute right-2 flex justify-center items-center w-7 h-7 bg-red-600 rounded-full transition-transform duration-300 group-hover:translate-x-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white transform -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <line x1="12" y1="5" x2="19" y2="12"></line>
            <line x1="12" y1="19" x2="19" y2="12"></line>
          </svg>
        </div>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

/* Navbar scroll effect */
const isScrolled = ref(false);
const menuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20; 
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
