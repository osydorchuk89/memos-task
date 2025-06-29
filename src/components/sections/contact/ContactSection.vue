<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { contactItems } from "@/data";
import ContactForm from "./ContactForm.vue";
import BaseModal from "@/components/ui/BaseModal.vue";
import useModal from "@/composables/useModal";

const { modalOpen, openModal, closeModal } = useModal();
</script>

<template>
    <section
        id="contact"
        class="contact-container bg-section-base section-padding section-centered"
    >
        <div class="contact-content">
            <div class="text-main">
                <h2 class="text-title">Let's Keep in Touch</h2>
                <p class="text-description">
                    We have created a new product that will help designers, developers and companies
                    create websites for their startups quickly and easily.
                </p>
            </div>
            <address class="text-contacts">
                <div v-for="item in contactItems" :key="item.text" class="contact-item">
                    <FontAwesomeIcon :icon="['fas', item.icon]" class="contact-icon" />
                    <p class="contact-text">{{ item.text }}</p>
                </div>
            </address>
        </div>
        <ContactForm @success="openModal" />
        <BaseModal v-if="modalOpen" :onClose="closeModal">
            <h2>Request Sent Succesfully</h2>
            <p>Thank you for reaching out us. <br />We will contact you back within 72 hours.</p>
        </BaseModal>
    </section>
</template>

<style scoped>
.contact-container {
    gap: 90px;
    padding-top: 60px;
    padding-bottom: 60px;
    background-image: url("../../../assets/images/contact-image.webp");
}

.contact-content {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 54px;
}

.text-main,
.text-contacts {
    display: flex;
    flex-direction: column;
}

.text-main {
    gap: 28px;
}

.text-contacts {
    gap: 32px;
}

.text-title {
    font-size: 42px;
    font-weight: 700;
    text-align: center;
}

.text-description,
.modal-title {
    font-size: 22px;
    font-weight: 500;
}

.contact-item {
    display: flex;
    flex-direction: row;
    gap: 15px;
}

.contact-text,
.contact-icon,
.modal-text {
    font-size: 16px;
}

.modal-title,
.modal-text {
    color: var(--dark-text);
}

.modal-text {
    text-align: center;
}

@media (min-width: 1280px) {
    .contact-container {
        flex-direction: row;
    }

    .text-title {
        text-align: left;
    }

    .text-contacts {
        width: 50%;
    }
}
</style>
