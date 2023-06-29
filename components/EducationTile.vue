<!-- Education Tile -->

<template lang="">
  <div class="tile">
    <div class="education-tile">
      <a :href="education.site" target="_blank"
        ><h1 class="college text-4xl font-medium">
          {{ education.college }}
        </h1></a
      >
      <a :href="education.site" target="_blank"
        ><h2 class="degree text-2xl font-semibold">
          {{ education.degree }}
        </h2></a
      >
      <h3 class="year text-xl font-medium">{{ education.year }}</h3>
      <h4 class="grade text-xl font-medium">{{ education.grade }}</h4>
      <h4 class="course-title text-xl font-medium">Courses (Major):</h4>
      <div class="course-box">
        <template v-for="(course, index) in education.courses">
          <span class="courses">{{ course }}</span>
          <span class="dot" v-if="index < education.courses.length - 1">
            •
          </span>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup>
const { education: education } = defineProps(["education"]);
</script>

<style>
.tile {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100%;
}

.education-tile {
  background-color: #1a202c;
  border: 1px solid #1a202c;
  width: 100%;
  box-shadow: rgba(74, 74, 138, 0.25) 0px 50px 100px -20px,
    rgba(255, 255, 255, 0.3) 0px 30px 60px -30px,
    rgba(26, 98, 170, 0.35) 0px -2px 6px 0px inset;
  font-family: "Montserrat", sans-serif;
  border-radius: 25px;
  color: #fff;
}

@media (min-width: 1024px) {
  .education-tile {
    width: 1000px;
    padding: 6%;
    margin: 2%;
  }

  .courses {
    font-size: 1rem;
    letter-spacing: 0.09rem;
  }

  .college {
    padding-bottom: 1.5%;
    transition: font-size 0.2s;
  }

  .degree {
    padding-bottom: 1%;
    transition: font-size 0.2s;
  }

  .year {
    padding-bottom: 1%;
  }

  .grade {
    padding-bottom: 1%;
  }

  .course-title {
    padding-bottom: 1%;
    font-size: larger;
  }
  
  .education-tile:hover {
    background-color: #2d3748;
  }

  .college:hover {
    font-size: 2.7rem;
  }
  
  .degree:hover {
    font-size: 1.7rem;
  }
}

@media (max-width: 1024px) {
  .education-tile {
    width: 400px;
    padding: 7%;
    margin: 5%;
    text-align: center;
  }

  .courses {
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
    display: block;
    padding: 2%;
  }

  .college {
    padding-bottom: 5%;
    font-size: 1.7rem;
  }

  .degree {
    padding-bottom: 5%;
    font-size: 1.3rem;
    font-weight: 600;
  }

  .year {
    padding-bottom: 4%;
  }

  .grade {
    padding-bottom: 4%;
    font-size: 1.5rem;
  }

  .dot {
    display: none;
  }

  .course-title {
    padding-bottom: 1%;
    font-size: 1.4rem;
  }
}
</style>
