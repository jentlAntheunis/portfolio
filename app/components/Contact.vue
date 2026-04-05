<script setup>
const emailAddress = ["antheunis.jentl", "proton.me"].join("@");
const emailHref = `mailto:${emailAddress}`;
</script>
<template>
	<h4 id="contact">Contact</h4>
	<CvDownload />
	<div class="contact-links">
		<a :href="emailHref" target="_blank" rel="noopener noreferrer">
			<Icon name="ic:outline-email" aria-hidden="true" class="contact-icon" />
			<span>Email</span>
		</a>
		<a href="https://www.linkedin.com/in/jentl-antheunis/" target="_blank" rel="noopener noreferrer">
			<Icon name="fa-brands:linkedin" aria-hidden="true" class="contact-icon" />
			<span>LinkedIn</span>
		</a>
		<a href="https://github.com/jentlAntheunis" target="_blank" rel="noopener noreferrer">
			<Icon name="fa-brands:github" aria-hidden="true" class="contact-icon" />
			<span>GitHub</span>
		</a>
		<a href="https://sketchfab.com/jentlantheunis" target="_blank" rel="noopener noreferrer">
			<Icon name="simple-icons:sketchfab" aria-hidden="true" class="contact-icon" />
			<span>Sketchfab</span>
		</a>
	</div>
</template>
<style scoped lang="scss"></style>
