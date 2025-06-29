<script setup lang="ts">
import { ref } from "vue";
import * as yup from "yup";
import { useForm } from "vee-validate";

import BaseButton from "@/components/ui/BaseButton.vue";

const emit = defineEmits<{
    success: [];
}>();

const schema = yup.object({
    name: yup.string().required("Name is required"),
    budget: yup.number().min(1, "Please enter a valid number").required("Budget is required"),
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    message: yup.string().required("Message is required"),
});

const hasSubmitted = ref(false);

const { defineField, errors, handleSubmit, resetForm } = useForm({
    validationSchema: schema,
    validateOnMount: false,
});

const [name, nameAttrs] = defineField("name", { validateOnBlur: false });
const [budget, budgetAttrs] = defineField("budget", { validateOnBlur: false });
const [email, emailAttrs] = defineField("email", { validateOnBlur: false });
const [message, messageAttrs] = defineField("message", { validateOnBlur: false });

const onSubmit = handleSubmit(
    (values) => {
        console.log(values);
        resetForm();
        emit("success");
    },
    () => {
        hasSubmitted.value = true;
    },
);
</script>

<template>
    <form @submit="onSubmit" class="contact-form" novalidate>
        <div class="upper-inputs">
            <div class="input-container">
                <label for="name" class="input-label">YOUR NAME</label>
                <input
                    class="short-input"
                    :class="{ error: hasSubmitted && errors.name }"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="First Name"
                    v-model.trim="name"
                    v-bind="nameAttrs"
                />
                <span v-if="hasSubmitted && errors.name" class="error-message">{{
                    errors.name
                }}</span>
            </div>
            <div class="input-container">
                <label for="budget" class="input-label">YOUR BUDGET</label>
                <input
                    class="short-input"
                    :class="{ error: hasSubmitted && errors.budget }"
                    type="number"
                    min="1"
                    name="budget"
                    id="budget"
                    placeholder="$500"
                    v-model.trim="budget"
                    v-bind="budgetAttrs"
                />
                <span v-if="hasSubmitted && errors.budget" class="error-message">{{
                    errors.budget
                }}</span>
            </div>
        </div>
        <div class="input-container">
            <label for="email" class="input-label">YOUR EMAIL</label>
            <input
                class="short-input"
                :class="{ error: hasSubmitted && errors.email }"
                type="email"
                name="email"
                id="email"
                placeholder="name@email.com"
                v-model.trim="email"
                v-bind="emailAttrs"
            />
            <span v-if="hasSubmitted && errors.email" class="error-message">{{
                errors.email
            }}</span>
        </div>
        <div class="input-container">
            <label for="message" class="input-label">YOUR MESSAGE</label>
            <textarea
                class="long-input"
                :class="{ error: hasSubmitted && errors.message }"
                type="text"
                rows="5"
                name="message"
                id="message"
                placeholder="Your message"
                v-model.trim="message"
                v-bind="messageAttrs"
            />
            <span v-if="hasSubmitted && errors.message" class="error-message">{{
                errors.message
            }}</span>
        </div>
        <BaseButton text="Send" main-color="var(--primary)" active-color="var(--primary-active)" />
    </form>
</template>

<style scoped>
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 40px;
    background-color: white;
    border-radius: 10px;
    padding: 32px 16px;
    width: 100%;
}

label {
    color: var(--dark-text);
}

.upper-inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
}

.input-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.input-label {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
}

.short-input,
.long-input {
    background-color: white;
    border: 2px solid var(--grey);
    padding: 12px 24px;
    font-size: 16px;
}

.short-input {
    border-radius: 100px;
}

.long-input {
    border-radius: 10px;
    resize: none;
}

.short-input:focus,
.long-input:focus {
    border-color: var(--primary);
}

.short-input.error,
.long-input.error {
    border-color: #dc3545;
}

.error-message {
    color: #dc3545;
}

@media (min-width: 640px) {
    .contact-form {
        padding: 40px 20px;
        width: auto;
        max-width: 100%;
    }

    .upper-inputs {
        flex-direction: row;
    }

    .input-label {
        text-align: left;
    }
}

@media (min-width: 1024px) {
    .contact-form {
        padding: 40px;
    }
}
</style>
