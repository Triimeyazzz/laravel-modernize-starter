import { createSSRApp, h, DefineComponent } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { Head, Link, createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import vuetify from "./plugins/vuetify";
import link from './plugins/link';
import i18n from './plugins/i18n';
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
        setup({ App, props, plugin }) {
            return createSSRApp({ render: () => h(App, props) })
                .use(plugin)
                .use(ZiggyVue, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                })
                .use(link)
                .use(vuetify)
                .use(i18n)
                .use(PerfectScrollbarPlugin)
                .component("Link", Link)
                .component("Head", Head);
        },
    })
);
