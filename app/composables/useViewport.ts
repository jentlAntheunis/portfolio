import { computed, readonly } from "vue";

const BP_XS = 336;
const BP_MOBILE = 448;
const BP_TABLET = 768;
const BP_DESKTOP = 1024;
const BP_LARGE = 1280;

export const useViewport = () => {
	const width = useState<number>("viewport-width", () => 0);
	const ready = useState<boolean>("viewport-ready", () => false);

	const xxs = computed(() => width.value < BP_XS);
	const xs = computed(() => width.value < BP_MOBILE);
	const s = computed(() => width.value >= BP_MOBILE && width.value < BP_TABLET);
	const m = computed(() => width.value >= BP_TABLET && width.value < BP_DESKTOP);
	const l = computed(() => width.value >= BP_DESKTOP);
	const xl = computed(() => width.value >= BP_LARGE);

	const isMobile = computed(() => width.value < BP_TABLET);

	return {
		width: readonly(width),
		ready: readonly(ready),
		xxs,
		xs,
		s,
		m,
		l,
		xl,
		isMobile,
	};
};
