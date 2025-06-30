<script setup lang="ts">
import { onMounted, ref } from "vue";

import ActionSection from "./components/sections/action/ActionSection.vue";
import ContactSection from "./components/sections/contact/ContactSection.vue";
import FeaturesSection from "./components/sections/features/FeaturesSection.vue";
import TheFooter from "./components/sections/footer/TheFooter.vue";
import HomeSection from "./components/sections/home/HomeSection.vue";
import PricesSection from "./components/sections/prices/PricesSection.vue";
import homeImageUrl from "./assets/images/home-image.webp";
import featuresImageUrl from "./assets/images/features-image.webp";
import actionImageUrl from "./assets/images/action-image.webp";
import contactImageUrl from "./assets/images/contact-image.webp";

const imagesLoaded = ref(false);
const fontsLoaded = ref(false);
const allAssetsReady = ref(false);

const checkAllAssetsReady = () => {
    if (imagesLoaded.value && fontsLoaded.value) {
        allAssetsReady.value = true;
    }
};

onMounted(async () => {
    // load background images
    const imageUrls = [homeImageUrl, featuresImageUrl, actionImageUrl, contactImageUrl];
    
    const loadImage = (url: string): Promise<string> => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(url);
            img.onerror = () => reject(new Error(`Failed to load ${url}`));
            img.src = url;
        });
    };

    try {
        await Promise.all(imageUrls.map((url) => loadImage(url)));
        imagesLoaded.value = true;
        checkAllAssetsReady();
    } catch (error) {
        console.error("Some images failed to load:", error);
        imagesLoaded.value = true;
        checkAllAssetsReady();
    }

    // load fonts
    try {
        await document.fonts.ready;
        fontsLoaded.value = true;
        checkAllAssetsReady();
    } catch (error) {
        fontsLoaded.value = true;
        checkAllAssetsReady();
    }
});
</script>

<template>
    <main v-if="allAssetsReady" class="scroll-container">
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
