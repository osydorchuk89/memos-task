<script setup lang="ts">
import { featuresItems } from "@/data";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import useCarousel from "@/composables/useCarousel";

const { currentIndex, currentItem, goToSpecific } = useCarousel(featuresItems);
</script>

<template>
    <article class="carousel-container">
        <div class="carousel-content">
            <Transition name="slide" mode="out-in">
                <div :key="currentIndex" class="carousel-item">
                    <div class="carousel-text">
                        <h2 class="text-title">{{ currentItem.title }}</h2>
                        <p class="text-description">{{ currentItem.description }}</p>
                    </div>
                    <div class="carousel-features">
                        <div
                            v-for="feature in currentItem.features"
                            :key="feature.title"
                            class="carousel-feature"
                        >
                            <FontAwesomeIcon :icon="['far', feature.icon]" class="feature-icon" />
                            <h3 class="feature-title">{{ feature.title }}</h3>
                            <p class="feature-description">
                                {{ feature.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
        <ul class="carousel-buttons">
            <li v-for="(item, index) in featuresItems" :key="item.title">
                <FontAwesomeIcon
                    :icon="currentIndex === index ? ['fas', 'circle'] : ['far', 'circle']"
                    class="carousel-button"
                    @click="goToSpecific(index)"
                />
            </li>
        </ul>
    </article>
</template>

<style scoped>
.carousel-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 120px;
}

.carousel-content {
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.carousel-item,
.carousel-text {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.carousel-features {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 32px;
}

.carousel-feature {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
}

.feature-icon {
    font-size: 36px;
}

.feature-title {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
}

.feature-description {
    font-size: 16px;
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.4s ease;
}

.slide-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.text-title {
    font-size: 42px;
    font-weight: 700;
    text-align: center;
}

.text-description {
    font-size: 22px;
    font-weight: 500;
}

.carousel-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.carousel-button {
    font-size: 12px;
    cursor: pointer;
    transition: opacity 0.3s ease;
}

@media (min-width: 640px) {
    .carousel-container {
        flex-direction: row;
        gap: 40px;
    }

    .carousel-item {
        gap: 60px;
    }

    .text-title {
        text-align: left;
    }

    .carousel-buttons {
        flex-direction: column;
    }

    .slide-enter-from {
        transform: translateY(100%);
    }

    .slide-leave-to {
        transform: translateY(-100%);
    }
}

@media (min-width: 1280px) {
    .carousel-container {
        gap: 80px;
    }
}

@media (min-width: 1536px) {
    .carousel-container {
        gap: 160px;
    }
}
</style>
