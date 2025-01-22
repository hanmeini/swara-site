<template>
    <section class="py-16 px-0 md:px-20 lg:px-52 font-jakarta h-screen">
        <div class="flex flex-col-reverse xl:flex-row" id="app">
            <Sidebar />
            <!-- Main Content -->
            <div class="flex-1 py-4 px-6 flex-col mb-20">
                <!-- nama akun -->
                <div class="flex flex-col mb-7">
                    <h1 class="font-bold [font-size:_clamp(1rem,10vw,2rem)]">Keynatasha Zahra</h1>
                    <p>1 post</p>
                </div>
                <div class="relative w-full mb-20 xl:mb-32">
                <!-- Elemen yang akan berubah warna -->
                <div
                :style="{ backgroundColor: selectedColor }"
                class="rounded-super-rounded h-32 lg:h-48 flex items-center justify-center"
                >
                </div>

                <!-- Tombol Ganti Warna -->
                <div class="absolute top-4 right-4 z-50 space-y-2">
                <button @click="toggleColorPicker" class="bg-white rounded-full h-10 w-10 border-2 items-center justify-center flex border-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M20.8489 8.71307C21.214 8.34787 21.5037 7.91432 21.7013 7.43718C21.8989 6.96004 22.0005 6.44865 22.0005 5.93222C22.0004 5.41579 21.8987 4.90442 21.701 4.42732C21.5033 3.95021 21.2136 3.51671 20.8484 3.15157C20.4832 2.78643 20.0496 2.4968 19.5725 2.29921C19.0954 2.10163 18.584 1.99995 18.0675 2C17.0246 2.00009 16.0243 2.41451 15.2869 3.15207L14.3999 4.03907L14.4379 4.15007C14.8752 5.40095 15.5908 6.53617 16.5309 7.47007C17.4926 8.43776 18.6672 9.16718 19.9609 9.60007L20.8489 8.71307Z" fill="black"/>
                    <path d="M14.4391 4L14.4001 4.038L14.4381 4.15C14.8754 5.40087 15.5911 6.53609 16.5311 7.47C17.4928 8.43768 18.6674 9.1671 19.9611 9.6L11.4011 18.16C10.8231 18.737 10.5341 19.026 10.2161 19.274C9.84061 19.5663 9.43458 19.8171 9.00513 20.022C8.64113 20.196 8.25413 20.325 7.47913 20.583L3.39613 21.944C3.20929 22.0066 3.0087 22.0158 2.81689 21.9707C2.62508 21.9256 2.44964 21.828 2.31026 21.6887C2.17088 21.5494 2.07308 21.374 2.02783 21.1823C1.98259 20.9905 1.9917 20.7899 2.05413 20.603L3.41613 16.519C3.67413 15.745 3.80313 15.358 3.97613 14.994C4.18213 14.5633 4.4318 14.1593 4.72513 13.782C4.97313 13.464 5.26213 13.176 5.83913 12.599L14.4391 4Z" fill="black"/>
                    </svg>
                </button>

                <!-- Color Picker Container -->
                <div
                    v-if="showColorPicker"
                    class="absolute mt-2 p-4 bg-white rounded shadow-lg z-50"
                    style="top: 100%; right: 0; pointer-events: auto;"
                >
                    <label for="color-picker" class="block text-[0.7rem] md:text-sm font-medium text-gray-700">Pilih Warna</label>
                    <input
                    id="color-picker"
                    type="color"
                    class="mt-2 p-0 w-12 h-12 border-0 cursor-pointer"
                    v-model="selectedColor"
                    />

                    <!-- Tombol Close -->
                    <button @click="toggleColorPicker" class="absolute top-0 right-0 bg-[#A52A2D] text-white h-6 w-5 items-center justify-center">
                    x
                    </button>
                </div>
                </div>
                <!-- Profil -->
                <div class="absolute bottom-0 left-4 transform translate-y-1/2">
                <div class="relative">
                    <img
                    alt="Profile image"
                    class="rounded-full w-24 h-24 border-4 border-white"
                    src="/assets/image/chaeyeon.png"
                    />
                    <button class="absolute bottom-0 right-0 bg-red-500 text-white rounded-full p-1">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 74 58"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M37 42.125C42.799 42.125 47.5 37.424 47.5 31.625C47.5 25.826 42.799 21.125 37 21.125C31.201 21.125 26.5 25.826 26.5 31.625C26.5 37.424 31.201 42.125 37 42.125Z"
                        fill="white"
                        />
                        <path
                        d="M65.875 10.625H56.1953C55.7031 10.625 55.0928 10.3067 54.617 9.80469L50.3613 3.08797C50.294 2.98136 50.2188 2.87991 50.1365 2.78445C48.6665 1.07 46.6797 0.125 44.5469 0.125H29.4531C27.3203 0.125 25.3335 1.07 23.8635 2.78445C23.7812 2.87991 23.706 2.98136 23.6388 3.08797L19.383 9.81453C19.0187 10.2116 18.5069 10.6348 17.9688 10.6348V9.32234C17.9688 8.62615 17.6922 7.95847 17.1999 7.46619C16.7076 6.97391 16.0399 6.69734 15.3438 6.69734H11.4062C10.7101 6.69734 10.0424 6.97391 9.5501 7.46619C9.05781 7.95847 8.78125 8.62615 8.78125 9.32234V10.6348H8.125C6.03709 10.637 4.03531 11.4674 2.55893 12.9438C1.08255 14.4202 0.252172 16.4219 0.25 18.5098V50C0.252172 52.0879 1.08255 54.0897 2.55893 55.5661C4.03531 57.0424 6.03709 57.8728 8.125 57.875H65.875C67.9629 57.8728 69.9647 57.0424 71.4411 55.5661C72.9174 54.0897 73.7478 52.0879 73.75 50V18.5C73.7478 16.4121 72.9174 14.4103 71.4411 12.9339C69.9647 11.4576 67.9629 10.6272 65.875 10.625ZM37 47.375C33.8849 47.375 30.8398 46.4513 28.2498 44.7206C25.6597 42.99 23.641 40.5302 22.4489 37.6523C21.2568 34.7743 20.9449 31.6075 21.5526 28.5523C22.1604 25.4971 23.6604 22.6907 25.8631 20.4881C28.0657 18.2854 30.8721 16.7854 33.9273 16.1776C36.9825 15.5699 40.1493 15.8818 43.0273 17.0739C45.9052 18.266 48.365 20.2847 50.0956 22.8748C51.8263 25.4648 52.75 28.5099 52.75 31.625C52.7452 35.8007 51.0843 39.804 48.1317 42.7567C45.179 45.7093 41.1757 47.3702 37 47.375Z"
                        fill="white"
                        />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
                <!-- post -->
                <div
                    class="p-1 shadow-lg rounded-super-rounded bg-gradient-to-br from-[#A52A2D] via-white to-[#A52A2D] w-full">
                    <div class="bg-white p-4 xl:p-10 rounded-[calc(3rem-1.2rem)] w-full relative">
                        <button
                            class="absolute top-4 right-4 bg-white border-2 border-[#A52A2D] rounded-full px-4 py-2 font-semibold text-[#a52a2d] text-xs xl:text-base">Edit
                            Profile</button>
                        <div class="flex flex-col mb-7">
                            <h1 class="font-bold [font-size:_clamp(1rem,4vw,2rem)]">Keynatasha Zahra</h1>
                            <p class="mb-3 [font-size:_clamp(0.2rem,4vw,0.9rem)]">@secret23</p>
                            <div class="flex flex-row items-center gap-3 mb-2">
                                <svg width="14" height="20" viewBox="0 0 14 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z"
                                        fill="#A52A2D" fill-opacity="0.7" />
                                </svg>
                                <p class="text-[#A52A2D] [font-size:_clamp(0.2rem,3vw,0.9rem)]">Semarang, Jawa Tengah</p>
                            </div>
                            <div class="flex flex-row items-center gap-3">
                                <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.75 21.75V4.83333C21.75 3.50054 20.6661 2.41667 19.3333 2.41667H16.9167V0H14.5V2.41667H7.25V0H4.83333V2.41667H2.41667C1.08387 2.41667 0 3.50054 0 4.83333V21.75C0 23.0828 1.08387 24.1667 2.41667 24.1667H19.3333C20.6661 24.1667 21.75 23.0828 21.75 21.75ZM7.25 19.3333H4.83333V16.9167H7.25V19.3333ZM7.25 14.5H4.83333V12.0833H7.25V14.5ZM12.0833 19.3333H9.66667V16.9167H12.0833V19.3333ZM12.0833 14.5H9.66667V12.0833H12.0833V14.5ZM16.9167 19.3333H14.5V16.9167H16.9167V19.3333ZM16.9167 14.5H14.5V12.0833H16.9167V14.5ZM19.3333 8.45833H2.41667V6.04167H19.3333V8.45833Z" fill="#A52A2D" fill-opacity="0.8"/>
                                </svg>
                                <p class="text-[#A52A2D] [font-size:_clamp(0.2rem,3vw,0.9rem)]">Bergabung pada Januari 2025</p>
                            </div>  
                        </div>
                        <div class="flex items-center mb-2">
                            <img alt="User profile picture" class="rounded-full mr-2" height="40"
                                src="../assets/image/mbak.png" width="40" />
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
                                Mohon perhatian untuk armada BRT yang beroperasi. Kami mendapati bahwa salah satu bus
                                mengeluarkan asap
                                tebal saat beroperasi. Kondisi ini tidak hanya mengganggu kenyamanan penumpang dan
                                pengguna jalan lain,
                                tetapi juga mencemari lingkungan dan berpotensi merusak kesehatan. Kami berharap pihak
                                pengelola segera
                                melakukan perbaikan atau pengecekan rutin agar armada yang beroperasi tetap aman,
                                nyaman, dan ramah
                                lingkungan.
                            </p>
                            <img alt="Bus emitting smoke" class="w-[70%] rounded-lg xl:rounded-super-rounded mb-2 mt-3 "
                                src="./../assets/image/bus.png.webp" />
                        </div>
                        <div class="flex items-center text-gray-500 text-sm gap-2 ml-12">
                            <svg width="15" height="15" viewBox="0 0 22 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22 9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7H13.68L14.64 2.43C14.66 2.33 14.67 2.22 14.67 2.11C14.67 1.7 14.5 1.32 14.23 1.05L13.17 0L6.59 6.58C6.22 6.95 6 7.45 6 8V18C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20H17C17.83 20 18.54 19.5 18.84 18.78L21.86 11.73C21.95 11.5 22 11.26 22 11V9ZM0 20H4V8H0V20Z"
                                    fill="#A52A2D" />
                            </svg>
                            <span class=" text-[#a52a2d] font-semibold mr-1">
                                54
                            </span>
                            <svg width="15" height="15" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M10 -0.000953078C4.477 -0.000953078 1.65574e-06 4.47605 1.65574e-06 9.99905C-0.000846144 11.4724 0.323896 12.9278 0.951002 14.261L0.0210016 18.798C-0.0121094 18.96 -0.00453626 19.1277 0.0430431 19.2861C0.0906225 19.4444 0.176723 19.5885 0.293638 19.7054C0.410553 19.8223 0.554634 19.9084 0.712983 19.956C0.871332 20.0036 1.03901 20.0112 1.201 19.978L5.738 19.048C7.032 19.658 8.478 19.998 10 19.998C15.523 19.998 20 15.522 20 9.99805C20 4.47605 15.523 -0.00195312 10 -0.00195312"
                                    fill="#A52A2D" />
                            </svg>
                            <span class="text-[#a52a2d] font-semibold mr-1">
                                32
                            </span>
                            <svg width="16" height="15" viewBox="0 0 24 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 9.33333L14.6667 0V5.33333C5.33333 6.66667 1.33333 13.3333 0 20C3.33333 15.3333 8 13.2 14.6667 13.2V18.6667L24 9.33333Z"
                                    fill="#A52A2D" />
                            </svg>
                            <span class="text-[#a52a2d] font-semibold">
                                19
                            </span>
                        </div>
                        <div class="mt-4 flex border-2 border-gray-100 shadow-sm rounded-3xl p-3">
                            <img alt="User profile picture" class="rounded-full mb-4 w-11 h-11"
                                src="../assets/image/chaeyeon.png" />
                            <div class="ml-4 flex-grow">
                                <input
                                    class="w-[100%] xl:w-full [font-size:_clamp(0.2rem,3vw,1rem)] border-none rounded pb-2 focus:outline-none focus:ring-0"
                                    placeholder="Ketikkan komentar..." type="text" />
                                <div class="justify-between flex items-center mt-3">
                                    <div class="flex gap-2">
                                        <svg width="15" height="15" viewBox="0 0 18 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.5 4.5C12.5 2.567 10.933 1 9 1C7.067 1 5.5 2.567 5.5 4.5V11C5.5 12.933 7.067 14.5 9 14.5C10.933 14.5 12.5 12.933 12.5 11V4.5Z"
                                                fill="#A52A2D" stroke="#A52A2D" stroke-width="2"
                                                stroke-linejoin="round" />
                                            <path
                                                d="M1.5 10.5C1.5 14.642 4.858 18 9 18M9 18C13.142 18 16.5 14.642 16.5 10.5M9 18V21"
                                                stroke="#A52A2D" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        <svg width="15" height="15" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 2.85714C0 1.28125 1.12109 0 2.5 0H17.5C18.8789 0 20 1.28125 20 2.85714V17.1429C20 18.7188 18.8789 20 17.5 20H2.5C1.12109 20 0 18.7188 0 17.1429V2.85714ZM12.6484 7.61161C12.4727 7.31696 12.1836 7.14286 11.875 7.14286C11.5664 7.14286 11.2734 7.31696 11.1016 7.61161L7.70312 13.308L6.66797 11.8304C6.48828 11.5759 6.21875 11.4286 5.9375 11.4286C5.65625 11.4286 5.38281 11.5759 5.20703 11.8304L2.70703 15.4018C2.48047 15.7232 2.4375 16.1652 2.59375 16.5357C2.75 16.9062 3.07812 17.1429 3.4375 17.1429H16.5625C16.9102 17.1429 17.2305 16.9241 17.3906 16.5714C17.5508 16.2188 17.5312 15.7946 17.3359 15.4688L12.6484 7.61161ZM4.375 7.14286C4.87228 7.14286 5.34919 6.91709 5.70083 6.51523C6.05246 6.11337 6.25 5.56832 6.25 5C6.25 4.43168 6.05246 3.88664 5.70083 3.48477C5.34919 3.08291 4.87228 2.85714 4.375 2.85714C3.87772 2.85714 3.40081 3.08291 3.04917 3.48477C2.69754 3.88664 2.5 4.43168 2.5 5C2.5 5.56832 2.69754 6.11337 3.04917 6.51523C3.40081 6.91709 3.87772 7.14286 4.375 7.14286Z"
                                                fill="#A52A2D" />
                                        </svg>
                                        <svg width="16" height="16" viewBox="0 0 21 21" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.4998 0.916504C5.20025 0.916504 0.916504 5.229 0.916504 10.4998C0.916504 13.0415 1.92617 15.4791 3.7234 17.2763C4.61329 18.1662 5.66975 18.8721 6.83245 19.3537C7.99516 19.8353 9.24134 20.0832 10.4998 20.0832C13.0415 20.0832 15.4791 19.0735 17.2763 17.2763C19.0735 15.4791 20.0832 13.0415 20.0832 10.4998C20.0832 9.24134 19.8353 7.99516 19.3537 6.83245C18.8721 5.66975 18.1662 4.61329 17.2763 3.7234C16.3864 2.8335 15.3299 2.1276 14.1672 1.64599C13.0045 1.16438 11.7583 0.916504 10.4998 0.916504ZM13.854 6.6665C14.2353 6.6665 14.6009 6.81795 14.8705 7.08754C15.1401 7.35712 15.2915 7.72276 15.2915 8.104C15.2915 8.48525 15.1401 8.85089 14.8705 9.12047C14.6009 9.39005 14.2353 9.5415 13.854 9.5415C13.4728 9.5415 13.1071 9.39005 12.8375 9.12047C12.568 8.85089 12.4165 8.48525 12.4165 8.104C12.4165 7.72276 12.568 7.35712 12.8375 7.08754C13.1071 6.81795 13.4728 6.6665 13.854 6.6665ZM7.14567 6.6665C7.52692 6.6665 7.89255 6.81795 8.16214 7.08754C8.43172 7.35712 8.58317 7.72276 8.58317 8.104C8.58317 8.48525 8.43172 8.85089 8.16214 9.12047C7.89255 9.39005 7.52692 9.5415 7.14567 9.5415C6.76442 9.5415 6.39879 9.39005 6.1292 9.12047C5.85962 8.85089 5.70817 8.48525 5.70817 8.104C5.70817 7.72276 5.85962 7.35712 6.1292 7.08754C6.39879 6.81795 6.76442 6.6665 7.14567 6.6665ZM10.4998 15.7707C8.26692 15.7707 6.36942 14.3715 5.60275 12.4165H15.3969C14.6207 14.3715 12.7328 15.7707 10.4998 15.7707Z"
                                                fill="#A52A2D" />
                                        </svg>
                                        <svg width="15" height="15" viewBox="0 0 22 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.2 18C1.595 18 1.07727 17.7799 0.6468 17.3396C0.216333 16.8994 0.000733333 16.3695 0 15.75V2.25C0 1.63125 0.2156 1.10175 0.6468 0.6615C1.078 0.22125 1.59573 0.00075 2.2 0H8.8L11 2.25H19.8C20.405 2.25 20.9231 2.4705 21.3543 2.9115C21.7855 3.3525 22.0007 3.882 22 4.5V15.75C22 16.3687 21.7848 16.8986 21.3543 17.3396C20.9238 17.7806 20.4057 18.0007 19.8 18H2.2Z"
                                                fill="#A52A2D" />
                                        </svg>
                                        <svg width="15" height="15" viewBox="0 0 17 23" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.5 10.9375C7.75408 10.9375 7.03871 10.6412 6.51126 10.1137C5.98382 9.58629 5.6875 8.87092 5.6875 8.125C5.6875 7.37908 5.98382 6.66371 6.51126 6.13626C7.03871 5.60882 7.75408 5.3125 8.5 5.3125C9.24592 5.3125 9.96129 5.60882 10.4887 6.13626C11.0162 6.66371 11.3125 7.37908 11.3125 8.125C11.3125 8.49434 11.2398 8.86007 11.0984 9.2013C10.9571 9.54253 10.7499 9.85257 10.4887 10.1137C10.2276 10.3749 9.91753 10.5821 9.5763 10.7234C9.23507 10.8648 8.86934 10.9375 8.5 10.9375ZM8.5 0.25C6.41142 0.25 4.40838 1.07969 2.93153 2.55653C1.45469 4.03338 0.625 6.03642 0.625 8.125C0.625 14.0312 8.5 22.75 8.5 22.75C8.5 22.75 16.375 14.0312 16.375 8.125C16.375 6.03642 15.5453 4.03338 14.0685 2.55653C12.5916 1.07969 10.5886 0.25 8.5 0.25Z"
                                                fill="#A52A2D" />
                                        </svg>
                                    </div>
                                    <button
                                        class="bg-[#454955] text-white px-4 py-1 xl:px-8 xl:py-2 [font-size:_clamp(0.1rem,2vw,1rem)] font-semibold rounded-full ml-auto hover:bg-gray-600 transition-all duration-300">
                                        Posting
                                    </button>
                                </div>
                            </div>
                        </div>
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
import Navbar from '~/components/Navbar.vue';
import Sidebar from '~/components/Sidebar.vue';
export default {
  data() {
    return {
      showColorPicker: false,
      selectedColor: "#1e3a8a", 
    };
  },
  methods: {
    toggleColorPicker() {
      this.showColorPicker = !this.showColorPicker; 
    },
  },
};
</script>