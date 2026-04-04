<script setup lang="ts">
const { isMobile } = useViewport();
const logoModules = import.meta.glob("~/assets/img/logos/*", {
	eager: true,
	import: "default",
}) as Record<string, string>;

const normalizeName = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");

const logoAliases: Record<string, string> = {
	dotnet: "netframeworklogo",
	scss: "scsssasslogo",
	javascript: "jslogo",
	typescript: "typescriptlogo",
};

const logoEntries = Object.entries(logoModules).map(([path, src]) => {
	const fileName = path.split("/").pop() ?? "";
	const fileWithoutExtension = fileName.replace(/\.[^/.]+$/, "");

	return {
		src,
		normalizedName: normalizeName(fileWithoutExtension),
	};
});

const getLogoForTech = (tech: string) => {
	const normalizedTech = logoAliases[normalizeName(tech)] ?? normalizeName(tech);

	const directMatch = logoEntries.find(entry => entry.normalizedName === normalizedTech);
	if (directMatch) {
		return directMatch.src;
	}

	const partialMatch = logoEntries.find(
		entry => entry.normalizedName.includes(normalizedTech) || normalizedTech.includes(entry.normalizedName),
	);

	return partialMatch?.src;
};

type ProjectItem = {
	id: string;
	title: string;
	image: string;
	teamSize: string;
	duration: string;
	projectType: string;
	description: string[];
	url: string;
	urlLabel: string;
	techStack: string[];
};

const props = defineProps<{
	project: ProjectItem;
}>();

const techStackWithLogos = computed(() =>
	props.project.techStack.map(tech => ({
		name: tech,
		logoSrc: getLogoForTech(tech),
	})),
);
</script>
<template>
	<div :class="!isMobile ? 'content-container project-container' : ''">
		<h4 v-if="isMobile" class="content-container">{{ props.project.title }}</h4>
		<a
			:href="props.project.url"
			target="_blank"
			rel="noopener"
			:title="props.project.urlLabel"
			:aria-label="props.project.urlLabel"
			class="project-image-link"
		>
			<img :src="props.project.image" :alt="props.project.id + ' image'" class="project-image" />
		</a>
		<div class="project-info content-container">
			<h4 v-if="!isMobile">{{ props.project.title }}</h4>
			<ul class="project-specs">
				<li>👥 Team size: {{ props.project.teamSize }}</li>
				<li>📅 Duration: {{ props.project.duration }}</li>
				<li>📝 Project type: {{ props.project.projectType }}</li>
			</ul>
			<p v-for="desc in props.project.description" :key="desc">
				{{ desc }}
			</p>
			<a :href="props.project.url" target="_blank" rel="noopener" class="project-link">{{ props.project.urlLabel }}</a>
			<div class="techstack">
				<p>Tech Stack:</p>
				<ul class="techstack_logos">
					<li v-for="tech in techStackWithLogos" :key="tech.name">
						<img
							v-if="tech.logoSrc"
							:src="tech.logoSrc"
							:alt="`${tech.name} logo`"
							class="tech-logo"
							loading="lazy"
							decoding="async"
						/>
						<span v-else>{{ tech.name }}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
@use "@/assets/css/base.scss" as *;

.project-container {
	display: grid;
	gap: 1.5rem;
	grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);

	&:nth-child(even) {
		.project-image-link {
			order: 2;
		}

		.project-info {
			order: 1;
			text-align: right;
			align-items: flex-end;
		}

		.project-specs,
		.techstack {
			justify-content: flex-end;
		}
	}
}

.project-image-link {
	display: block;
	width: 100%;
}

.project-image {
	width: 100%;
	display: block;
	aspect-ratio: 16 / 9;
	object-fit: cover;
	background: rgba(0, 0, 0, 0.08);
}

.project-info {
	display: flex;
	flex-direction: column;
	width: 100%;

	& :last-child {
		margin-top: auto;
	}
}

.project-specs {
	display: flex;
	gap: 1.5rem;
	row-gap: 0.3rem;
	list-style: none;
	margin-block: 0.5rem;
	flex-wrap: wrap;
}

.project-link {
	margin-top: 1rem;
	display: inline-block;
	padding: 0.5rem 1rem;
	max-width: fit-content;
	background: $color-primary;
	color: #fff;
	text-decoration: none;
	border-radius: 4px;
	transition: background 0.3s;

	&:hover {
		background: darken($color-primary, 10%);
	}
}

.techstack {
	display: flex;
	gap: 1.5rem;
}

.techstack_logos {
	display: flex;
	gap: 1rem;
	list-style: none;
	padding: 0;
	margin: 0;
	flex-wrap: wrap;

	li {
		display: flex;
		align-items: center;
	}
}

.tech-logo {
	height: 1.5rem;
	object-fit: contain;
	display: block;
}
</style>
