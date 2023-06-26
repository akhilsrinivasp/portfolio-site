<template>
    <div>
        <div class="navbar" :class="{ 'navbar-blue': scrolled }">
            <Icon id="toggle" name="grommet-icons:braille" color="white" @click="toggleDropdown" />
            <NuxtLink class='home-link' to="/">Akhil</NuxtLink>
        </div>
        <div ref="dropDown" id="dropdown" :style="{ display: dropdownVisible ? 'block' : 'none' }">
            <Icon id="toggle" name="simple-line-icons:arrow-up" color="black" @click="toggleDropdown" />
            <br>
            <NuxtLink class='link' @click="toggleDropdown" to="/">Home</NuxtLink> <br>
            <NuxtLink class='link' @click="toggleDropdown" to="/education">Education</NuxtLink> <br>
            <NuxtLink class='link' @click="toggleDropdown" to="/experience">Experience</NuxtLink> <br>
            <NuxtLink class='link' @click="toggleDropdown" to="/skills">Skills</NuxtLink> <br>
            <NuxtLink class='link' @click="toggleDropdown" to="/projects">Projects</NuxtLink> <br>
            <NuxtLink class='link' @click="toggleDropdown" to="/about">About Me</NuxtLink> <br>
            <NuxtLink class='link' @click="toggleDropdown" to="/contact">Contact</NuxtLink> <br>

            <div class="socials" align="center">
                <a href="https://www.linkedin.com/in/akhilsrinivasp/" target="_blank">
                    <Icon name="uil:linkedin" color="black" class="icon-class" />
                </a>
                <a href="https://www.github.com/akhilsrinivasp/" target="_blank">
                    <Icon name="uil:github" color="black" class="icon-class" />
                </a>
                <a href="https://www.instagram.com/akhilsrinivasp/" target="_blank">
                    <Icon name="uil:instagram" color="black" class="icon-class" />
                </a>
                <a href="https://twitter.com/akhilsrinivasp" target="_blank">
                    <Icon name="uil:twitter" color="black" class="icon-class" />
                </a>
            </div>
            <br>
            <Icon id="toggle" name="grommet-icons:close" color="black" @click="toggleDropdown" />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dropdownVisible: false,
            scrolled: false,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        toggleDropdown() {
            this.dropdownVisible = !this.dropdownVisible;
        },
        handleScroll() {
            this.scrolled = window.scrollY > 40;
        },
    },
}
</script>
<style>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    transition: background-color 0.2s ease-in-out;

    opacity: 0;
    animation: reveal 1s forwards;
    transform: translateX(100px);
}

@keyframes reveal {
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.navbar-blue {
    background-color: #1a202c;
}

#toggle {
    cursor: pointer;
    width: 9%;
    height: 9%;
    margin: 2.5% 5%;
}

br {
    margin-top: 4%;
}

/* add transition to entry of dropdown */

#dropdown {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1000px;
    background-color: #ffffff;
    z-index: 10;

    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    color: #000000;
    padding-top: 5%;
    padding-bottom: 5%;
    transition: 0.2s ease-in-out;

    opacity: 0;
    animation: reveal 0.5s forwards;
    transform: translateY(-100px);
}

@keyframes reveal {
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.dropdown-link {
    color: #000000;
    transition: 0.2s;
    margin: 0;
    position: relative;
    opacity: 0;
    animation: reveal 1s forwards;
    transform: translateY(-100px);
    animation-delay: 0.2s;
}

.home-link {
    font-family: 'Marck Script', cursive;
    font-size: 3rem;
    color: #4fd1c5;
    margin: 2.5% 6% 0;
    text-align: center;
    text-shadow: 2px 2px 4px #000000;
    text-decoration: none;
    transition: 0.2s;
}

.socials {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 77%;
    transform: translate(15%, 90%);
}
</style>