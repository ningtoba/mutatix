<script setup>
import { onMounted } from 'vue';
import { initDropdowns } from 'flowbite';
import { RouterLink } from 'vue-router';

onMounted(() => {
  initDropdowns();
});
</script>

<template>

  <nav class="bg-gray-800">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Logo</span>
      </RouterLink>
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
          <li class="md:hover:text-blue-500 hover:bg-gray-700 rounded-sm">
            <RouterLink to="/edit" class="block py-2 px-3 text-white md:border-0" aria-current="page">Edit
            </RouterLink>
          </li>
          <li class="md:hover:text-blue-500 hover:bg-gray-700 rounded-sm">
            <RouterLink to="/convert" class="block py-2 px-3 text-white md:border-0">
              Convert
            </RouterLink>
          </li>
          <li class="md:hover:text-blue-500 hover:bg-gray-700 rounded-sm">
            <RouterLink to="/split" class="block py-2 px-3 text-white md:border-0">Split
            </RouterLink>
          </li>
          <li class="md:hover:text-blue-500 hover:bg-gray-700 rounded-sm">
            <RouterLink to="/sign" class="block py-2 px-3 text-white md:border-0">Sign
            </RouterLink>
          </li>
          <li class="md:hover:text-blue-500 hover:bg-gray-700 rounded-sm">
            <RouterLink to="/merge" class="block py-2 px-3 text-white md:border-0">Merge
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>