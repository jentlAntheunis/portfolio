<script setup>
import projects from "~/data/projects.json";
</script>
<template>
	<div class="content-container">
		<h3>Projects</h3>
	</div>
	<div class="projects">
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
	padding: 0;
	margin: 0;
}
</style>
