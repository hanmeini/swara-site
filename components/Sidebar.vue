<template>
  <!-- Sidebar -->
  <div class="fixed z-50 bottom-2 left-1/2 transform -translate-x-1/2 lg:bottom-[33%] lg:left-[1%] lg:translate-x-0 lg:w-[6%]">
    <div class="flex flex-row lg:flex-col items-center justify-center bg-white border-2 border-gray-300 shadow-2xl py-4 lg:py-10 px-10 lg:px-1 w-auto rounded-full">
      <!-- Profile Picture -->
      <img 
        alt="User profile picture" 
        class="rounded-full mr-4 lg:mr-0 lg:mb-4 w-8 h-8 md:w-12 md:h-12 lg:w-8 lg:h-8" 
        src="../assets/image/chaeyeon.png" 
      />
      
      <!-- Navigation Menu -->
      <nav class="flex flex-row lg:flex-col gap-6 items-center">
        <!-- Icon 1 -->
        <a class="text-red-500" href="/">
          <svg class="w-8 h-8 md:w-12 md:h-12 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <g fill="#a52a2d" fill-rule="nonzero">
              <g transform="scale(5.33333,5.33333)">
                <path d="M39.5,43h-9c-1.381,0 -2.5,-1.119 -2.5,-2.5v-9c0,-1.105 -0.895,-2 -2,-2h-4c-1.105,0 -2,0.895 -2,2v9c0,1.381 -1.119,2.5 -2.5,2.5h-9c-1.381,0 -2.5,-1.119 -2.5,-2.5v-19.087c0,-2.299 1.054,-4.471 2.859,-5.893l14.212,-11.199c0.545,-0.428 1.313,-0.428 1.857,0l14.214,11.199c1.805,1.422 2.858,3.593 2.858,5.891v19.089c0,1.381 -1.119,2.5 -2.5,2.5z"></path>
              </g>
            </g>
          </svg>
        </a>

        <!-- Icon 2 -->
        <a href="/news">
          <svg class="w-8 h-8 md:w-12 md:h-12 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <g fill="#a52a2d" fill-rule="nonzero">
              <g transform="scale(5.12,5.12)">
                <path d="M21,3c-9.39844,0 -17,7.60156 -17,17c0,9.39844 7.60156,17 17,17c3.35547,0 6.46094,-0.98437 9.09375,-2.65625l12.28125,12.28125l4.25,-4.25l-12.125,-12.09375c2.17969,-2.85937 3.5,-6.40234 3.5,-10.28125c0,-9.39844 -7.60156,-17 -17,-17zM21,7c7.19922,0 13,5.80078 13,13c0,7.19922 -5.80078,13 -13,13c-7.19922,0 -13,-5.80078 -13,-13c0,-7.19922 5.80078,-13 13,-13z"></path>
              </g>
            </g>
          </svg>
        </a>

        <!-- Profile Icon -->
        <nuxt-link to="/profile">
          <svg class="w-8 h-8 md:w-12 md:h-12 lg:w-8 lg:h-8" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0003 5.33317C22.3856 5.33251 18.834 6.27993 15.6999 8.08088C12.5657 9.88182 9.9588 12.4733 8.13923 15.5966C6.31965 18.72 5.3511 22.2659 5.33024 25.8806C5.30938 29.4952 6.23695 33.0521 8.02035 36.1963C9.22576 34.6297 10.7753 33.3613 12.5492 32.4891C14.323 31.617 16.2737 31.1644 18.2503 31.1665H33.7503C35.727 31.1644 37.6777 31.617 39.4515 32.4891C41.2254 33.3613 42.7749 34.6297 43.9803 36.1963C45.7637 33.0521 46.6913 29.4952 46.6705 25.8806C46.6496 22.2659 45.681 18.72 43.8615 15.5966C42.0419 12.4733 39.4349 9.88182 36.3008 8.08088C33.1667 6.27993 29.6151 5.33251 26.0003 5.33317ZM46.5198 41.6962C46.8435 41.2742 47.1535 40.842 47.4498 40.3993C50.3137 36.1438 51.8404 31.1294 51.8337 25.9998C51.8337 11.7321 40.2681 0.166504 26.0003 0.166504C11.7326 0.166504 0.167019 11.7321 0.167019 25.9998C0.158878 31.6748 2.02712 37.1932 5.48093 41.6962L5.46802 41.7427L6.3851 42.8096C8.80797 45.6422 11.8163 47.9158 15.2026 49.4737C18.589 51.0315 22.2729 51.8365 26.0003 51.8332C26.5583 51.8332 27.1129 51.816 27.664 51.7815C32.3254 51.4876 36.8185 49.9291 40.6608 47.2736C42.4983 46.0059 44.1638 44.5054 45.6156 42.8096L46.5327 41.7427L46.5198 41.6962ZM26.0003 10.4998C23.9449 10.4998 21.9737 11.3164 20.5203 12.7698C19.0669 14.2232 18.2503 16.1944 18.2503 18.2498C18.2503 20.3053 19.0669 22.2765 20.5203 23.7299C21.9737 25.1833 23.9449 25.9998 26.0003 25.9998C28.0558 25.9998 30.027 25.1833 31.4804 23.7299C32.9338 22.2765 33.7503 20.3053 33.7503 18.2498C33.7503 16.1944 32.9338 14.2232 31.4804 12.7698C30.027 11.3164 28.0558 10.4998 26.0003 10.4998Z" fill="#A52A2D" />
          </svg>
        </nuxt-link>

        <a href="/chat" class="text-[#A52A2D] block lg:hidden">
          <svg class="w-8 h-8 md:w-12 md:h-12 lg:w-8 lg:h-8" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5 4V12C14.5 12.2652 14.3947 12.5196 14.2071 12.7071C14.0196 12.8946 13.7652 13 13.5 13H5.18752L3.15002 14.76L3.14439 14.7644C2.96439 14.9169 2.73597 15.0004 2.50002 15C2.35331 14.9997 2.20845 14.9673 2.07564 14.905C1.9029 14.8254 1.75674 14.6977 1.65466 14.5372C1.55257 14.3767 1.49889 14.1902 1.50002 14V4C1.50002 3.73478 1.60537 3.48043 1.79291 3.29289C1.98045 3.10536 2.2348 3 2.50002 3H13.5C13.7652 3 14.0196 3.10536 14.2071 3.29289C14.3947 3.48043 14.5 3.73478 14.5 4Z" fill="#A52A2D"/>
          </svg>
        </a>
      </nav>
    </div>
  </div>
</template>
