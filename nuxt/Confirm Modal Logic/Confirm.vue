<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-[9999]" @close="open = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                            <div>
                                <div
                                    class="mx-auto flex h-14 w-14 items-center justify-center rounded-full ">
                                    <svg class="w-20 h-20 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div class="mt-3 text-center sm:mt-5">
                                    <DialogTitle as="h3" class="text-lg font-normal text-gray-500 mt-5 mb-6">Are you sure you want to delete?</DialogTitle>
                                </div>
                            </div>
                            <div class="mt-5 sm:mt-6 flex justify-end">
                                <button type="button" @click="confirm_delete" v-if="!is_loading"
                                    class="text-green-900 bg-white hover:bg-green-100 focus:ring-4 focus:ring-cyan-200 border border-green-200 font-medium inline-flex items-center rounded-lg text-base px-5 py-2 mr-2 text-center">
                                    Yes
                                </button>
                                <button type="button" v-else
                                    class="text-green-900 bg-white hover:bg-green-100 focus:ring-4 focus:ring-cyan-200 border border-green-200 font-medium inline-flex items-center rounded-lg text-base px-5 py-2 mr-2 text-center"
                                    disabled>
                                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-green-500"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V2.5"></path>
                                    </svg>
                                    Loading
                                </button>
                                <button type="button" @click="close_popup"
                                    class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-5 py-2 text-center mr-2">
                                    No
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const props = defineProps({
    msg: String,
    open: Boolean,
    is_loading: Boolean
})

const emit = defineEmits(['closeModal', 'confirmDelete'])

const close_popup = () => {
    emit('closeModal')
}
const confirm_delete = () => {
    emit('confirmDelete')
}
</script>