<template>
    <div>
        <header class="shadow-md">
            <nav class="text-center space-x-14 items-center py-3 text-white"> 
                    <NuxtLink class = 'link' to="/education">Education</NuxtLink>
                    <NuxtLink class = 'link' to="/experience">Experience</NuxtLink>
                    <NuxtLink class = 'link' to="/skills">Skills</NuxtLink>
                    <NuxtLink class = 'link' to="/projects">Projects</NuxtLink>
                    <NuxtLink class = 'link' to="/about">About</NuxtLink>
                    <NuxtLink class = 'link' to="/contact">Contact</NuxtLink>                
            </nav>
        </header>
    </div>
</template>
<script>

</script>
<style scoped>
header {
    padding: 0;
    background-color: #1a202c;
    background-image: linear-gradient(315deg, #1a202c 0%, #2d3748 25%, #4a5568 50%, #2d3748 75%, #1a202c 100%);
    background-image: linear-gradient(135deg, #16213E 0%, #274156 30%, #1C2E4A 70%, #0E1E34 100%);
}
.link {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    color: #d8d8d8;
    margin: 0;
    padding: 0;
    text-align: center;
    text-shadow: 2px 2px 4px #000000;
    text-decoration: none;
    transition: 0.2s;

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
.link:hover {
    font-size: 2rem;
    font-weight: 500;
}
.router-link-exact-active {
    color: #d8d8d8;
    background-image: url("/assets/images/link-active.png");
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 100px;
    background-position-x: 50%;
    padding: 1.1%;
    font-size: 1.7rem;
    font-weight: 700;
}
</style>