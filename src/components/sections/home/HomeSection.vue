<script setup lang="ts">
import { onMounted } from "vue";

import HomeCarousel from "./HomeCarousel.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import HomeNavBar from "./HomeNavBar.vue";

onMounted(() => {
    const img = new Image();
    img.src = "../../../assets/images/home-image.webp";
});
</script>

<template>
    <section id="home" class="home-container bg-section-base section-centered">
        <HomeNavBar />
        <HomeCarousel />
        <BaseButton
            text="Create an account"
            main-color="var(--secondary)"
            active-color="var(--secondary-active)"
        />
    </section>
</template>

<style scoped>
.home-container {
    background-image: url("../../../assets/images/home-image.webp");
}
</style>
