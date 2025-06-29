<script setup lang="ts">
import { useTemplateRef } from "vue";
import { onClickOutside } from "@vueuse/core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import BaseButton from "./BaseButton.vue";

const props = defineProps<{
    onClose: () => void;
}>();

const target = useTemplateRef<HTMLElement>("target");
onClickOutside(target, () => props.onClose());
</script>

<template>
    <div class="dialog-backdrop">
        <div class="dialog-container" ref="target">
            <slot></slot>
            <FontAwesomeIcon :icon="['fas', 'xmark']" class="close-icon" @click="onClose" />
            <BaseButton
                text="Go Back"
                main-color="var(--primary)"
                active-color="var(--primary-active)"
                @click="onClose"
            />
        </div>
    </div>
</template>

<style scoped>
.dialog-backdrop {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
}

.dialog-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 32px 16px;
    border-radius: 10px;
    background-color: white;
    width: 100%;
    max-width: 480px;
}

.dialog-container :deep(h2),
.dialog-container :deep(p) {
    text-align: center;
    color: var(--dark-text);
}

.dialog-container :deep(h2) {
    font-size: 22px;
    font-weight: 500;
}

.dialog-container :deep(p) {
    font-size: 16px;
}

.close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    color: var(--dark-text);
    font-size: 18px;
    cursor: pointer;
}

@media (min-width: 640px) {
    .dialog-container {
        padding: 40px;
    }
}
</style>
