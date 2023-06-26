<template>
  <div class="education">
    <div v-for="edu in education" :key="edu.id" >
		<EducationTile :education="edu" class="items-center" />	
	</div>
  </div>
</template>
<script>
import educationData from "~/assets/data/education_details.json";
export default {
	// import data form assets/data/education-details.json
  data() {
	return {
	  education: educationData
	}
  }
}
</script>
<style>
  .education{
	margin-top:10%;
	margin-bottom: 10%;
  }
</style>