<script setup>
const { isMobile } = useViewport();
</script>
<template>
	<div class="content-container">
		<div class="text">
			<p>Howest Multimedia and Creative Technologies alumni</p>
			<p>Wide range of used languages and frameworks</p>
			<p>Driven by curiosity and a hunger to learn</p>
		</div>
	</div>
	<div class="title-container">
		<div class="title content-container">
			<div class="content-container" v-if="!isMobile">
				<div class="title-text">
					<h1>Jentl Antheunis</h1>
					<h2>Full Stack & XR Developer</h2>
				</div>
			</div>
			<img src="~/assets/img/picture.png" alt="Jentl Antheunis" class="profile-image" />
		</div>
		<div class="bar full-bleed"></div>
	</div>
	<div class="content-container" v-if="isMobile">
		<h1>Jentl Antheunis</h1>
		<h2>Full Stack & XR Developer</h2>
	</div>
</template>
<style scoped lang="scss">
@use "@/assets/css/base.scss" as *;

// text
.text {
	display: flex;
	flex-direction: column;
	margin-bottom: -20rem;
	margin-top: 1rem;
	@media (min-width: $bp-xs) {
		margin-bottom: -15rem;
	}
	@media (min-width: $bp-s) {
		margin-bottom: -13rem;
		max-width: 100%;
		gap: 3rem;
	}
}

.text p {
	margin-bottom: 1rem;
	@media (min-width: $bp-xs) {
		margin-bottom: 0;
	}
	@media (min-width: $bp-s) {
		transform: translateY(5rem);
	}
	&:nth-child(1) {
		align-self: flex-start;
		text-align: left;
		max-width: 100%;
		margin-bottom: 2rem;
		@media (min-width: $bp-xs) {
			max-width: 15rem;
		}
		@media (min-width: $bp-s) {
			max-width: 100%;
			margin-bottom: 0;
		}
	}

	&:nth-child(2) {
		align-self: flex-start;
		text-align: left;
		max-width: 7.5rem;
		@media (min-width: $bp-xs) {
			max-width: 10rem;
			align-self: flex-end;
			text-align: right;
		}

		@media (min-width: $bp-s) {
			align-self: flex-start;
			text-align: left;
		}
		@media (min-width: $bp-s) {
			align-self: flex-end;
			text-align: right;
			max-width: 100%;
			transform: translateX(-18rem) translateY(5rem);
		}
	}

	&:nth-child(3) {
		align-self: flex-start;
		text-align: left;
		max-width: 6rem;
		margin-top: 0;
		@media (min-width: $bp-xxs) {
			max-width: 7rem;
		}
		@media (min-width: $bp-xs) {
			margin-top: 5rem;
		}
		@media (min-width: $bp-s) {
			margin-top: 0;
		}
		@media (min-width: $bp-s) {
			max-width: 100%;
		}
	}
}

// image
.title-container {
	position: relative;
	--bar-gradient-center-x: calc(50% + 2rem);

	height: 100vw * 1.2;
	margin-top: 2rem;

	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100vw;

	@media (min-width: $bp-xs) {
		--bar-gradient-center-x: 50%;
		width: 100%;
		height: 32rem;
		flex-direction: column;
	}
}

.title {
	display: flex;
	align-items: flex-end;
	justify-content: center;
	height: 100%;
	z-index: 2;

	& .title-text {
		margin-bottom: 2.5rem;
	}
}

.profile-image {
	position: absolute;
	bottom: 0;
	height: 100vw;
	object-fit: cover;
	transform: translate(2rem);

	@media (min-width: $bp-xs) {
		transform: translate(0);
	}

	@media (min-width: $bp-xs) {
		height: 100%;
	}

	@media (min-width: $bp-s) {
		position: static;
	}
}

.bar {
	background-color: #{$color-primary};
	background-image: radial-gradient(
		160% 220% at var(--bar-gradient-center-x) 50%,
		#{$color-primary-light} 0%,
		#{$color-primary} 100%
	);
	height: 5rem;
	width: 100%;

	position: absolute;
	bottom: 0;
}
</style>
