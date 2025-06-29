<script setup lang="ts">
import FeaturesCarousel from "./FeaturesCarousel.vue";
</script>

<template>
    <section id="features" class="features-container bg-section-base section-padding">
        <img src="../../../assets/images/laptop-mockup.png" alt="laptop image" loading="lazy" />
        <FeaturesCarousel />
    </section>
</template>

<style scoped>
.features-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 64px;
    background-image: url("../../../assets/images/features-image.jpg");
}

img {
    display: none;
}

@media (min-width: 1280px) {
    img {
        display: block;
    }
    .features-container {
        padding-left: 0;
    }
}
</style>
