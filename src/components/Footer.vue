<template>
    <div class="footer">
        <div class="footer-content global-pc-container">
            <Logo></Logo>
            <a class="monte-link" href="https://github.com/MonteCarloClub">
                <span> {{ company }} </span>
                <img :src="githubIcon" />
            </a>
        </div>
    </div>
</template>

<script setup>
import Logo from "@/components/Logo.vue";
import githubIcon from "@/assets/github.svg";

const company = "Club de Monte Carlo"
</script>

<style scoped>
.footer {
    background-color: #fafafa;
}

.footer-content {
    padding: 32px var(--margin-lr, 92px);
    justify-content: space-between;
    display: flex;
}

.monte-link {
    text-decoration: underline;
    align-items: center;
    color: black;
    display: flex;
    gap: 8px;
}

.monte-link :hover {
    color: black;
}
</style>