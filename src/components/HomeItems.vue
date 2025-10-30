<script setup>
import { computed } from 'vue';

const props = defineProps({
    logo: { type: String, required: false, default: '' },
    name: { type: String, required: true },
    description: { type: String, required: false, default: '' },
});

const routePath = computed(() => `/${props.name.toLowerCase()}`);
</script>

<template>
    <RouterLink :to="routePath"
        class="block border-4 border-gray-400 p-10 rounded-3xl hover:border-blue-400 hover:bg-gray-800/50 transition-colors duration-300 hover:cursor-pointer no-underline">
        <div class="flex flex-col items-start gap-3">
            <div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded">
                <img v-if="logo" :src="logo" alt="logo" class="w-12 h-12 object-cover" />
                <span v-else class="text-sm text-gray-400">Logo</span>
            </div>
            <h2 class="font-semibold text-lg">{{ name }}</h2>
            <p class="text-sm text-gray-300">{{ description }}</p>
        </div>
    </RouterLink>
</template>