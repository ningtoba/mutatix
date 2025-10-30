<script setup>
import { ref, onMounted, watch } from 'vue';
import { Designer } from '@pdfme/ui';

const props = defineProps({
    pdfFile: {
        type: [ArrayBuffer, null],
        required: true,
    },
});

const designerRef = ref(null);
let designer;

const template = {
    basePdf: props.pdfFile,
    schemas: [
        [
            {
                name: 'a',
                type: 'text',
                position: { x: 0, y: 0 },
                width: 10,
                height: 10,
            },
            {
                name: 'b',
                type: 'text',
                position: { x: 10, y: 10 },
                width: 10,
                height: 10,
            },
            {
                name: 'c',
                type: 'text',
                position: { x: 20, y: 20 },
                width: 10,
                height: 10,
            },
        ],
    ],
};

onMounted(() => {
    if (designerRef.value) {
        designer = new Designer({
            domContainer: designerRef.value,
            template,
        });
    }
});

watch(() => props.pdfFile, (newPdfFile) => {
    if (designer) {
        designer.updateTemplate({ ...template, basePdf: newPdfFile });
    }
});

</script>
<template>
    <div class="max-w-screen-xl p-4 mx-auto">
        <h1 class="text-3xl font-bold mb-4">Edit</h1>
        <p>Tools to edit PDF pages and text.</p>
        <div ref="designerRef" class="h-[80vh]"></div>
    </div>
</template>
