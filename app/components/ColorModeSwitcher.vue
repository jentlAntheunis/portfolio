<script setup>
const isDark = ref(false);

onMounted(() => {
	isDark.value = document.documentElement.classList.contains("dark");
});

const toggleColorMode = () => {
	const html = document.documentElement;
	if (html.classList.contains("dark")) {
		html.classList.remove("dark");
		isDark.value = false;
	} else {
		html.classList.add("dark");
		isDark.value = true;
	}
};
</script>
<template>
	<button
		@click="toggleColorMode"
		class="color-mode-switcher"
		:aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
		:title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
	>
		<Icon v-if="!isDark" name="material-symbols:light-mode" aria-hidden="true" class="color-icon" />
		<Icon v-else name="material-symbols:dark-mode" aria-hidden="true" class="color-icon" />
	</button>
</template>
<style scoped lang="scss">
.color-mode-switcher {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0.35rem;
	border: 0;
	border-radius: 999px;
	background: transparent;
	color: var(--color-text);
	cursor: pointer;
}

.color-icon {
	width: 1.4rem;
	height: 1.4rem;
	color: currentColor;
}
</style>
