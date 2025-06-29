<script setup lang="ts">
import ActionSection from "./components/sections/action/ActionSection.vue";
import ContactSection from "./components/sections/contact/ContactSection.vue";
import FeaturesSection from "./components/sections/features/FeaturesSection.vue";
import TheFooter from "./components/sections/footer/TheFooter.vue";
import HomeSection from "./components/sections/home/HomeSection.vue";
import PricesSection from "./components/sections/prices/PricesSection.vue";
</script>

<template>
    <main class="scroll-container">
        <HomeSection class="scroll-section" />
        <FeaturesSection class="scroll-section" />
        <ActionSection class="scroll-section" />
        <ContactSection class="scroll-section" />
        <PricesSection class="scroll-section" />
        <TheFooter class="footer-section" />
    </main>
</template>

<style scoped>
.scroll-container {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
}

.scroll-section {
    height: auto;
    min-height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
}

.footer-section {
    height: auto;
    scroll-snap-align: end;
    scroll-snap-stop: normal;
}
</style>
