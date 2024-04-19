<script setup lang="ts">
import { ref, watch } from 'vue';
import { GridDotsIcon, Menu2Icon } from 'vue-tabler-icons';
import LanguageDD from './LanguageDD.vue';
import NotificationDD from './NotificationDD.vue';
import ProfileDD from './ProfileDD.vue';
import Searchbar from './Searchbar.vue';
import RightMobileSidebar from './RightMobileSidebar.vue';
import Navigations from './Navigations.vue';
import { isSidebarOpen } from '@/composables/useMobileSidebar';
import { router } from '@inertiajs/vue3';
const appsdrawer = ref(false);
const priority = ref(0);

const changeMiniSidebar = (mini_sidebar: boolean) => {
    router.put(route("config.update"), { mini_sidebar });
}
</script>

<template>
    <v-app-bar elevation="0" :priority="priority" height="70" class="">
        <v-btn class="hidden-md-and-down" icon color="primary" variant="text"
            @click.stop="changeMiniSidebar(!$page.props.auth.user.config.mini_sidebar)">
            <Menu2Icon size="20" stroke-width="1.5" />
        </v-btn>
        <v-btn class="hidden-lg-and-up" icon variant="flat" @click.stop="isSidebarOpen = ! isSidebarOpen" size="small">
            <Menu2Icon size="20" stroke-width="1.5" />
        </v-btn>

        <!-- search mobile -->
        <!-- <v-btn class="hidden-lg-and-up ml-3" icon variant="text" color="primary" @click="searchbox">
            <SearchIcon size="17" stroke-width="1.5" />
        </v-btn> -->

        <!-- <v-sheet v-if="showSearch" class="search-sheet v-col-12">
            <Searchbar :closesearch="searchbox" />
        </v-sheet> -->

        <!-- ---------------------------------------------- -->
        <!-- Search part -->
        <!-- ---------------------------------------------- -->
        <v-sheet>
            <Searchbar />
        </v-sheet>

        <!---/Search part -->

        <!-- ---------------------------------------------- -->
        <!-- Mega menu -->
        <!-- ---------------------------------------------- -->
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
        <v-btn variant="text" color="primary" class="hidden-lg-and-up" icon @click.stop="appsdrawer = !appsdrawer">
            <GridDotsIcon size="17" stroke-width="1.5" />
        </v-btn>

        <!-- ---------------------------------------------- -->
        <!-- User Profile -->
        <!-- ---------------------------------------------- -->
        <div class="ml-2">
            <ProfileDD />
        </div>
    </v-app-bar>

    <!-- ---------------------------------------------- -->
    <!-- Right Sidebar -->
    <!-- ---------------------------------------------- -->
    <v-navigation-drawer v-model="appsdrawer" location="right" temporary>
        <RightMobileSidebar />
    </v-navigation-drawer>
</template>
