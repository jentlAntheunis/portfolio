export default defineNuxtPlugin(nuxtApp => {
	const viewportWidth = useState<number>("viewport-width", () => 0);
	const viewportReady = useState<boolean>("viewport-ready", () => false);

	const updateViewport = () => {
		viewportWidth.value = window.innerWidth;
		viewportReady.value = true;
	};

	nuxtApp.hook("app:mounted", () => {
		updateViewport();
	});

	updateViewport();
	window.addEventListener("resize", updateViewport, { passive: true });
});
