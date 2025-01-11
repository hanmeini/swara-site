<template>
    <Navbar />
    <section class="flex flex-col items-center p-4 md:p-10">
        <!-- Search + Navigator -->
        <div class="w-full flex justify-center py-4">
            <form class="w-[90%] md:w-[80%]">
                <label for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-[#A52A2D] dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search"
                        class="block w-full p-3 pl-10 text-sm text-gray-900 border border-[#A52A2D] rounded-full bg-gray-50 focus:ring-[#A52A2D] focus:border-[#A52A2D]"
                        placeholder="Search" required />
                    <button type="submit"
                        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-[#A52A2D] hover:bg-[#711a1c] focus:ring-4 focus:outline-none focus:ring-[#fb5c5fd0] font-medium rounded-full text-sm px-4 py-2">Search</button>
                </div>
            </form>
        </div>

        <!-- Sidebar + Content -->
        <div class="flex flex-col md:flex-row" id="app">
        <Sidebar/>
        <div class="flex w-full mt-6">
            <!-- Content -->
            <div class="flex-1 p-4 md:mt-0 mt-4">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="grid gap-4">
                        <div class="text-center">
                            <p class="font-medium text-sm md:text-lg">13 January 2025</p>
                            <h1 class="font-bold text-2xl md:text-4xl">Selamat Pagi</h1>
                            <p class="font-semibold text-xl md:text-3xl">20.12</p>
                        </div>
                        <div
                            class="rounded-super-rounded overflow-hidden shadow group flex flex-col justify-between bg-gray-100 h-60 lg:w-full lg:h-full mb-6">
                            <div
                                class="w-full h-full bg-[url('/assets/image/berita1.png')] bg-center bg-cover flex items-start">
                                <div class="w-full h-full flex flex-col justify-end pb-4 items-start text-white px-6">
                                    <div>
                                        <p class="mt-2 text-base">Laporkan segala bentuk ketidakadilan dan bantu
                                            tegakkan hak masyarakat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="rounded-super-rounded overflow-hidden shadow group flex flex-col justify-between bg-gray-100 h-60 lg:w-full lg:h-full mb-6">
                            <div
                                class="w-full h-full bg-[url('/assets/image/berita4.png')] bg-center bg-cover flex items-start">
                                <div class="w-full h-full flex flex-col justify-end pb-4 items-start text-white px-6">
                                    <div>
                                        <p class="mt-2 text-base">Laporkan segala bentuk ketidakadilan dan bantu
                                            tegakkan hak masyarakat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div
                            class="rounded-super-rounded overflow-hidden shadow group flex flex-col justify-between bg-gray-100 h-60 lg:w-full lg:h-full mb-6">
                            <div
                                class="w-full h-full bg-[url('/assets/image/berita2.png')] bg-center bg-cover flex items-start">
                                <div class="w-full h-full flex flex-col justify-end pb-4 items-start text-white px-6">
                                    <div>
                                        <p class="mt-2 text-base">Laporkan segala bentuk ketidakadilan dan bantu
                                            tegakkan hak masyarakat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="rounded-super-rounded overflow-hidden shadow group flex flex-col justify-between bg-gray-100 h-60 lg:w-full lg:h-full mb-6">
                            <div
                                class="w-full h-full bg-[url('/assets/image/berita5.png')] bg-center bg-cover flex items-start">
                                <div class="w-full h-full flex flex-col justify-end pb-4 items-start text-white px-6">
                                    <div>
                                        <p class="mt-2 text-base">Laporkan segala bentuk ketidakadilan dan bantu
                                            tegakkan hak masyarakat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div
                            class="rounded-super-rounded overflow-hidden shadow group flex flex-col justify-between bg-gray-100">
                            <div
                                class="w-full h-full bg-[url('/assets/image/berita3.png')] bg-center bg-cover flex items-start">
                                <div class="w-full h-full flex flex-col justify-end pb-4 items-start text-white px-6">
                                    <div>
                                        <p class="mt-2 text-base">Laporkan segala bentuk ketidakadilan dan bantu
                                            tegakkan hak masyarakat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="rounded-super-rounded overflow-hidden shadow group flex flex-col justify-between bg-gray-100">
                            <div
                                class="w-full h-full bg-[url('/assets/image/berita6.png')] bg-center bg-cover flex items-start">
                                <div class="w-full h-full flex flex-col justify-end pb-4 items-start text-white px-6">
                                    <div>
                                        <p class="mt-2 text-base">Laporkan segala bentuk ketidakadilan dan bantu
                                            tegakkan hak masyarakat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="rounded-super-rounded overflow-hidden shadow group flex flex-col justify-between bg-gray-100">
                            <div
                                class="w-full h-full bg-[url('/assets/image/berita7.png')] bg-center bg-cover flex items-start">
                                <div class="w-full h-full flex flex-col justify-end pb-4 items-start text-white px-6">
                                    <div>
                                        <p class="mt-2 text-base">Laporkan segala bentuk ketidakadilan dan bantu
                                            tegakkan hak masyarakat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div
                            class="rounded-super-rounded overflow-hidden shadow group flex flex-col justify-between bg-gray-100 h-auto max-w-full">
                            <div
                                class="w-full h-full bg-[url('/assets/image/berita8.png')] bg-center bg-cover flex items-start">
                                <div class="w-full h-full flex flex-col justify-end pb-4 items-start text-white px-6">
                                    <div>
                                        <p class="mt-2 text-base">Laporkan segala bentuk ketidakadilan dan bantu
                                            tegakkan hak masyarakat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="rounded-super-rounded overflow-hidden shadow group flex flex-col justify-between bg-gray-100 h-auto max-w-full">
                            <div
                                class="max-w-full h-full bg-[url('/assets/image/berita9.png')] bg-center bg-cover flex items-start">
                                <div class="w-full h-full flex flex-col justify-end pb-4 items-start text-white px-6">
                                    <div>
                                        <p class="mt-2 text-base">Laporkan segala bentuk ketidakadilan dan bantu
                                            tegakkan hak masyarakat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>
<script>
import Sidebar from '~/components/Sidebar.vue';
import Navbar from '~/components/Navbar.vue';
</script>