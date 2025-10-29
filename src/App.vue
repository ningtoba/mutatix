<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="text-white bg-gray-900 min-h-screen">
    <Navbar />
    <RouterView />
  </div>
</template>