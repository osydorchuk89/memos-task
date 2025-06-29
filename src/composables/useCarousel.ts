import { ref, computed } from "vue";

export default function useCarousel<T>(items: T[]) {
    const currentIndex = ref(0);
    const currentItem = computed(() => items[currentIndex.value]);

    const goToPrevious = () => {
        if (currentIndex.value !== 0) {
            currentIndex.value -= 1;
        }
    };

    const goToNext = () => {
        if (currentIndex.value !== items.length - 1) {
            currentIndex.value += 1;
        }
    };

    const goToSpecific = (index: number) => {
        currentIndex.value = index;
    };

    const isAtStart = computed(() => currentIndex.value === 0);
    const isAtEnd = computed(() => currentIndex.value === items.length - 1);

    return {
        currentIndex,
        currentItem,
        goToPrevious,
        goToNext,
        goToSpecific,
        isAtStart,
        isAtEnd,
    };
}
