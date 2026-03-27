<script setup>
const toggleColorMode = () => {
	const html = document.documentElement;
	if (html.classList.contains("dark")) {
		html.classList.remove("dark");
	} else {
		html.classList.add("dark");
	}
};
</script>
<template>
	<button @click="toggleColorMode">Toggle Color Mode</button>
</template>
<style scoped></style>
