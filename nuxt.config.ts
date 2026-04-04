// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 compatibilityDate: "2025-07-15",
 devtools: { enabled: true },

 app: {
					head: {
									title: "Jentl Antheunis - Portfolio",
									meta: [
													{ name: "description", content: "My personal portfolio website showcasing my projects and skills." },
													{ name: "viewport", content: "width=device-width, initial-scale=1" },
													{ charset: "utf-8" },
									],
									link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
					},
	},

 css: ["@/assets/css/main.scss"],
 modules: ["@nuxt/icon"],
});