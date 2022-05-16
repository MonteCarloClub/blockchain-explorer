<template>
    <div class="footer">
        <Logo></Logo>
        <a class="monte-link" href="https://github.com/MonteCarloClub">
            <span> {{ company }} </span>
            <img :src="githubIcon" />
        </a>
    </div>
</template>

<script setup>
import Logo from "@/components/Logo.vue";
import githubIcon from "@/assets/github.svg";

const company = "Club de Monte Carlo"
</script>

<style>
.footer {
    background-color: #fafafa;
    padding: 32px var(--margin-lr, 92px);
    display: flex;
    justify-content: space-between;
}

.monte-link {
    color: black;
    text-decoration: underline;
    display: flex;
    align-items: center;
    gap: 8px;
}

.monte-link :hover {
    color: black;
}
</style>