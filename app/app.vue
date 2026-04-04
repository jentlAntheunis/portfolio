<script setup lang="ts">
const isAppReady = ref(false);

onMounted(() => {
	const markReady = () => {
		requestAnimationFrame(() => {
			isAppReady.value = true;
		});
	};

	if (document.readyState === "complete") {
		markReady();
		return;
	}

	window.addEventListener("load", markReady, { once: true });
});
</script>

<template>
	<div class="page-loader" v-if="!isAppReady" role="status" aria-live="polite">
		<div class="loader-spinner" aria-hidden="true"></div>
		<p>Loading portfolio...</p>
	</div>
	<div class="app-shell" :class="{ 'app-shell--loading': !isAppReady }">
		<bp-shower />
		<header>
			<Header />
		</header>
		<main>
			<Hero />
			<LogoCarousel />
			<Projects />
		</main>
		<footer>
			<Contact />
		</footer>
	</div>
</template>

<style scoped lang="scss">
@use "@/assets/css/base.scss" as *;

.app-shell--loading {
	visibility: hidden;
	pointer-events: none;
}

.page-loader {
	position: fixed;
	inset: 0;
	display: grid;
	place-content: center;
	gap: 1rem;
	background: var(--color-background);
	color: var(--color-text);
	z-index: 999;

	p {
		margin: 0;
		font-weight: 600;
	}
}

.loader-spinner {
	width: 2.4rem;
	height: 2.4rem;
	border-radius: 999px;
	border: 0.22rem solid rgba(0, 0, 0, 0.15);
	border-top-color: #{$color-primary};
	animation: spin 0.85s linear infinite;
	justify-self: center;
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}
</style>
