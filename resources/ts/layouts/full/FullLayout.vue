<script setup lang="ts">
import VerticalSidebarVue from "./vertical-sidebar/VerticalSidebar.vue";
import VerticalHeaderVue from "./vertical-header/VerticalHeader.vue";
import HorizontalHeader from "./horizontal-header/HorizontalHeader.vue";
import HorizontalSidebar from "./horizontal-sidebar/HorizontalSidebar.vue";
import Customizer from "./customizer/Customizer.vue";
import { ref } from "vue";
import { CircleCheckIcon, CircleXIcon, SettingsIcon } from "vue-tabler-icons";

const isDrawerOpen = ref<boolean>(false);
</script>

<template>
    <!-----RTL LAYOUT------->
    <v-locale-provider :rtl="$page.props.auth.user.config.is_rtl">
        <v-app
            :theme="$page.props.auth.user.config.theme"
            :class="[
                $page.props.auth.user.config.theme,
                $page.props.auth.user.config.mini_sidebar ? 'mini-sidebar' : '',
                $page.props.auth.user.config.is_horizontal ? 'horizontalLayout' : 'verticalLayout',
                $page.props.auth.user.config.is_card_bordered ? 'cardBordered' : '',
            ]"
        >
            <!---Customizer location left side--->
            <v-navigation-drawer
                app
                temporary
                elevation="10"
                :location="$page.props.auth.user.config.is_rtl ? 'left' : 'right'"
                v-model="isDrawerOpen"
                width="320"
                :class="{'left-customizer': $page.props.auth.user.config.is_rtl}"
            >
                <Customizer />
            </v-navigation-drawer>
            <VerticalSidebarVue v-if="!$page.props.auth.user.config.is_horizontal" />
            <VerticalHeaderVue v-if="!$page.props.auth.user.config.is_horizontal" />
            <HorizontalHeader v-if="$page.props.auth.user.config.is_horizontal" />
            <HorizontalSidebar v-if="$page.props.auth.user.config.is_horizontal" />

            <v-main>
                <v-container fluid class="page-wrapper pb-sm-15 pb-10">
                    <div
                        :class="
                            $page.props.auth.user.config.is_boxed
                                ? 'maxWidth'
                                : ''
                        "
                    >
                        <slot />
                        <v-btn
                            class="customizer-btn"
                            size="large"
                            icon
                            variant="flat"
                            color="primary"
                            @click.stop="isDrawerOpen = !isDrawerOpen"
                        >
                            <SettingsIcon />
                        </v-btn>
                    </div>
                </v-container>
            </v-main>

            <VSnackbar
                v-if="$page.props.flash"
                v-model="$page.props.flash.success"
                location="top end"
                color="success"
            >
                <VIcon>
                    <CircleCheckIcon />
                </VIcon>
                {{ $page.props.flash.success }}
            </VSnackbar>

            <VSnackbar
                v-if="$page.props.flash"
                v-model="$page.props.flash.danger"
                location="top end"
                color="error"
            >
                <VIcon>
                    <CircleXIcon />
                </VIcon>
                {{ $page.props.flash.danger }}
            </VSnackbar>
        </v-app>
    </v-locale-provider>
</template>
