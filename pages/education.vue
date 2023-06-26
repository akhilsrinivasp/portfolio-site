<template>
	<div class="education">
		<span class="spacer">

		</span>
		<div class="mobile-title">
			Education
		</div>
		<div v-for="edu in education" :key="edu.id">
			<EducationTile :education="edu" class="items-center" />
		</div>
		<span class="spacer-bottom">

		</span>
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
.education {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	background-image: url("/assets/images/home-bg.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
}

/* using css nth child property assign animation */

.education>div:nth-child(3) {
	opacity: 0;
	animation: reveal 1s forwards;
	transform: translateX(100px);
}

.education>div:nth-child(4) {
	opacity: 0;
	animation: reveal 1s forwards;
	transform: translateX(-100px);
}

.education>div:nth-child(5) {
	opacity: 0;
	animation: reveal 1s forwards;
	transform: translateX(100px);
}

.education>div:nth-child(6) {
	opacity: 0;
	animation: reveal 1s forwards;
	transform: translateX(-100px);
}

@keyframes reveal {
	100% {
		opacity: 1;
		transform: translateY(0px);
	}
}

@media (min-width: 1024px) {
	.spacer {
		margin-top: 8%;
	}

	.mobile-title {
		opacity: 0;
	}

	.spacer-bottom {
		margin-bottom: 8%;
	}
}

@media (max-width: 1024px) {
	.education {
		margin-top: 25%;
		margin-bottom: 10%;
	}

	.mobile-title {
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		font-size: 2.5rem;
		letter-spacing: 0.4rem;
		color: #fff;
		margin: 2% 0 4%;
		padding: 0;
		/* text-shadow: 2px 2px 4px #000000; */
		text-decoration: none;
		transition: 0.2s;
	}

	.education>div:nth-child(1) {
		opacity: 0;
		animation: reveal 1s forwards;
		transform: translateX(-100px);
	}

	.education>div:nth-child(2) {
		opacity: 0;
		animation: reveal 1s forwards;
		transform: translateX(-100px);
	}

}</style>