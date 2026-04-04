<script setup>
const { xxs, xs, s, m, l, xl } = useViewport();

const currentViewPort = computed(() => {
	if (xxs.value) return "XXS";
	if (xs.value) return "XS";
	if (s.value) return "S";
	if (m.value) return "M";
	if (l.value) return "L";
	if (xl.value) return "XL";
	return "unknown";
});
</script>
<template>
	<p>{{ currentViewPort }}</p>
</template>
<style scoped>
p {
	color: chocolate;
	position: absolute;
	top: 0;
	left: 0;
}
</style>
