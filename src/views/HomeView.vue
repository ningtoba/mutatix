<script setup>
import { ref } from 'vue';
import HomeItems from '@/components/HomeItems.vue';

const items = ref([
  { logo: 'https://via.placeholder.com/64', name: 'Edit', description: 'Edit PDF pages and text quickly.' },
  { logo: 'https://via.placeholder.com/64', name: 'Convert', description: 'Convert PDFs to other formats.' },
  { logo: 'https://via.placeholder.com/64', name: 'Split', description: 'Split PDFs into separate files.' },
  { logo: 'https://via.placeholder.com/64', name: 'Sign', description: 'Sign documents electronically.' },
  { logo: 'https://via.placeholder.com/64', name: 'Merge', description: 'Merge multiple PDFs into one file.' },
]);
</script>

<template>
  <div class="max-w-screen-xl p-4 flex flex-col gap-20 mx-auto">
    <div class="flex flex-wrap items-center justify-center mx-auto mt-40">
      <h1 class="font-bold text-7 text-6xl text-center">
        All your PDF tools in one place
      </h1>
    </div>

    <div class="grid grid-cols-4 gap-4">
      <HomeItems v-for="item in items" :key="item.name" :logo="item.logo" :name="item.name"
        :description="item.description" />
    </div>
  </div>
</template>
