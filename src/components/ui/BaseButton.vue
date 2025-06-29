<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
defineProps<{
    text?: string;
    icon?: string;
    borderStyle?: string;
    mainColor: string;
    activeColor: string;
}>();
</script>

<template>
    <button class="button">
        <FontAwesomeIcon v-if="icon" :icon="['fas', icon]" class="button-icon" />
        <p v-if="text" class="button-text">{{ text }}</p>
    </button>
</template>

<style scoped>
.button {
    border-radius: 100px;
    padding: 18px 36px;
    background-color: v-bind("mainColor");
    cursor: pointer;
    outline: inherit;
    border: v-bind("borderStyle || 'none'");
    display: flex;
    align-items: center;
    justify-content: center;
    padding: v-bind("text ? '18px 36px' : '30px'");
    width: v-bind("text ? 'auto' : '54px'");
    height: v-bind("text ? 'auto' : '54px'");
}

.button:hover,
.button:active {
    background-color: v-bind("activeColor");
}

.button-text {
    font-size: 18px;
    font-weight: 500;
}

.button-icon {
    font-size: 18px;
    color: white;
    margin-left: 4px;
}
</style>
