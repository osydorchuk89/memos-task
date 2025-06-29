<script setup lang="ts">
import BaseButton from "@/components/ui/BaseButton.vue";
</script>

<template>
    <div id="action" class="action-container bg-section-base section-padding section-centered">
        <div class="action-text">
            <p class="action-title">Easy to setup. <br />Easy to maintain</p>
            <p class="action-description">
                Bootstrap is a widely-used, sleek, intuitive and powerful front-end framework for
                faster and easier web development.
            </p>
        </div>
        <div class="action-buttons">
            <BaseButton icon="play" main-color="#EA3223" active-color="#C41E0F" />
            <BaseButton
                text="Get Started"
                main-color="var(--primary)"
                active-color="var(--primary-active)"
            />
        </div>
    </div>
</template>

<style scoped>
.action-container {
    gap: 60px;
    background-image: url("../../../assets/images/action-image.jpg");
}

.action-text {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 700px;
}

.action-title,
.action-description {
    text-align: center;
}

.action-title {
    font-size: 42px;
    font-weight: 700;
}

.action-description {
    font-size: 22px;
    font-weight: 500;
}

.action-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}

@media (min-width: 640px) {
    .action-title {
        font-size: 58px;
    }
    .action-buttons {
        flex-direction: row;
    }
}
</style>
