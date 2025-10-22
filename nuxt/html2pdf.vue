
<script setup lang="ts">
const isExporting = ref(false);
const exportToPdf = async () => {
    const element = document.getElementById("pdf-content");
    if (!element) return;

    isExporting.value = true;

    try {
        // Dynamic import for client-side only
        const html2pdf = (await import("html2pdf.js")).default;

        // Wait for images/fonts to load properly
        await new Promise(resolve => setTimeout(resolve, 300));

        const opt = {
            margin: 0,
            // filename: "apsemo-monitoring.pdf",.
            image: { type: "jpeg", quality: 1 },
            html2canvas: {
                scale: 2,          // Always render at high resolution
                windowWidth: 1920,
            },
            jsPDF: { unit: "px", format: [1920, 1080], orientation: "portrait" },
            pagebreak: { mode: ["avoid-all", "css", "legacy"] }
        };

        await html2pdf().from(element).set(opt as any).save();
    } catch (error) {
        console.error('PDF export failed:', error);
    } finally {
        isExporting.value = false;
    }
};
</script>

<template>
    <div>    
        <Button :icon="isExporting ? 'pi pi-spin pi-spinner' : 'pi pi-print'"
            :label="isExporting ? 'Exporting...' : 'Export'" class="p-button-outlined p-button-sm"
            :title="'Print'" @click="exportToPdf" />
                                        
        <div class="relative" id="pdf-content">
         Content/Data
        </div>
    </div>
</template>

<style>
.pdf-page-break {
    page-break-after: always;
    break-after: page;
}

.pdf-page-break:last-child {
    page-break-after: avoid;
}
</style>
