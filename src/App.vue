<script setup lang="ts">
import { onMounted, ref } from "vue";

import ActionSection from "./components/sections/action/ActionSection.vue";
import ContactSection from "./components/sections/contact/ContactSection.vue";
import FeaturesSection from "./components/sections/features/FeaturesSection.vue";
import TheFooter from "./components/sections/footer/TheFooter.vue";
import HomeSection from "./components/sections/home/HomeSection.vue";
import PricesSection from "./components/sections/prices/PricesSection.vue";
import homeImageUrl from "./assets/images/home-image.webp";

const imageLoaded = ref(false);
onMounted(() => {
    const img = new Image();
    img.onload = () => {
        imageLoaded.value = true;
    };
    img.src = homeImageUrl;
});
</script>

<template>
    <main v-if="imageLoaded" class="scroll-container">
        <HomeSection class="scroll-section" />
        <FeaturesSection class="scroll-section" />
        <ActionSection class="scroll-section" />
        <ContactSection class="scroll-section" />
        <PricesSection class="scroll-section" />
        <TheFooter class="footer-section" />
    </main>
    <div v-else="loading"></div>
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

.loading {
    height: 100vh;
    overflow: hidden;
}
</style>
