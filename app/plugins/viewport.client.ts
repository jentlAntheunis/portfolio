export default defineNuxtPlugin(() => {
	const viewportWidth = useState<number>("viewport-width", () => 0);
	const viewportReady = useState<boolean>("viewport-ready", () => false);

	const updateViewport = () => {
		viewportWidth.value = window.innerWidth;
		viewportReady.value = true;
	};

	updateViewport();
	window.addEventListener("resize", updateViewport, { passive: true });
});