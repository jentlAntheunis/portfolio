<script setup>
import projects from "~/data/projects.json";

const { ready } = useViewport();
</script>
<template>
	<div class="content-container">
		<h3 id="projects">Projects</h3>
	</div>
	<div v-if="ready" class="projects">
		<Project v-for="project in projects" :key="project.id" :project="project" />
	</div>
</template>
<style scoped lang="scss">
h3 {
	margin-bottom: 1.5rem;
}

.projects {
	display: flex;
	gap: 4rem;
	flex-direction: column;
	list-style: none;
	margin-bottom: 5rem;
}
</style>
