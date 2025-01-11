<template>
  <Navbar />
  <section class="py-16 px-6 font-jakarta">
    <div class="flex flex-col lg:flex-row" id="app">
      <Sidebar />
      <!-- Main Content -->
      <div class="flex-1  p-4">
        <!-- Post 1 -->
        <div class="bg-white p-3 rounded-super-rounded shadow mb-4 w-full relative">
          <div class="flex items-center mb-2">
            <img alt="User profile picture" class="rounded-full mr-2" height="40" src="../assets/image/mbak.png"
              width="40" />
            <div class="absolute w-7 h-7 ml-4 mt-7">
              <img src="../assets/image/chaeyeon.png " alt="Gambar Kecil"
                class="w-full h-full rounded-full object-cover border-2 border-white ">
            </div>
            <div class="flex">
              <div class="font-bold flex items-left justify-between flex-col text-left ">
                Swarakan!
                <div class="text-gray-500 text-sm font-medium">
                  @holmes221b • 21 menit yang lalu
                </div>
              </div>

            </div>
          </div>
          <div class="ml-12">
            <p class="mb-2  leading-tight">
              Mohon perhatian untuk armada BRT yang beroperasi. Kami mendapati bahwa salah satu bus mengeluarkan asap
              tebal saat beroperasi. Kondisi ini tidak hanya mengganggu kenyamanan penumpang dan pengguna jalan lain,
              tetapi juga mencemari lingkungan dan berpotensi merusak kesehatan. Kami berharap pihak pengelola segera
              melakukan perbaikan atau pengecekan rutin agar armada yang beroperasi tetap aman, nyaman, dan ramah
              lingkungan.
            </p>
            <img alt="Bus emitting smoke" class="w-[70%] rounded-super-rounded mb-2 mt-3 "
              src="./../assets/image/bus.png.webp" />
          </div>
          <div class="flex items-center text-gray-500 text-sm gap-2 ml-12">
            <svg width="15" height="15" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7H13.68L14.64 2.43C14.66 2.33 14.67 2.22 14.67 2.11C14.67 1.7 14.5 1.32 14.23 1.05L13.17 0L6.59 6.58C6.22 6.95 6 7.45 6 8V18C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20H17C17.83 20 18.54 19.5 18.84 18.78L21.86 11.73C21.95 11.5 22 11.26 22 11V9ZM0 20H4V8H0V20Z"
                fill="#A52A2D" />
            </svg>
            <span class=" text-[#a52a2d] font-semibold mr-1">
              54
            </span>
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10 -0.000953078C4.477 -0.000953078 1.65574e-06 4.47605 1.65574e-06 9.99905C-0.000846144 11.4724 0.323896 12.9278 0.951002 14.261L0.0210016 18.798C-0.0121094 18.96 -0.00453626 19.1277 0.0430431 19.2861C0.0906225 19.4444 0.176723 19.5885 0.293638 19.7054C0.410553 19.8223 0.554634 19.9084 0.712983 19.956C0.871332 20.0036 1.03901 20.0112 1.201 19.978L5.738 19.048C7.032 19.658 8.478 19.998 10 19.998C15.523 19.998 20 15.522 20 9.99805C20 4.47605 15.523 -0.00195312 10 -0.00195312"
                fill="#A52A2D" />
            </svg>
            <span class="text-[#a52a2d] font-semibold mr-1">
              32
            </span>
            <svg width="16" height="15" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 9.33333L14.6667 0V5.33333C5.33333 6.66667 1.33333 13.3333 0 20C3.33333 15.3333 8 13.2 14.6667 13.2V18.6667L24 9.33333Z"
                fill="#A52A2D" />
            </svg>
            <span class="text-[#a52a2d] font-semibold">
              19
            </span>
          </div>
          <div class="mt-4 flex border-2 border-gray-100 shadow-sm rounded-3xl p-3">
            <img alt="User profile picture" class="rounded-full mb-4 w-11 h-11" src="../assets/image/chaeyeon.png" />
            <div class="ml-4 flex-grow">
              <input class="w-full text-sm rounded pb-2 focus:outline-none" placeholder="Ketikkan komentar..."
                type="text" />
              <div class="justify-between flex items-center">
                <div class="flex gap-2">
                  <svg width="15" height="15" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.5 4.5C12.5 2.567 10.933 1 9 1C7.067 1 5.5 2.567 5.5 4.5V11C5.5 12.933 7.067 14.5 9 14.5C10.933 14.5 12.5 12.933 12.5 11V4.5Z"
                      fill="#A52A2D" stroke="#A52A2D" stroke-width="2" stroke-linejoin="round" />
                    <path d="M1.5 10.5C1.5 14.642 4.858 18 9 18M9 18C13.142 18 16.5 14.642 16.5 10.5M9 18V21"
                      stroke="#A52A2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 2.85714C0 1.28125 1.12109 0 2.5 0H17.5C18.8789 0 20 1.28125 20 2.85714V17.1429C20 18.7188 18.8789 20 17.5 20H2.5C1.12109 20 0 18.7188 0 17.1429V2.85714ZM12.6484 7.61161C12.4727 7.31696 12.1836 7.14286 11.875 7.14286C11.5664 7.14286 11.2734 7.31696 11.1016 7.61161L7.70312 13.308L6.66797 11.8304C6.48828 11.5759 6.21875 11.4286 5.9375 11.4286C5.65625 11.4286 5.38281 11.5759 5.20703 11.8304L2.70703 15.4018C2.48047 15.7232 2.4375 16.1652 2.59375 16.5357C2.75 16.9062 3.07812 17.1429 3.4375 17.1429H16.5625C16.9102 17.1429 17.2305 16.9241 17.3906 16.5714C17.5508 16.2188 17.5312 15.7946 17.3359 15.4688L12.6484 7.61161ZM4.375 7.14286C4.87228 7.14286 5.34919 6.91709 5.70083 6.51523C6.05246 6.11337 6.25 5.56832 6.25 5C6.25 4.43168 6.05246 3.88664 5.70083 3.48477C5.34919 3.08291 4.87228 2.85714 4.375 2.85714C3.87772 2.85714 3.40081 3.08291 3.04917 3.48477C2.69754 3.88664 2.5 4.43168 2.5 5C2.5 5.56832 2.69754 6.11337 3.04917 6.51523C3.40081 6.91709 3.87772 7.14286 4.375 7.14286Z"
                      fill="#A52A2D" />
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.4998 0.916504C5.20025 0.916504 0.916504 5.229 0.916504 10.4998C0.916504 13.0415 1.92617 15.4791 3.7234 17.2763C4.61329 18.1662 5.66975 18.8721 6.83245 19.3537C7.99516 19.8353 9.24134 20.0832 10.4998 20.0832C13.0415 20.0832 15.4791 19.0735 17.2763 17.2763C19.0735 15.4791 20.0832 13.0415 20.0832 10.4998C20.0832 9.24134 19.8353 7.99516 19.3537 6.83245C18.8721 5.66975 18.1662 4.61329 17.2763 3.7234C16.3864 2.8335 15.3299 2.1276 14.1672 1.64599C13.0045 1.16438 11.7583 0.916504 10.4998 0.916504ZM13.854 6.6665C14.2353 6.6665 14.6009 6.81795 14.8705 7.08754C15.1401 7.35712 15.2915 7.72276 15.2915 8.104C15.2915 8.48525 15.1401 8.85089 14.8705 9.12047C14.6009 9.39005 14.2353 9.5415 13.854 9.5415C13.4728 9.5415 13.1071 9.39005 12.8375 9.12047C12.568 8.85089 12.4165 8.48525 12.4165 8.104C12.4165 7.72276 12.568 7.35712 12.8375 7.08754C13.1071 6.81795 13.4728 6.6665 13.854 6.6665ZM7.14567 6.6665C7.52692 6.6665 7.89255 6.81795 8.16214 7.08754C8.43172 7.35712 8.58317 7.72276 8.58317 8.104C8.58317 8.48525 8.43172 8.85089 8.16214 9.12047C7.89255 9.39005 7.52692 9.5415 7.14567 9.5415C6.76442 9.5415 6.39879 9.39005 6.1292 9.12047C5.85962 8.85089 5.70817 8.48525 5.70817 8.104C5.70817 7.72276 5.85962 7.35712 6.1292 7.08754C6.39879 6.81795 6.76442 6.6665 7.14567 6.6665ZM10.4998 15.7707C8.26692 15.7707 6.36942 14.3715 5.60275 12.4165H15.3969C14.6207 14.3715 12.7328 15.7707 10.4998 15.7707Z"
                      fill="#A52A2D" />
                  </svg>
                  <svg width="15" height="15" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.2 18C1.595 18 1.07727 17.7799 0.6468 17.3396C0.216333 16.8994 0.000733333 16.3695 0 15.75V2.25C0 1.63125 0.2156 1.10175 0.6468 0.6615C1.078 0.22125 1.59573 0.00075 2.2 0H8.8L11 2.25H19.8C20.405 2.25 20.9231 2.4705 21.3543 2.9115C21.7855 3.3525 22.0007 3.882 22 4.5V15.75C22 16.3687 21.7848 16.8986 21.3543 17.3396C20.9238 17.7806 20.4057 18.0007 19.8 18H2.2Z"
                      fill="#A52A2D" />
                  </svg>
                  <svg width="15" height="15" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.5 10.9375C7.75408 10.9375 7.03871 10.6412 6.51126 10.1137C5.98382 9.58629 5.6875 8.87092 5.6875 8.125C5.6875 7.37908 5.98382 6.66371 6.51126 6.13626C7.03871 5.60882 7.75408 5.3125 8.5 5.3125C9.24592 5.3125 9.96129 5.60882 10.4887 6.13626C11.0162 6.66371 11.3125 7.37908 11.3125 8.125C11.3125 8.49434 11.2398 8.86007 11.0984 9.2013C10.9571 9.54253 10.7499 9.85257 10.4887 10.1137C10.2276 10.3749 9.91753 10.5821 9.5763 10.7234C9.23507 10.8648 8.86934 10.9375 8.5 10.9375ZM8.5 0.25C6.41142 0.25 4.40838 1.07969 2.93153 2.55653C1.45469 4.03338 0.625 6.03642 0.625 8.125C0.625 14.0312 8.5 22.75 8.5 22.75C8.5 22.75 16.375 14.0312 16.375 8.125C16.375 6.03642 15.5453 4.03338 14.0685 2.55653C12.5916 1.07969 10.5886 0.25 8.5 0.25Z"
                      fill="#A52A2D" />
                  </svg>
                </div>
                <button class="bg-[#454955] text-white px-8 py-2 text-sm font-semibold rounded-full ml-auto">
                  Posting
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Post 2 -->
        <div class="bg-white p-3 rounded-super-rounded shadow mb-4 w-full relative">
          <div class="flex items-center mb-2 relative">
            <img alt="User profile picture" class="rounded-full mr-2" height="40" src="../assets/image/mbak.png"
              width="40" />
            <div class="absolute w-7 h-7 rounded-full ml-4 mt-7">
              <img  src="../assets/image/Shin Hye-sun.png" alt="Gambar Kecil"
                class="object-cover border-2 border-white rounded-full">
            </div>
            <div class="flex">
              <div class="font-bold justify-between ">
                Swarakan!
                <div class="text-gray-500 text-sm font-medium">
                  @moriarty • 56 menit yang lalu
                </div>
              </div>

            </div>
          </div>
          <div class="ml-12">
            <p class="mb-2 leading-tight">
              Mohon perhatian untuk armada BRT yang beroperasi. Kami mendapati bahwa salah satu bus mengeluarkan asap
              tebal saat beroperasi. Kondisi ini tidak hanya mengganggu kenyamanan penumpang dan pengguna jalan lain,
              tetapi juga mencemari lingkungan dan berpotensi merusak kesehatan. Kami berharap pihak pengelola segera
              melakukan perbaikan atau pengecekan rutin agar armada yang beroperasi tetap aman, nyaman, dan ramah
              lingkungan.
            </p>
            <img alt="Bus emitting smoke" class="w-[70%] rounded-super-rounded mb-2 mt-3 "
              src="./../assets/image/bus.png.webp" />
          </div>
          <div class="flex items-center text-gray-500 text-sm gap-2 ml-12">
            <svg width="15" height="15" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7H13.68L14.64 2.43C14.66 2.33 14.67 2.22 14.67 2.11C14.67 1.7 14.5 1.32 14.23 1.05L13.17 0L6.59 6.58C6.22 6.95 6 7.45 6 8V18C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20H17C17.83 20 18.54 19.5 18.84 18.78L21.86 11.73C21.95 11.5 22 11.26 22 11V9ZM0 20H4V8H0V20Z"
                fill="#A52A2D" />
            </svg>
            <span class=" text-[#a52a2d] font-semibold mr-1">
              54
            </span>
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10 -0.000953078C4.477 -0.000953078 1.65574e-06 4.47605 1.65574e-06 9.99905C-0.000846144 11.4724 0.323896 12.9278 0.951002 14.261L0.0210016 18.798C-0.0121094 18.96 -0.00453626 19.1277 0.0430431 19.2861C0.0906225 19.4444 0.176723 19.5885 0.293638 19.7054C0.410553 19.8223 0.554634 19.9084 0.712983 19.956C0.871332 20.0036 1.03901 20.0112 1.201 19.978L5.738 19.048C7.032 19.658 8.478 19.998 10 19.998C15.523 19.998 20 15.522 20 9.99805C20 4.47605 15.523 -0.00195312 10 -0.00195312"
                fill="#A52A2D" />
            </svg>
            <span class="text-[#a52a2d] font-semibold mr-1">
              32
            </span>
            <svg width="16" height="15" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 9.33333L14.6667 0V5.33333C5.33333 6.66667 1.33333 13.3333 0 20C3.33333 15.3333 8 13.2 14.6667 13.2V18.6667L24 9.33333Z"
                fill="#A52A2D" />
            </svg>
            <span class="text-[#a52a2d] font-semibold">
              19
            </span>
          </div>
          <div class="mt-4 flex border-2 border-gray-100 shadow-sm rounded-3xl p-3">
            <img alt="User profile picture" class="rounded-full mb-4 w-11 h-11" src="../assets/image/chaeyeon.png" />
            <div class="ml-4 flex-grow">
              <input class="w-full text-sm rounded pb-2 focus:outline-none" placeholder="Ketikkan komentar..."
                type="text" />
              <div class="justify-between flex items-center">
                <div class="flex gap-2">
                  <svg width="15" height="15" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.5 4.5C12.5 2.567 10.933 1 9 1C7.067 1 5.5 2.567 5.5 4.5V11C5.5 12.933 7.067 14.5 9 14.5C10.933 14.5 12.5 12.933 12.5 11V4.5Z"
                      fill="#A52A2D" stroke="#A52A2D" stroke-width="2" stroke-linejoin="round" />
                    <path d="M1.5 10.5C1.5 14.642 4.858 18 9 18M9 18C13.142 18 16.5 14.642 16.5 10.5M9 18V21"
                      stroke="#A52A2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 2.85714C0 1.28125 1.12109 0 2.5 0H17.5C18.8789 0 20 1.28125 20 2.85714V17.1429C20 18.7188 18.8789 20 17.5 20H2.5C1.12109 20 0 18.7188 0 17.1429V2.85714ZM12.6484 7.61161C12.4727 7.31696 12.1836 7.14286 11.875 7.14286C11.5664 7.14286 11.2734 7.31696 11.1016 7.61161L7.70312 13.308L6.66797 11.8304C6.48828 11.5759 6.21875 11.4286 5.9375 11.4286C5.65625 11.4286 5.38281 11.5759 5.20703 11.8304L2.70703 15.4018C2.48047 15.7232 2.4375 16.1652 2.59375 16.5357C2.75 16.9062 3.07812 17.1429 3.4375 17.1429H16.5625C16.9102 17.1429 17.2305 16.9241 17.3906 16.5714C17.5508 16.2188 17.5312 15.7946 17.3359 15.4688L12.6484 7.61161ZM4.375 7.14286C4.87228 7.14286 5.34919 6.91709 5.70083 6.51523C6.05246 6.11337 6.25 5.56832 6.25 5C6.25 4.43168 6.05246 3.88664 5.70083 3.48477C5.34919 3.08291 4.87228 2.85714 4.375 2.85714C3.87772 2.85714 3.40081 3.08291 3.04917 3.48477C2.69754 3.88664 2.5 4.43168 2.5 5C2.5 5.56832 2.69754 6.11337 3.04917 6.51523C3.40081 6.91709 3.87772 7.14286 4.375 7.14286Z"
                      fill="#A52A2D" />
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.4998 0.916504C5.20025 0.916504 0.916504 5.229 0.916504 10.4998C0.916504 13.0415 1.92617 15.4791 3.7234 17.2763C4.61329 18.1662 5.66975 18.8721 6.83245 19.3537C7.99516 19.8353 9.24134 20.0832 10.4998 20.0832C13.0415 20.0832 15.4791 19.0735 17.2763 17.2763C19.0735 15.4791 20.0832 13.0415 20.0832 10.4998C20.0832 9.24134 19.8353 7.99516 19.3537 6.83245C18.8721 5.66975 18.1662 4.61329 17.2763 3.7234C16.3864 2.8335 15.3299 2.1276 14.1672 1.64599C13.0045 1.16438 11.7583 0.916504 10.4998 0.916504ZM13.854 6.6665C14.2353 6.6665 14.6009 6.81795 14.8705 7.08754C15.1401 7.35712 15.2915 7.72276 15.2915 8.104C15.2915 8.48525 15.1401 8.85089 14.8705 9.12047C14.6009 9.39005 14.2353 9.5415 13.854 9.5415C13.4728 9.5415 13.1071 9.39005 12.8375 9.12047C12.568 8.85089 12.4165 8.48525 12.4165 8.104C12.4165 7.72276 12.568 7.35712 12.8375 7.08754C13.1071 6.81795 13.4728 6.6665 13.854 6.6665ZM7.14567 6.6665C7.52692 6.6665 7.89255 6.81795 8.16214 7.08754C8.43172 7.35712 8.58317 7.72276 8.58317 8.104C8.58317 8.48525 8.43172 8.85089 8.16214 9.12047C7.89255 9.39005 7.52692 9.5415 7.14567 9.5415C6.76442 9.5415 6.39879 9.39005 6.1292 9.12047C5.85962 8.85089 5.70817 8.48525 5.70817 8.104C5.70817 7.72276 5.85962 7.35712 6.1292 7.08754C6.39879 6.81795 6.76442 6.6665 7.14567 6.6665ZM10.4998 15.7707C8.26692 15.7707 6.36942 14.3715 5.60275 12.4165H15.3969C14.6207 14.3715 12.7328 15.7707 10.4998 15.7707Z"
                      fill="#A52A2D" />
                  </svg>
                  <svg width="15" height="15" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.2 18C1.595 18 1.07727 17.7799 0.6468 17.3396C0.216333 16.8994 0.000733333 16.3695 0 15.75V2.25C0 1.63125 0.2156 1.10175 0.6468 0.6615C1.078 0.22125 1.59573 0.00075 2.2 0H8.8L11 2.25H19.8C20.405 2.25 20.9231 2.4705 21.3543 2.9115C21.7855 3.3525 22.0007 3.882 22 4.5V15.75C22 16.3687 21.7848 16.8986 21.3543 17.3396C20.9238 17.7806 20.4057 18.0007 19.8 18H2.2Z"
                      fill="#A52A2D" />
                  </svg>
                  <svg width="15" height="15" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.5 10.9375C7.75408 10.9375 7.03871 10.6412 6.51126 10.1137C5.98382 9.58629 5.6875 8.87092 5.6875 8.125C5.6875 7.37908 5.98382 6.66371 6.51126 6.13626C7.03871 5.60882 7.75408 5.3125 8.5 5.3125C9.24592 5.3125 9.96129 5.60882 10.4887 6.13626C11.0162 6.66371 11.3125 7.37908 11.3125 8.125C11.3125 8.49434 11.2398 8.86007 11.0984 9.2013C10.9571 9.54253 10.7499 9.85257 10.4887 10.1137C10.2276 10.3749 9.91753 10.5821 9.5763 10.7234C9.23507 10.8648 8.86934 10.9375 8.5 10.9375ZM8.5 0.25C6.41142 0.25 4.40838 1.07969 2.93153 2.55653C1.45469 4.03338 0.625 6.03642 0.625 8.125C0.625 14.0312 8.5 22.75 8.5 22.75C8.5 22.75 16.375 14.0312 16.375 8.125C16.375 6.03642 15.5453 4.03338 14.0685 2.55653C12.5916 1.07969 10.5886 0.25 8.5 0.25Z"
                      fill="#A52A2D" />
                  </svg>
                </div>
                <button class="bg-[#454955] text-white px-8 py-2 text-sm font-semibold rounded-full ml-auto">
                  Posting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Chat Section -->
      <div
        class="bg-white w-full m-0 md:w-1/4 lg:w-[35%] h-[20%] p-6 shadow-md border-2  rounded-super-rounded mt-4 border-gray-100 ">
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
          <p class="text-white font-semibold mb-2">
            Sebelum mengirimkan laporan, pastikan Anda telah membaca ini:
          </p>
          <ul class="list-decimal list-inside text-white font-semibold  mb-2">
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
          <p class="text-white font-semibold ">
            Pelanggaran terhadap larangan ini dapat mengakibatkan:
          </p>
          <ul class="list-none list-inside text-white font-semibold mb-2 items-center">
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
          <p class="text-white font-semibold ">
            Pastikan Anda memahami dan mematuhi kebijakan penggunaan untuk menjaga keselamatan dan kenyamanan bersama.
          </p>
        </div>
        <div class="text-gray-500 text-xs text-center font-semibold mb-4">
          09.21 AM
        </div>
        <div class="bg-gray-100 p-2  rounded-3xl rounded-br-none mb-4">
          <img alt="Bus emitting smoke" class="w-full rounded-3xl mb-2" height="300" src="../assets/image/bus.png.webp" />
          <p class="text-gray-700 mb-2">
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
    </div>
  </section>
</template>

<style>
.scrollable {
  max-height: vh;
  overflow-y: auto;
  scrollbar-width: none;
}
</style>

<script>
import Sidebar from '~/components/Sidebar.vue';
import Navbar from '~/components/Navbar.vue';
</script>