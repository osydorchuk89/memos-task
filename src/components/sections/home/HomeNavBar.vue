<script setup lang="ts">
import { headerLinks } from "@/data";
</script>

<template>
    <ul class="navbar-menu">
        <li v-for="link in headerLinks" :key="link.name">
            <a class="navbar-link" :href="link.to">{{ link.name }}</a>
        </li>
    </ul>
</template>

<style scoped>
.navbar-menu {
    display: none;
}

@media (min-width: 1024px) {
    .navbar-menu {
        position: absolute;
        top: 60px;
        display: flex;
        flex-direction: row;
        gap: 40px;
    }
    .navbar-link {
        color: #ffffff;
        font-size: 18px;
        font-weight: 500;
    }

    .navbar-link:hover {
        color: #ffffff80;
    }
}
</style>
