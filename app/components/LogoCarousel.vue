<script setup lang="ts">
const logoFiles = [
	"A-Frame_logo.png",
	"Amazon_Web_Services_Logo.png",
	"arduino-logo.png",
	"arjs_logo.png",
	"blender_logo.png",
	"bootstrap_logo.png",
	"CSS-Logo.png",
	"Docker-Emblem.png",
	"flask-logo.png",
	"intellij-idea-logo.png",
	"Java-Logo.png",
	"js_logo.png",
	"matplotlib_log.webp",
	"Meta_Quest_logo.png",
	"microsoft-azure-logo.png",
	"mysql_logo.png",
	"NET-Framework-Logo.png",
	"nuxt_logo.png",
	"p5js_logo.png",
	"pandas-logo.png",
	"postgresql-logo.png",
	"Python-Emblem.png",
	"Raspberry-Pi-Logo.png",
	"react-logo.png",
	"scss-sass-logo.png",
	"sketchfab-logo.png",
	"Spring-Boot-Logo.png",
	"Tailwind-Css-Logo.png",
	"tensorflow-logo.png",
	"threeJS_logo.png",
	"Typescript_logo.png",
	"Unity-Logo.png",
	"vscode-logo.png",
	"vue-logo.png",
];

const logos = logoFiles
	.map(fileName => {
		const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");

		return {
			src: `/img/tech_logos/${fileName}`,
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
	gap: 1.5rem;
	width: max-content;
	animation: marquee 40s linear infinite;
	will-change: transform;
}

.logo-item {
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 0 0 auto;
	width: clamp(3.5rem, 10vw, 6rem);
}

.logo-item img {
	height: clamp(2.25rem, 6vw, 3.5rem);
	width: 100%;
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
