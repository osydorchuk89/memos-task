<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BaseButton from "@/components/ui/BaseButton.vue";
import { priceCardItems } from "@/data";

defineProps<{
    title: string;
    price: string;
    featuresIncluded: number;
    priority: boolean;
}>();

const emit = defineEmits<{
    success: [];
}>();
</script>

<template>
    <div class="card-container">
        <p class="card-title">{{ title }}</p>
        <p class="card-price">{{ price }} <span class="card-currency">$</span></p>
        <ul class="card-features">
            <li v-for="(item, index) in priceCardItems" :key="item" class="card-feature">
                <FontAwesomeIcon
                    v-if="index < featuresIncluded"
                    :icon="['fas', 'check']"
                    class="check-icon"
                />
                <div v-else class="icon-placeholder" />
                <span :class="{ 'text-pale': index >= featuresIncluded }">{{ item }}</span>
            </li>
        </ul>
        <BaseButton
            text="Get Started"
            :main-color="priority ? '#E93A7D' : 'transparent'"
            :active-color="priority ? '#C1185E' : '#ffffff50'"
            :borderStyle="priority ? 'none' : '2px solid #ffffff50'"
            @click="emit('success')"
        />
    </div>
</template>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 10px;
    border: 2px solid #ffffff50;
    padding: 32px;
    flex: 1;
}

.card-title,
.card-price {
    text-align: center;
}

.card-title {
    font-size: 22px;
    font-weight: 500;
}

.card-price {
    font-size: 58px;
    font-weight: 700;
}

.card-currency {
    font-size: 16px;
    position: relative;
    top: -28px;
}

.card-features {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.card-feature {
    display: flex;
    flex-direction: row;
    gap: 16px;
    font-size: 16px;
}

.check-icon {
    color: var(--primary-active);
    font-size: 16px;
    width: 16px;
}

.icon-placeholder {
    width: 16px;
    height: 16px;
}

.text-pale {
    color: #ffffff80;
}

@media (hover: hover) {
    .card-container {
        transition:
            transform 0.3s ease-in-out,
            box-shadow 0.3s ease-in-out;
        transform: scale(1);
        will-change: transform;
    }

    .card-container:hover {
        transform: scale(1.1);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
}
</style>
