<script setup lang="ts">
import { ref } from 'vue';
import { GridDotsIcon, SearchIcon, Menu2Icon } from 'vue-tabler-icons';
import Logo from '../logo/Logo.vue';
import RtlLogo from '../logo/RtlLogo.vue';
import LanguageDD from '../vertical-header/LanguageDD.vue';
import NotificationDD from '../vertical-header/NotificationDD.vue';
import ProfileDD from '../vertical-header/ProfileDD.vue';
import Navigations from '../vertical-header/Navigations.vue';
import Searchbar from '../vertical-header/Searchbar.vue';
import RightMobileSidebar from '../vertical-header/RightMobileSidebar.vue';
import { isSidebarOpen } from "@/composables/useMobileSidebar"

const showSearch = ref(false);
const appsdrawer = ref(false);
const priority = ref(0);
function searchbox() {
    showSearch.value = !showSearch.value;
}
</script>

<template>
    <v-app-bar elevation="10" :priority="priority" height="70" class="horizontal-header">
        <div :class="$page.props.auth.user.config.is_boxed ? 'maxWidth v-toolbar__content' : 'v-toolbar__content px-6'">
            <v-locale-provider :rtl="$page.props.auth.user.config.is_rtl">
                <div class="hidden-md-and-down">
                    <RtlLogo v-if="$page.props.auth.user.config.is_rtl" />
                    <Logo v-else />
                </div>
            </v-locale-provider>

            <v-btn class="hidden-lg-and-up ms-3" icon rounded="sm" variant="flat"
                @click.stop="isSidebarOpen = ! isSidebarOpen" size="small">
                <Menu2Icon size="20" stroke-width="1.5" />
            </v-btn>

            <!-- search mobile -->
            <v-btn class="hidden-lg-and-up ml-3" icon rounded="sm" variant="flat" size="small" @click="searchbox">
                <SearchIcon size="17" stroke-width="1.5" />
            </v-btn>

            <v-sheet v-if="showSearch" class="search-sheet v-col-12">
                <Searchbar :closesearch="searchbox" />
            </v-sheet>

            <!-- ------------------------------------------------>
            <!-- Search part -->
            <!-- ------------------------------------------------>
            <v-sheet class="mx-2 d-none d-lg-block">
                <Searchbar />
            </v-sheet>

            <!---/Search part -->

            <!-- ------------------------------------------------>
            <!-- Mega menu -->
            <!-- ------------------------------------------------>
            <div class="hidden-md-and-down">
                <Navigations />
            </div>

            <v-spacer />
            <!-- ---------------------------------------------- -->
            <!---right part -->
            <!-- ---------------------------------------------- -->

            <!-- ---------------------------------------------- -->
            <!-- translate -->
            <!-- ---------------------------------------------- -->
            <LanguageDD />

            <!-- ---------------------------------------------- -->
            <!-- Notification -->
            <!-- ---------------------------------------------- -->

            <NotificationDD />

            <!-- right sidebar -->
            <v-btn class="hidden-lg-and-up ml-3" icon rounded="sm" @click.stop="appsdrawer = !appsdrawer"
                variant="flat">
                <GridDotsIcon size="17" stroke-width="1.5" />
            </v-btn>

            <!-- ---------------------------------------------- -->
            <!-- User Profile -->
            <!-- ---------------------------------------------- -->
            <div class="ml-3 mr-sm-0 mr-3">
                <ProfileDD />
            </div>
        </div>
    </v-app-bar>

    <v-navigation-drawer v-model="appsdrawer" location="right" temporary>
        <RightMobileSidebar />
    </v-navigation-drawer>
</template>
