<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
    <footer class="footer-container section-padding">
        <div class="footer-upper">
            <h2 class="footer-title">Startup 3</h2>
            <ul class="footer-links">
                <div class="footer-links-part">
                    <li class="link-text">Privacy Policy</li>
                    <li class="link-text">Terms</li>
                </div>
                <div class="footer-links-part">
                    <li><FontAwesomeIcon :icon="['fab', 'twitter']" class="link-icon" /></li>
                    <li><FontAwesomeIcon :icon="['fab', 'facebook']" class="link-icon" /></li>
                    <li><FontAwesomeIcon :icon="['fab', 'google-plus-g']" class="link-icon" /></li>
                </div>
            </ul>
        </div>
        <div class="footer-lower">
            <ul class="footer-links">
                <li class="link-text">Tour</li>
                <li class="link-text">Features</li>
                <li class="link-text">Pricing Plans</li>
                <li class="link-text">Our Works</li>
                <li class="link-text">Brands</li>
                <li class="link-text">Contacts</li>
            </ul>
            <p class="link-disclaimer">© 2025. All rights reserved.</p>
        </div>
    </footer>
</template>

<style scoped>
.footer-container {
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding-top: 48px;
    padding-bottom: 48px;
    background-color: var(--accent);
}

.footer-upper,
.footer-lower {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
}

.footer-upper {
    padding-bottom: 40px;
    border-bottom: 2px solid #ffffff50;
}

.footer-title {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
}

.footer-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}

.footer-links-part {
    display: flex;
    flex-direction: row;
    gap: 16px;
}

.link-text,
.link-icon {
    cursor: pointer;
}

.link-text:hover,
.link-icon:hover {
    color: var(--accent-light);
}

.link-disclaimer {
    text-align: center;
}

@media (min-width: 640px) {
    .footer-upper {
        flex-direction: row;
    }

    .footer-links {
        flex-direction: row;
        justify-content: space-between;
        gap: 16px;
    }
}

@media (min-width: 1024px) {
    .footer-links-part,
    .footer-links {
        gap: 32px;
    }

    .footer-lower {
        flex-direction: row;
    }
}
</style>
