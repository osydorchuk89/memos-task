<script setup lang="ts">
import { onMounted, ref } from "vue";

import HomeCarousel from "./HomeCarousel.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import HomeNavBar from "./HomeNavBar.vue";
import homeImageUrl from "../../../assets/images/home-image.webp";

const imageLoaded = ref(false);
const imageUrl = `url(${homeImageUrl})`;

onMounted(() => {
    const img = new Image();
    img.onload = () => {
        imageLoaded.value = true;
    };
    img.src = homeImageUrl;
});
</script>

<template>
    <section v-if="imageLoaded" id="home" class="home-container bg-section-base section-centered">
        <HomeNavBar />
        <HomeCarousel />
        <BaseButton
            text="Create an account"
            main-color="var(--secondary)"
            active-color="var(--secondary-active)"
        />
    </section>
    <section v-else class="section-loading" />
</template>

<style scoped>
.home-container {
    background-image: v-bind(imageUrl);
}

.section-loading {
    height: 100vh;
}
</style>
