<template>
    <section class="py-16 px-6 font-jakarta flex flex-col-reverse">
        <Sidebar/>
        <!-- Chat Section -->
      <div
        class="bg-white w-full block lg:hidden lg:w-[35%] h-[20%] p-6 shadow-md border-2 rounded-super-rounded mb-10 border-gray-100 ">
        <div class="flex items-center mb-4 ">
          <button class="flex items-center justify-center w-9 h-9 bg-[#a52a2d] rounded-full text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white transform rotate-180" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <line x1="12" y1="5" x2="19" y2="12"></line>
              <line x1="12" y1="19" x2="19" y2="12"></line>
            </svg>
          </button>
          <div class="ml-4 relative items-center">
            <h1 class="font-bold text-gray-900">Swarakan!</h1>
            <p class="text-xs text-gray-500 underline">SwaraJateng@gmail.com</p>
          </div>
          <div class="w-10 h-10 ml-auto">
            <img src="../assets/image/mbak.png" alt="User Profile" class="w-full h-full rounded-full object-cover">
          </div>
        </div>
        <hr class="border-t border-gray-100 border-1 items-center mb-5">
        <div class="items-center flex flex-col justify-center gap-2 mb-3">
          <button class="bg-gray-100 rounded-super-rounded text-sm px-6 py-2 cursor-default ">Selamat datang,
            Ayam.</button>
          <p class="text-xs text-gray-500 font-semibold">Open aduan: 06.00-20.00 WIB</p>
        </div>
        <div class="bg-[#454955] px-6 py-9 rounded-3xl mb-4">
          <p class="text-white text-xs lg:text-base font-medium lg:font-semibold mb-2">
            Sebelum mengirimkan laporan, pastikan Anda telah membaca ini:
          </p>
          <ul class="list-decimal list-inside lg:text-base text-xs text-white font-medium lg:font-semibold mb-2">
            <p>Larangan</p>
            <li>
              Tidak boleh memposting konten yang mengandung unsur SARA (Suku, Agama, Ras, dan Antar golongan).
            </li>
            <li>
              Tidak boleh memposting konten yang bersifat pornografi atau kekerasan.
            </li>
            <li>
              Tidak boleh memposting konten yang menghina atau merendahkan orang lain.
            </li>
            <li>
              Tidak boleh memposting konten yang melanggar hak cipta.
            </li>
          </ul>
          <p class="text-white text-xs lg:text-base font-medium lg:font-semibold ">
            Pelanggaran terhadap larangan ini dapat mengakibatkan:
          </p>
          <ul class="list-none list-inside text-white text-xs lg:text-base font-medium lg:font-semibold mb-2 items-center">
            <li>
              - Pemblokiran akun
            </li>
            <li>
              - Konten tidak diposting
            </li>
            <li>
              - Pembatasan akses sementara
            </li>
          </ul>
          <p class="text-white text-xs lg:text-base font-medium lg:font-semibold ">
            Pastikan Anda memahami dan mematuhi kebijakan penggunaan untuk menjaga keselamatan dan kenyamanan bersama.
          </p>
        </div>
        <div class="text-gray-500 text-xs text-center font-semibold mb-4">
          09.21 AM
        </div>
        <div class="bg-gray-100 p-2 justify-end flex items-start flex-col w-full rounded-3xl rounded-br-none mb-4">
          <img alt="Bus emitting smoke" class="w-full rounded-3xl mb-2" height="300" src="../assets/image/bus.png.webp" />
          <p class="text-gray-700 mb-2 text-xs lg:text-base">
            Mohon perhatian untuk armada BRT yang beroperasi. Kami mendapati bahwa salah satu bus mengeluarkan asap
            tebal saat beroperasi. Kondisi ini tidak hanya mengganggu kenyamanan penumpang dan pengguna jalan lain,
            tetapi juga mencemari lingkungan dan berpotensi merusak kesehatan. Kami berharap pihak pengelola segera
            melakukan perbaikan atau pengecekan rutin agar armada yang beroperasi tetap aman, nyaman, dan ramah
            lingkungan.
          </p>
        </div>
        <div class="text-gray-700  text-xs align-top justify-end flex items-start -mt-3">
          Dilihat
        </div>
        <div class="flex items-center mt-7">

          <div class="flex items-center bg-[#454955] text-white rounded-full p-2 space-x-3 w-full">
            <!-- Icon Mikrofon -->
            <button class="flex items-center justify-center ps-2">
              <svg width="16" height="17" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.5 4.5C12.5 2.567 10.933 1 9 1C7.067 1 5.5 2.567 5.5 4.5V11C5.5 12.933 7.067 14.5 9 14.5C10.933 14.5 12.5 12.933 12.5 11V4.5Z"
                  fill="white" stroke="white" stroke-width="2" stroke-linejoin="round" />
                <path d="M1.5 10.5C1.5 14.642 4.858 18 9 18M9 18C13.142 18 16.5 14.642 16.5 10.5M9 18V21" stroke="white"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </button>

            <!-- Icon Gambar -->
            <button class="flex items-center justify-center">
              <svg width="17" height="17" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.663086 4.72057C0.663086 2.53998 2.21436 0.76709 4.12238 0.76709H24.8781C26.7861 0.76709 28.3374 2.53998 28.3374 4.72057V24.488C28.3374 26.6685 26.7861 28.4414 24.8781 28.4414H4.12238C2.21436 28.4414 0.663086 26.6685 0.663086 24.488V4.72057ZM18.1649 11.2994C17.9217 10.8917 17.5217 10.6508 17.0947 10.6508C16.6677 10.6508 16.2623 10.8917 16.0245 11.2994L11.322 19.1816L9.88967 17.137C9.64103 16.7848 9.26808 16.581 8.87891 16.581C8.48973 16.581 8.11138 16.7848 7.86814 17.137L4.40885 22.0788C4.09535 22.5236 4.0359 23.1351 4.2521 23.6478C4.46831 24.1606 4.92234 24.488 5.41961 24.488H23.5809C24.062 24.488 24.5052 24.1853 24.7268 23.6973C24.9484 23.2093 24.9214 22.6224 24.6511 22.1715L18.1649 11.2994ZM6.71685 10.6508C7.40494 10.6508 8.06486 10.3384 8.55141 9.78232C9.03797 9.22626 9.31132 8.47207 9.31132 7.68567C9.31132 6.89928 9.03797 6.14509 8.55141 5.58903C8.06486 5.03296 7.40494 4.72057 6.71685 4.72057C6.02875 4.72057 5.36884 5.03296 4.88228 5.58903C4.39572 6.14509 4.12238 6.89928 4.12238 7.68567C4.12238 8.47207 4.39572 9.22626 4.88228 9.78232C5.36884 10.3384 6.02875 10.6508 6.71685 10.6508Z"
                  fill="white" />
              </svg>
            </button>

            <!-- Icon Emoji -->
            <button class="flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.3958 28.4419C6.7535 28.4419 0.558594 22.247 0.558594 14.6047C0.558594 6.96248 6.7535 0.767578 14.3958 0.767578C22.038 0.767578 28.2329 6.96248 28.2329 14.6047C28.2329 22.247 22.038 28.4419 14.3958 28.4419ZM14.3958 25.6745C17.3316 25.6745 20.1473 24.5082 22.2233 22.4322C24.2992 20.3563 25.4655 17.5406 25.4655 14.6047C25.4655 11.6689 24.2992 8.85324 22.2233 6.77726C20.1473 4.70128 17.3316 3.53501 14.3958 3.53501C11.4599 3.53501 8.64426 4.70128 6.56828 6.77726C4.4923 8.85324 3.32603 11.6689 3.32603 14.6047C3.32603 17.5406 4.4923 20.3563 6.56828 22.4322C8.64426 24.5082 11.4599 25.6745 14.3958 25.6745ZM8.8609 15.9885H19.9306C19.9306 17.4564 19.3475 18.8642 18.3095 19.9022C17.2715 20.9402 15.8637 21.5233 14.3958 21.5233C12.9278 21.5233 11.52 20.9402 10.482 19.9022C9.44403 18.8642 8.8609 17.4564 8.8609 15.9885ZM8.8609 13.221C8.31042 13.221 7.78249 13.0024 7.39324 12.6131C7.004 12.2239 6.78532 11.6959 6.78532 11.1455C6.78532 10.595 7.004 10.067 7.39324 9.6778C7.78249 9.28856 8.31042 9.06988 8.8609 9.06988C9.41137 9.06988 9.9393 9.28856 10.3286 9.6778C10.7178 10.067 10.9365 10.595 10.9365 11.1455C10.9365 11.6959 10.7178 12.2239 10.3286 12.6131C9.9393 13.0024 9.41137 13.221 8.8609 13.221ZM19.9306 13.221C19.3802 13.221 18.8522 13.0024 18.463 12.6131C18.0737 12.2239 17.8551 11.6959 17.8551 11.1455C17.8551 10.595 18.0737 10.067 18.463 9.6778C18.8522 9.28856 19.3802 9.06988 19.9306 9.06988C20.4811 9.06988 21.009 9.28856 21.3983 9.6778C21.7875 10.067 22.0062 10.595 22.0062 11.1455C22.0062 11.6959 21.7875 12.2239 21.3983 12.6131C21.009 13.0024 20.4811 13.221 19.9306 13.221Z"
                  fill="white" />
              </svg>
            </button>

            <!-- Input -->
            <input type="text" placeholder="Ketikan keluhanmu"
              class="flex-1 bg-transparent focus:outline-none placeholder-gray-400 text-sm" />

            <!-- Icon Kirim -->
            <button class="flex items-center justify-center w-8 h-8">
              <svg width="25" height="20" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M38.0953 15.6251L38.0821 15.6194L3.04824 1.08834C2.75357 0.965002 2.43292 0.916631 2.11498 0.947553C1.79704 0.978474 1.49171 1.08772 1.22633 1.26553C0.945941 1.44925 0.715628 1.6998 0.556112 1.99463C0.396596 2.28946 0.312882 2.61933 0.3125 2.95455V12.2479C0.312656 12.7061 0.472674 13.15 0.764972 13.5029C1.05727 13.8559 1.46354 14.0958 1.91375 14.1813L21.0213 17.7144C21.0964 17.7287 21.1641 17.7687 21.2129 17.8275C21.2616 17.8864 21.2883 17.9604 21.2883 18.0368C21.2883 18.1132 21.2616 18.1873 21.2129 18.2461C21.1641 18.305 21.0964 18.345 21.0213 18.3592L1.91457 21.8923C1.46448 21.9776 1.05824 22.2172 0.765811 22.5698C0.473382 22.9225 0.313074 23.366 0.3125 23.8241V33.1191C0.312283 33.4392 0.391541 33.7543 0.543162 34.0362C0.694784 34.3181 0.914025 34.558 1.18121 34.7343C1.50261 34.9478 1.87979 35.0619 2.26566 35.0624C2.53392 35.0622 2.79943 35.0083 3.0466 34.9041L38.0797 20.4559L38.0953 20.4485C38.5668 20.2459 38.9687 19.9094 39.251 19.4808C39.5333 19.0521 39.6838 18.5501 39.6838 18.0368C39.6838 17.5235 39.5333 17.0215 39.251 16.5929C38.9687 16.1642 38.5668 15.8278 38.0953 15.6251Z"
                  fill="white" />
              </svg>

            </button>
          </div>

        </div>
      </div>
    </section>
</template>
<script>
import Navbar from '~/components/Navbar.vue';
import Sidebar from '~/components/Sidebar.vue';
</script>