<script setup>
import { onMounted } from 'vue';
import { initDropdowns } from 'flowbite';

onMounted(() => {
  initDropdowns();
});
</script>

<template>

  <nav class="bg-gray-800">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Logo</span>
      </a>
      <button data-collapse-toggle="navbar-dropdown" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
        aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul
          class="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 border border-gray-700 md:border-0 bg-gray-800">
          <li>
            <a href="#" class="block py-2 px-3 text-white bg-blue-600 rounded-sm md:bg-transparent md:text-blue-500 "
              aria-current="page">Edit</a>
          </li>
          <li class="relative group pb-2">
            <div
              class="flex items-center justify-between w-full py-2 px-3 text-white rounded md:border-0 md:w-auto border-gray-700 group-hover:bg-gray-700 focus:text-white md:group-hover:text-blue-500"
              aria-haspopup="true" aria-expanded="false">
              Convert
              <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg>
            </div>

            <!-- Dropdown menu -->
            <div id="dropdownNavbar"
              class="absolute left-0 top-full z-10 hidden group-hover:block font-normal bg-gray-700 divide-y divide-gray-600 rounded-lg shadow-sm w-44 pointer-events-auto">
              <ul class="py-2 text-sm text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-600 hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-600 hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-600 hover:text-white">Earnings</a>
                </li>
              </ul>
              <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white">Sign
                  out</a>
              </div>
            </div>
          </li>
          <li>
            <a href="#"
              class="block py-2 px-3 text-white rounded-sm md:border-0  md:hover:text-blue-500 hover:bg-gray-700">Split</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 px-3 text-white rounded-sm md:border-0  md:hover:text-blue-500 hover:bg-gray-700">Sign</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 px-3 text-white rounded-sm md:border-0  md:hover:text-blue-500 hover:bg-gray-700">Merge</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>