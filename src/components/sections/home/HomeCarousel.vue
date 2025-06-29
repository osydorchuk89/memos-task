<script setup lang="ts">
import useCarousel from "@/composables/useCarousel";
import { homeItems } from "@/data";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const { currentIndex, currentItem, goToPrevious, goToNext, goToSpecific, isAtStart, isAtEnd } =
    useCarousel(homeItems);
</script>

<template>
    <div class="carousel-container">
        <div class="carousel-content">
            <FontAwesomeIcon
                :icon="['fas', 'angle-left']"
                class="carousel-arrow"
                :class="{ disabled: isAtStart }"
                @click="goToPrevious"
            />
            <Transition name="slide" mode="out-in">
                <div :key="currentIndex" class="carousel-text">
                    <p class="text-title">{{ currentItem.title }}</p>
                    <p class="text-message">{{ currentItem.message }}</p>
                    <p class="text-description">{{ currentItem.description }}</p>
                </div>
            </Transition>
            <FontAwesomeIcon
                :icon="['fas', 'angle-right']"
                class="carousel-arrow"
                :class="{ disabled: isAtEnd }"
                @click="goToNext"
            />
        </div>
        <ul class="carousel-buttons">
            <li v-for="(item, index) in homeItems" :key="item.title">
                <FontAwesomeIcon
                    :icon="currentIndex === index ? ['fas', 'circle'] : ['far', 'circle']"
                    class="carousel-button"
                    @click="goToSpecific(index)"
                />
            </li>
        </ul>
    </div>
</template>

<style scoped>
.carousel-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 16px;
}

.carousel-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    overflow: hidden;
}

.carousel-arrow {
    font-size: 30px;
    cursor: pointer;
    transition: opacity 0.3s ease;
}

.carousel-arrow.disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
}

.carousel-text {
    max-width: 736px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
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

.text-title,
.text-message,
.text-description {
    text-align: center;
}

.text-title {
    font-size: 24px;
    font-weight: 700;
}

.text-message {
    font-size: 48px;
    font-weight: 700;
}

.text-description {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
}

.carousel-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    margin-top: 48px;
    margin-bottom: 58px;
}

.carousel-button {
    font-size: 12px;
    cursor: pointer;
    transition: opacity 0.3s ease;
}

@media (min-width: 640px) {
    .carousel-container {
        padding: 0 60px;
    }
}

@media (min-width: 1024px) {
    .carousel-container {
        padding: 0 90px;
    }

    .text-message {
        font-size: 72px;
    }
    .text-description {
        font-size: 22px;
    }
}

@media (min-width: 1280px) {
    .carousel-container {
        padding: 0 120px;
    }

    .text-message {
        font-size: 72px;
    }
    .text-description {
        font-size: 22px;
    }
}
</style>
