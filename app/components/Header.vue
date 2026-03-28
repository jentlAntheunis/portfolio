<script setup lang="ts">
const { isMobile } = useViewport();
</script>
<template>
	<div class="content-container">
		<Logo />
		<nav v-if="!isMobile">
			<ul>
				<li><a href="#home">Home</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
		<ColorModeSwitcher />
	</div>
</template>
<style scoped lang="scss">
@import "@/assets/css/base.scss";

.content-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 1rem;
}

nav ul {
	display: flex;
	gap: 1.5rem;
	list-style: none;
}

nav a {
	text-decoration: none;
	color: var(--color-text);
	font-weight: 500;
}
</style>
