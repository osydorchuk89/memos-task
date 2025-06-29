<script setup lang="ts">
import PriceCard from "./PriceCard.vue";
import { priceItems } from "@/data";
import BaseModal from "@/components/ui/BaseModal.vue";
import useModal from "@/composables/useModal";

const { modalOpen, openModal, closeModal } = useModal();
</script>

<template>
    <div id="prices" class="prices-container section-padding section-centered">
        <div class="prices-text">
            <p class="prices-title">Plans & Pricing</p>
            <p class="prices-description">
                Startup Framework is free forever — you only pay for custom domain hosting or to
                export your site.
            </p>
        </div>
        <ul class="cards-container">
            <PriceCard
                v-for="item in priceItems"
                :key="item.title"
                :title="item.title"
                :price="item.price"
                :features-included="item.featuresIncluded"
                :priority="item.priority"
                @success="openModal"
            />
        </ul>
        <BaseModal v-if="modalOpen" :onClose="closeModal">
            <h2>Plan Selected Succesfully</h2>
            <p>
                Thank you for selecting a pricing plan. <br />We will contact you back within 72
                hours.
            </p>
        </BaseModal>
    </div>
</template>

<style scoped>
.prices-container {
    position: relative;
    gap: 40px;
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: var(--accent);
}

.prices-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    width: 100%;
}

.prices-title,
.prices-description {
    text-align: center;
}

.prices-title {
    font-size: 42px;
    font-weight: 700;
}

.prices-description {
    font-size: 22px;
    font-weight: 500;
}

.cards-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    width: 100%;
    max-width: 400px;
}

@media (min-width: 1024px) {

    .cards-container {
        flex-direction: row;
        max-width: 100%;
        gap: 16px;
    }
}

@media (min-width: 1280px) {
    .cards-container {
        gap: 40px;
    }
}

@media (min-width: 1536px) {
    .cards-container {
        gap: 80px;
    }
}
</style>
