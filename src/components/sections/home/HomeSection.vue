<script setup lang="ts">
import { onMounted } from "vue";

import HomeCarousel from "./HomeCarousel.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import HomeNavBar from "./HomeNavBar.vue";
import homeImageUrl from "../../../assets/images/home-image.webp";

onMounted(() => {
    const img = new Image();
    img.src = homeImageUrl;
});
</script>

<template>
    <section
        id="home"
        class="home-container bg-section-base section-centered"
        :style="{ backgroundImage: `url(${homeImageUrl})` }"
    >
        <HomeNavBar />
        <HomeCarousel />
        <BaseButton
            text="Create an account"
            main-color="var(--secondary)"
            active-color="var(--secondary-active)"
        />
    </section>
</template>

<style scoped></style>
