<script setup lang="ts">
import { computed } from "vue";

const { ready, isMobile } = useViewport();

const logoSize = computed(() => {
	if (!ready.value) {
		return 40;
	}

	return isMobile.value ? 40 : 48;
});
</script>
<template>
	<div class="content-container">
		<img src="/logo.svg" alt="Logo" :width="logoSize" :height="logoSize" />
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
<style scoped></style>
