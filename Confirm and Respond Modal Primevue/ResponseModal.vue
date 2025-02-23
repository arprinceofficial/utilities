<script setup>
const props = defineProps({
    response_modal: {
        type: Object,
    }
});

const visible = ref(false);
watch(() => props.response_modal, (newVal, oldVal) => {
    if (newVal.status == true) {
        visible.value = true;
        setTimeout(() => {
            closeModal();
        }, 3000);
    } else {
        visible.value = true;
        setTimeout(() => {
            closeModal();
        }, 3000);
    }
});

const closeModal = () => {
    visible.value = false;
}

const messageLogs = computed(() => {
    let msgs = [];
    if (props.response_modal.error) {
        for (const [key, value] of Object.entries(props.response_modal.error)) {
            msgs = [...msgs, ...value];
        }
    }
    return msgs;
});
</script>
<template>
    <div>
        <Dialog v-model:visible="visible" modal :closable="false" :style="{ width: '25rem' }">
            <div class="flex flex-wrap pr-3 pl-3">
                <div class="flex items-start w-full justify-center items-center">
                    <div v-if="response_modal.status == null" class="flex justify-center items-center h-40">
                        <div class="responsive loader"></div>
                    </div>
                    <div v-else class="text-left font-medium text-gray-900 whitespace-nowrap dark:text-white w-full">
                        <div class="success-icon flex justify-center items-center">
                            <div class="demo1">
                                <div v-if="response_modal.status == true"
                                    class="flex flex-col items-center justify-center">
                                    <div class="ui-success">
                                        <svg viewBox="0 0 87 87" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none"
                                                fill-rule="evenodd">
                                                <g id="Group-3" transform="translate(2.000000, 2.000000)">
                                                    <circle id="Oval-2" stroke="rgba(165, 220, 134, 0.2)"
                                                        stroke-width="4" cx="41.5" cy="41.5" r="41.5">
                                                    </circle>
                                                    <circle class="ui-success-circle" id="Oval-2" stroke="#A5DC86"
                                                        stroke-width="4" cx="41.5" cy="41.5" r="41.5"></circle>
                                                    <polyline class="ui-success-path" id="Path-2" stroke="#A5DC86"
                                                        stroke-width="4"
                                                        points="19 38.8036813 31.1020744 54.8046875 63.299221 28">
                                                    </polyline>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <p
                                        class="text-green-700 text-lg font-medium text-gray-900 dark:text-white text-wrap pb-2">
                                        {{ response_modal?.message }}
                                    </p>
                                </div>
                                <div v-if="response_modal.status == false"
                                    class="flex flex-col items-center justify-center">
                                    <div class="ui-error">
                                        <svg viewBox="0 0 87 87" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none"
                                                fill-rule="evenodd">
                                                <g id="Group-2" transform="translate(2.000000, 2.000000)">
                                                    <circle id="Oval-2" stroke="rgba(252, 191, 191, .5)"
                                                        stroke-width="4" cx="41.5" cy="41.5" r="41.5">
                                                    </circle>
                                                    <circle class="ui-error-circle" stroke="#F74444" stroke-width="4"
                                                        cx="41.5" cy="41.5" r="41.5">
                                                    </circle>
                                                    <path class="ui-error-line1"
                                                        d="M22.244224,22 L60.4279902,60.1837662" id="Line"
                                                        stroke="#F74444" stroke-width="3" stroke-linecap="square">
                                                    </path>
                                                    <path class="ui-error-line2" d="M60.755776,21 L23.244224,59.8443492"
                                                        id="Line" stroke="#F74444" stroke-width="3"
                                                        stroke-linecap="square">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <p
                                        class="text-red-700 text-lg font-medium text-gray-900 dark:text-white text-wrap pb-2">
                                        {{ response_modal?.message }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div v-if="messageLogs" class="text-start">
                            <p v-for="msg in messageLogs"
                                class="text-red-700 text-lg font-medium text-gray-900 dark:text-white text-wrap pb-2">
                                {{ msg }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    </div>
</template>

<style scope>
.responsive.fwb-modal {
    z-index: 100;
    position: absolute;
}

.fwb-modal .max-w-2xl.relative {
    display: flex;
    align-items: center;
    justify-content: center;
}

.fwb-modal .max-w-2xl.relative .relative {
    width: 70%;
}

.fwb-modal.responsive .bg-gray-900 {
    z-index: 50;
}

/* Loading loader start */
.responsive.loader {
    width: 50px;
    aspect-ratio: 1;
    display: grid;
}

.responsive.loader::before,
.responsive.loader::after {
    content: "";
    grid-area: 1/1;
    --c: no-repeat radial-gradient(farthest-side, #25b09b 92%, #0000);
    background:
        var(--c) 50% 0,
        var(--c) 50% 100%,
        var(--c) 100% 50%,
        var(--c) 0 50%;
    background-size: 12px 12px;
    animation: l12 1s infinite;
}

.responsive.loader::before {
    margin: 4px;
    filter: hue-rotate(45deg);
    background-size: 8px 8px;
    animation-timing-function: linear
}

@keyframes l12 {
    100% {
        transform: rotate(.5turn)
    }
}

/* Loading loader End */

/* Success and Error loader Start */
.demo1 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.ui-success,
.ui-error {
    width: 100px;
    height: 100px;
    margin: 15px;
}

.ui-success {
    &-circle {
        stroke-dasharray: 260.75219024795285px, 260.75219024795285px;
        stroke-dashoffset: 260.75219024795285px;
        transform-origin: center center;
        stroke-linecap: round;
        animation: ani-success-circle 1s ease-in both;
    }

    &-path {
        stroke-dasharray: 60px 64px;
        stroke-dashoffset: 62px;
        stroke-linecap: round;
        animation: ani-success-path 0.4s 1s ease-in both;
    }
}

@keyframes ani-success-circle {
    to {
        stroke-dashoffset: 782.2565707438586px;
    }
}

@keyframes ani-success-path {
    0% {
        stroke-dashoffset: 62px;
    }

    65% {
        stroke-dashoffset: -5px;
    }

    84% {
        stroke-dashoffset: 4px;
    }

    100% {
        stroke-dashoffset: -2px;
    }
}

.ui-error {
    &-circle {
        stroke-dasharray: 260.75219024795285px, 260.75219024795285px;
        stroke-dashoffset: 260.75219024795285px;
        animation: ani-error-circle 1.2s linear;
    }

    &-line1 {
        stroke-dasharray: 54px 55px;
        stroke-dashoffset: 55px;
        stroke-linecap: round;
        animation: ani-error-line 0.15s 1.2s linear both;
    }

    &-line2 {
        stroke-dasharray: 54px 55px;
        stroke-dashoffset: 55px;
        stroke-linecap: round;
        animation: ani-error-line 0.2s 0.9s linear both;
    }
}

@keyframes ani-error-line {
    to {
        stroke-dashoffset: 0;
    }
}

@keyframes ani-error-circle {
    0% {
        stroke-dasharray: 0, 260.75219024795285px;
        stroke-dashoffset: 0;
    }

    35% {
        stroke-dasharray: 120px, 120px;
        stroke-dashoffset: -120px;
    }

    70% {
        stroke-dasharray: 0, 260.75219024795285px;
        stroke-dashoffset: -260.75219024795285px;
    }

    100% {
        stroke-dasharray: 260.75219024795285px, 0;
        stroke-dashoffset: -260.75219024795285px;
    }
}

/* Success and Error loader start */
</style>
