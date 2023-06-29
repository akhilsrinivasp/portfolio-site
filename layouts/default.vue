<template>
    <div>
        <div class="mouse-light"></div>
        <header class="">
            <MobileNavbar class="mobile" v-if="isMobile" />
            <SocialProfile class="desktop" v-if="!isMobile" />
        </header>
        <div>
            <slot class="slot" />
        </div>
        <footer>
            <NavBar class="desktop" v-if="!isMobile" />
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMobile: false,
        };
    },
    mounted() {
        this.isMobile = window.innerWidth < 900;
    },
}
</script>

<style scoped>
header {
    margin-top: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
}
footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding-top: 5%;
}

@media (max-width: 1024px) {
    .desktop {
        opacity: 0;
    }
}
</style>