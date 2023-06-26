<template>
    <div>
        <nav class="navbar">
            <div class="socials">
                <a href="https://www.linkedin.com/in/akhilsrinivasp/" target="_blank">
                    <Icon name="uil:linkedin" color="white" class="icon-class" />
                </a>
                <a href="https://www.github.com/akhilsrinivasp/" target="_blank">
                    <Icon name="uil:github" color="white" class="icon-class" />
                </a>
            </div>
            <NuxtLink class='home-link' to="/">Akhil</NuxtLink>
            <div class="socials">
                <a href="https://www.instagram.com/akhilsrinivasp/" target="_blank">
                    <Icon name="uil:instagram" color="white" class="icon-class" />
                </a>
                <a href="https://twitter.com/akhilsrinivasp" target="_blank">
                    <Icon name="uil:twitter" color="white" class="icon-class" />
                </a>
            </div>
        </nav>

    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.navbar {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    transition: background-color 0.2s ease-in-out;
    padding: 0 28%;
    top: 0;
    width: 100%;
}

.socials {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 175px;
    transform: translate(0, 0);

    opacity: 0;
    animation: reveal 1s forwards;
    transform: translateY(50px);
    animation-delay: 1s;
}

@keyframes reveal {
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.home-link {
    font-family: 'Marck Script', cursive;
    font-size: 3rem;
    color: #4fd1c5;
    padding: 0 2%;
    padding-top: 3%;
    text-align: center;
    text-shadow: 2px 2px 4px #000000;
    text-decoration: none;
    transition: 0.2s;
}

.home-link:hover {
    font-size: 3.5rem;
}

.router-link-exact-active {
    font-size: 4rem;
}

.icon-class {
    width: 45px;
    height: 45px;
    margin: 0;
    padding: 0;
    transition: 0.2s;
}

.icon-class:hover {
    width: 60px;
    height: 60px;
}</style>