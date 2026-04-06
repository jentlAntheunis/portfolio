<script setup>
const emailAddress = ["jentl.antheunis", "gmail.com"].join("@");
const emailHref = `mailto:${emailAddress}`;
</script>
<template>
	<div class="content-container">
		<h4 id="contact">Contact</h4>
		<CvDownload />
		<div class="contact-links">
			<a :href="emailHref" target="_blank" rel="noopener noreferrer">
				<Icon name="ic:outline-email" aria-hidden="true" class="contact-icon" />
				<span>Email</span>
			</a>
			<a href="https://www.linkedin.com/in/jentl-antheunis/" target="_blank" rel="noopener noreferrer">
				<Icon name="bi:linkedin" aria-hidden="true" class="contact-icon" />
				<span>LinkedIn</span>
			</a>
			<a href="https://github.com/jentlAntheunis" target="_blank" rel="noopener noreferrer">
				<Icon name="mdi:github" aria-hidden="true" class="contact-icon" />
				<span>GitHub</span>
			</a>
			<a href="https://sketchfab.com/jentlantheunis" target="_blank" rel="noopener noreferrer">
				<Icon name="simple-icons:sketchfab" aria-hidden="true" class="contact-icon" />
				<span>Sketchfab</span>
			</a>
		</div>
	</div>
</template>
<style scoped lang="scss">
@use "@/assets/css/base.scss" as *;
.contact-links {
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr 1fr;
	margin-bottom: 5rem;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		color: #fff;
		text-decoration: none;
		font-weight: 500;
		transition: color 0.3s ease;
		background-color: $color-primary;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition: background-color 0.3s ease;

		&:hover {
			background-color: $color-primary-dark;
		}
	}
}
</style>
