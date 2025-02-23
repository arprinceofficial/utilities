<script setup>
const props = defineProps({ isOpenConModal: Boolean });
const emit = defineEmits(['confirm', 'update:isOpenConModal']);

const visible = ref(props.isOpenConModal);

watch(() => props.isOpenConModal, (newVal) => {
    visible.value = newVal;
});

const confirmDelete = () => {
    emit('confirm');
    emit('update:isOpenConModal', false);
};
</script>

<template>
    <Dialog v-model:visible="visible" modal :style="{ width: '25rem' }" :closable="false">
        <div class="flex justify-center">
            <NuxtImg
                src="/assets/images/warning.gif"
                class="h-[100px]"
                format="gif"
                :modifiers="{ quality: 20 }"
            />
        </div>
        <div class="mb-6 mt-2 text-center">
            <h3 class="font-bold text-lg text-center mt-2">Are you sure you want to proceed?</h3>
        </div>
        <div class="flex justify-end gap-2">
            <Button type="button" label="Cancel" severity="danger" @click="emit('update:isOpenConModal', false)"></Button>
            <Button type="button" label="Yes" @click="confirmDelete"></Button>
        </div>
    </Dialog>
</template>
