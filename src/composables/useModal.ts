import { ref } from "vue";

export default function useModal() {
    const modalOpen = ref(false);
    const openModal = () => (modalOpen.value = true);
    const closeModal = () => (modalOpen.value = false);

    return { modalOpen, openModal, closeModal };
}
