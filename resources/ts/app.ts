import { createApp, h, DefineComponent } from "vue";
import { Head, Link, createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "ziggy-js";
import vuetify from "./plugins/vuetify";
import VueTablerIcons from "vue-tabler-icons";
import "@/scss/style.scss";
import link from "./plugins/link";
import i18n from "./plugins/i18n";
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>("./pages/**/*.vue")),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .component("Link", Link)
            .component("Head", Head)
            .use(link)
            .use(VueTablerIcons)
            .use(i18n)
            .use(PerfectScrollbarPlugin)
            .use(vuetify)
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
