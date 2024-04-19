<script setup lang="ts">
import { shallowRef } from "vue";
import sidebarItems from "./sidebarItem";
import NavGroup from "./NavGroup/index.vue";
import NavItem from "./NavItem/index.vue";
import NavCollapse from "./NavCollapse/NavCollapse.vue";
import Logo from "../logo/Logo.vue";
import RtlLogo from "../logo/RtlLogo.vue";
import { isSidebarOpen } from "@/composables/useMobileSidebar"

const sidebarMenu = shallowRef(sidebarItems);
</script>

<template>
    <v-navigation-drawer left v-model="isSidebarOpen" elevation="0" rail-width="75" :mobile-breakpoint="960" app
        class="leftSidebar" :rail="$page.props.auth.user.config.mini_sidebar" expand-on-hover width="270">
        <v-locale-provider :rtl="$page.props.auth.user.config.is_rtl">
            <div class="pa-5">
                <RtlLogo v-if="$page.props.auth.user.config.is_rtl" />
                <Logo v-else />
            </div>
        </v-locale-provider>

        <PerfectScrollbar class="scrollnavbar">
            <v-list class="pa-6">
                <template v-for="(item, i) in sidebarMenu">
                    <NavGroup :item="item" v-if="item.header" :key="item.title" />
                    <NavCollapse class="leftPadding" :item="item" :level="0" v-else-if="item.children" />
                    <NavItem :item="item" v-else class="leftPadding" />
                </template>
            </v-list>
        </PerfectScrollbar>
    </v-navigation-drawer>
</template>
