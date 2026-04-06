<script setup lang="ts">
const cvUrl = "/Jentl_Antheunis_CV.pdf";
</script>
<template>
	<a id="cv-download" class="download-btn" :href="cvUrl" download>Download CV</a>
</template>
<style scoped lang="scss">
@use "@/assets/css/base.scss" as *;

.download-btn {
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-decoration: none;
	font-weight: 500;
	background-color: $color-primary;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	cursor: pointer;
	margin-bottom: 2rem;
	margin-top: 1rem;

	transition: background-color 0.3s ease;

	&:hover {
		background-color: $color-primary-dark;
	}
}
</style>
