<script setup>
import { useDropZone } from '@vueuse/core';
import { ref } from 'vue';
import Editor from '@/components/Editor.vue';

const dropzoneRef = ref(null);
const pdfFile = ref(null);

function processFile(file) {
    if (file && file.type === 'application/pdf') {
        const reader = new FileReader();
        reader.onload = (e) => {
            pdfFile.value = e.target.result;
        };
        reader.readAsArrayBuffer(file);
    } else {
        alert('Please select a PDF file.');
    }
}

function onDrop(files) {
    if (files && files.length > 0) {
        processFile(files[0]);
    }
}

function onFileChange(event) {
    const files = event.target.files;
    if (files && files.length > 0) {
        processFile(files[0]);
    }
}

useDropZone(dropzoneRef, onDrop);
</script>

<template>
    <div class="p-4 max-w-screen-xl mx-auto">
        <div v-if="!pdfFile">
            <h2 class="flex justify-center p-10 text-2xl font-bold mb-6">
                Upload your PDF to edit
            </h2>
            <div ref="dropzoneRef" class="flex items-center justify-center w-full">
                <label for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-800 border-gray-600 hover:border-gray-500 hover:bg-gray-800/50">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to
                                upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">Only PDF files are accepted</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" accept="application/pdf"
                        @change="onFileChange" />
                </label>
            </div>
        </div>
        <Editor v-else :pdf-file="pdfFile" />
    </div>
</template>
