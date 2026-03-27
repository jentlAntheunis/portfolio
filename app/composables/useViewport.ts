import { computed, readonly } from "vue";

const BP_TABLET = 768;
const BP_DESKTOP = 1024;
const BP_LARGE = 1280;

export const useViewport = () => {
	const width = useState<number>("viewport-width", () => 0);
	const ready = useState<boolean>("viewport-ready", () => false);

	const isMobile = computed(() => width.value < BP_TABLET);
	const isTablet = computed(() => width.value >= BP_TABLET && width.value < BP_DESKTOP);
	const isDesktop = computed(() => width.value >= BP_DESKTOP);
	const isLargeDesktop = computed(() => width.value >= BP_LARGE);

	return {
		width: readonly(width),
		ready: readonly(ready),
		isMobile,
		isTablet,
		isDesktop,
		isLargeDesktop,
	};
};