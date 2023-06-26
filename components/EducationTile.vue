<!-- Education Tile -->
 
<template lang="">
    <div class="tile">
        <div class="education-tile">
            <h1>{{education.college}}</h1>
            <h2>{{education.degree}}</h2>
            <h3>{{education.year}}</h3>
            <h4>{{education.grade}}</h4>
            <p>{{education.courses}}</p>
        </div>
    </div>
</template>
<script setup>
const { education: education } = defineProps(['education'])
</script>

<style>
.education-tile {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    max-width: fit-content;

    font-family: "Montserrat", sans-serif;
    color: #fff;
}

.education-tile {
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
    border-radius: 5px;
    max-width: 500px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    font-family: "Montserrat", sans-serif;
    color: #333;
}

.education-tile h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.education-tile h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}

.education-tile h3 {
    font-size: 16px;
    margin-bottom: 5px;
}

.education-tile h4 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
}

.education-tile p {
    font-size: 14px;
    margin-bottom: 0;
}
</style>