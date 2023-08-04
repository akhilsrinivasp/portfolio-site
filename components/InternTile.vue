<template>
    <div :id="intern.id" class="tile">
        <div class="intern-tile" @mouseover="hover=true" @mouseleave="hover=false">
            <div class="company-logo-container ease duration-500">
                <div class="company-logo ease duration-500">
                    <img :src="intern.logo" alt="company logo" />   
                </div>
            </div>
            <div class="intern-details-container">
                <div class="company text-2xl">
                    <h1 class="company-name">{{ intern.company }}</h1>
                </div>
                <div class="description" v-if="hover">
                    <p class="description-text">{{ intern.description }}</p>
                </div>
                <div class="company text-3xl">
                    <h1 class="company-name">{{ intern.position }}</h1>
                </div>
                <div class="position">
                    <h2 class="position-name">{{ intern.location }}</h2>
                </div>
                <div class="year">
                    <h3 class="year-name">{{ intern.period }}</h3>
                </div>
                <div class="work" v-if="hover" v-for="work in intern.work">
                    <p class="work-text">• {{ work }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const { intern: intern } = defineProps(["intern"]);
const hover= ref(false)
type intern_details = {
        company: string,
        logo: string,
        description: string,
        position: string,
        period: string,
        location: string,
        work: string[]
    }
// function addDescription adds description and work when the user hovers over the tile

</script>
<style scoped>
.tile {
    background-color: #1a202c;
    border: 1px solid #1a202c;
    width: 100%;
    box-shadow: rgba(74, 74, 138, 0.25) 0px 50px 100px -20px,rgba(255, 255, 255, 0.3) 0px 30px 60px -30px,rgba(26, 98, 170, 0.35) 0px -2px 6px 0px inset;
    font-family: "Montserrat", sans-serif;
    border-radius: 25px;
    color: #fff;
    margin: 2% 0 4%;
    /* add transition in such a way that if the element expands, it does it smoothly */
    transition: all 0.5s ease;
    animation: reveal 0.5ms forwards;
}
.tile:hover {
    background-color: #fff;
    color: #1a202c;
    border: 1px solid #1a202c;
    box-shadow: rgba(74, 74, 138, 0.25) 0px 50px 100px -20px,rgba(255, 255, 255, 0.3) 0px 30px 60px -30px,rgba(26, 98, 170, 0.35) 0px -2px 6px 0px inset;
    transform: scale(1.05);
}
.intern-tile {
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* align-items: center; */
    padding: 40px 20px;
}
.company-logo {
    width: 200px;
    height: 200px;
    border-radius: 25%;
    padding: 25px;
    margin-top: 28px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: reveal 1s forwards;
    transform: translateY(-20px);
    opacity: 0;
}
.intern-details-container { 
    padding: 40px;
    width: 500px;
}

.intern-details-container > div {
    margin: 10px 0;
    animation: reveal 1s forwards;
    transform: translateY(-20px);
    opacity: 0;
}

@keyframes reveal {
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
}

.work-name {
    font-weight: 400;
    margin: 0;
    padding: 0;
    text-align: left;
    line-height: 1.5;
    animation: reveal 1s forwards;
    transform: translateY(-20px);
    opacity: 0;
}
</style>