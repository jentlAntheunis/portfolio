<script setup>
const imgHeight = 500; // in pixels
</script>
<template>
	<div class="content-container">
		<p>Howest Multimedia and Creative Technologies alumni</p>
		<p>Wide range of used languages and frameworks</p>
		<p>Driven by curiosity and a hunger to learn</p>
	</div>
	<div class="image-container" :style="{ height: imgHeight + 'px' }">
		<img src="~/assets/img/picture.png" alt="Jentl Antheunis" class="profile-image" :style="{ height: imgHeight + 'px' }" />
		<div class="bar full-bleed"></div>
	</div>
	<div class="content-container">
		<h1>Jentl Antheunis</h1>
		<h2>Full Stack & XR Developer</h2>
	</div>
</template>
<style scoped lang="scss">
@import "@/assets/css/base.scss";

.image-container {
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
}

.profile-image {
	position: absolute;
	bottom: 0;
	z-index: 2;

	object-fit: cover;
}

.bar {
	background-color: var(--color-primary);
	height: 5rem;
	width: 100%;

	position: absolute;
	bottom: 0;
}

@media (min-width: $bp-small) {
	.profile-image {
		left: 0;
	}
}
</style>
