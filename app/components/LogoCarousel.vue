<script setup lang="ts">
const logoModules = import.meta.glob("~/assets/img/logos/*", {
	eager: true,
	import: "default",
}) as Record<string, string>;

const logos = Object.entries(logoModules)
	.map(([path, src]) => {
		const fileName = path.split("/").pop() ?? "Logo";
		const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");

		return {
			src,
			alt: nameWithoutExtension.replace(/[-_]+/g, " "),
		};
	})
	.sort((a, b) => a.alt.localeCompare(b.alt));

const scrollingLogos = [...logos, ...logos];
</script>

<template>
	<section class="logo-carousel" aria-label="Technology logos">
		<div class="logo-track">
			<div v-for="(logo, index) in scrollingLogos" :key="`${logo.src}-${index}`" class="logo-item">
				<img :src="logo.src" :alt="logo.alt" loading="lazy" decoding="async" />
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
.logo-carousel {
	overflow: hidden;
	width: 100%;
	padding-block: 1rem;
	mask-image: linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%);
}

.logo-track {
	display: flex;
	align-items: center;
	gap: 2.5rem;
	width: max-content;
	animation: marquee 40s linear infinite;
	will-change: transform;
}

.logo-item {
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 0 0 auto;
}

.logo-item img {
	height: clamp(2.25rem, 6vw, 3.5rem);
	width: auto;
	object-fit: contain;
	display: block;
	filter: saturate(0.9);
}

.logo-carousel:hover .logo-track {
	animation-play-state: paused;
}

@keyframes marquee {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(calc(-50% - 1.25rem));
	}
}
</style>
