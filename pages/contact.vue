<template lang="">
    <div class="contact-page">
        <h1 class="hide">Contact Me</h1>
        <div v-for="email in emails">
            <Mail class="mail" :mail="email" />
        </div>
    </div>
</template>
<script>
const emails = [
    "akhilsrinivasp@gmail.com",
    "akhilsrinivas.p2020@vitstudent.ac.in",
    "21f1001203@ds.study.iitm.ac.in"
]
export default {
    data() {
        return {
            emails
        }
    }
}
</script>
<style>
.contact-page {
    margin: 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #fff;
}

.hide {
    opacity: 0;
    animation: reveal 0.3s forwards;
    transform: translateY(100px);

    font-size: 3rem;
    margin: 0 0 25px 0;
}

.contact-page>div:nth-child(2) {
    opacity: 0;
    animation: reveal 0.5s forwards;
    transform: translateY(-100px);
    animation-delay: 0.1s;
}

.contact-page>div:nth-child(3) {
    opacity: 0;
    animation: reveal 0.5s forwards;
    transform: translateY(100px);
    animation-delay: 0.3s;
}

.contact-page>div:nth-child(4) {
    opacity: 0;
    animation: reveal 0.5s forwards;
    transform: translateY(-100px);
    animation-delay: 0.5s;
}

@keyframes reveal {
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}

@media (min-width: 1024px) {
    .hide {
        display: none;
    }
}

</style>