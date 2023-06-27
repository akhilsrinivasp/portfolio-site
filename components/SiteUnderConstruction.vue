<template>
    <div>
        <div class="container-fluid" align="center">
            <h1 class="heading">Site Under Construction 🚧</h1>
            <p class="para">Check back soon!</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .container-fluid {
        background-color: aqua;
        text-align: center;
        border-radius: 72% 28% 70% 30% / 30% 55% 45% 70% ;
    }
    @media (min-width: 1024px) {
        .container-fluid {
            max-width: 750px;
            padding: 7% 7%;
            margin: 13%;
        }
        .heading {
        font-size: 2.7rem;
        font-weight: 700;
        margin-bottom: 2%;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }
    .para {
        font-size: 1.5rem;
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
    }
    }
    @media (max-width: 1024px) {
        .container-fluid {
            padding: 15%;
            max-width: 350px;
            margin-top: 25%;
        }  
        .heading {
        font-size: 2.0rem;
        font-weight: 700;
        margin-bottom: 2%;
        font-family: 'Montserrat', sans-serif;
        font-weight: 450;
    }
    .para {
        font-size: 1.0rem;
        font-weight: 400;
        font-family: 'Montserrat', sans-serif;
    }
    }
</style>