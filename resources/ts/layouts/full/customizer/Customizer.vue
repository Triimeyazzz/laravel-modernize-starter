<script setup lang="ts">
import { ref } from "vue";
import {
    CheckIcon,
    LayoutColumnsIcon,
    LayoutDistributeHorizontalIcon,
    LayoutDistributeVerticalIcon,
    LayoutNavbarIcon,
    LayoutSidebarIcon,
    LayoutSidebarLeftCollapseIcon,
    TextDirectionLtrIcon,
    TextDirectionRtlIcon,
} from "vue-tabler-icons";
import { router } from "@inertiajs/vue3";

// themes color options
const themeColors = ref([
    { name: "BLUE_THEME", bg: "themeBlue" },
    { name: "AQUA_THEME", bg: "themeAqua" },
    { name: "PURPLE_THEME", bg: "themePurple" },
    { name: "GREEN_THEME", bg: "themeGreen" },
    { name: "CYAN_THEME", bg: "themeCyan" },
    { name: "ORANGE_THEME", bg: "themeOrange" },
]);

// Dark Theme Colors
const DarkthemeColors = ref([
    { name: "DARK_BLUE_THEME", bg: "themeDarkBlue" },
    { name: "DARK_AQUA_THEME", bg: "themeDarkAqua" },
    { name: "DARK_PURPLE_THEME", bg: "themeDarkPurple" },
    { name: "DARK_GREEN_THEME", bg: "themeDarkGreen" },
    { name: "DARK_CYAN_THEME", bg: "themeDarkCyan" },
    { name: "DARK_ORANGE_THEME", bg: "themeDarkOrange" },
]);

const updateConfig = (data: any) => router.put(route("config.update"), data)

const changeTheme = (theme: string) => updateConfig({ theme })
const changeDirection = (direction: boolean) => updateConfig({ is_horizontal: direction })
const changeContainer = (is_boxed: boolean) => updateConfig({ is_boxed })
const changeCardBorder = (is_bordered: boolean) => updateConfig({ is_card_bordered: is_bordered })
const changeMiniSidebar = (mini_sidebar: boolean) => updateConfig({ mini_sidebar })
</script>

<!------------------------------------->
<!-- Customizer -->
<!------------------------------------->
<template>
    <div class="pa-6">
        <h5 class="text-h5">Settings</h5>
    </div>
    <v-divider></v-divider>
    <PerfectScrollbar style="height: calc(100vh - 90px)">
        <div class="pa-6">
            <h6 class="text-h6 mb-2">Sidebar Layout</h6>
            <v-btn-toggle v-model="$page.props.auth.user.config.is_horizontal" color="primary"
                class="my-2 btn-group-custom gap-3" rounded="0" group @update:model-value="changeDirection">
                <v-btn :value="false" variant="text" elevation="9" class="rounded-md">
                    <LayoutColumnsIcon stroke-width="1.5" size="21" class="mr-2" />
                    Vertical
                </v-btn>
                <v-btn :value="true" variant="text" elevation="9" class="rounded-md">
                    <LayoutNavbarIcon stroke-width="1.5" size="21" class="mr-2" />
                    Horizontal
                </v-btn>
            </v-btn-toggle>

            <h6 class="text-h6 mt-8 mb-5">Theme Color</h6>
            <v-item-group mandatory v-model="$page.props.auth.user.config.theme" class="ml-n2 v-row">
                <v-col cols="4" v-for="theme in themeColors" :key="theme.name" class="pa-2">
                    <v-item v-slot="{ isSelected }" :value="theme.name">
                        <v-sheet rounded="md" class="border cursor-pointer d-block text-center px-5 py-4 hover-btns"
                            elevation="9" @click="changeTheme(theme.name)">
                            <v-avatar :class="theme.bg" size="25">
                                <CheckIcon color="white" size="18" v-if="isSelected" />
                            </v-avatar>
                        </v-sheet>
                    </v-item>
                </v-col>
            </v-item-group>
            <h6 class="text-h6 mt-11 mb-5">Theme Dark Color</h6>
            <v-item-group mandatory v-model="$page.props.auth.user.config.theme" class="ml-n2 v-row">
                <v-col cols="4" v-for="theme in DarkthemeColors" :key="theme.name" class="pa-2">
                    <v-item v-slot="{ isSelected }" :value="theme.name">
                        <v-sheet rounded="md" class="border cursor-pointer d-block text-center px-5 py-4 hover-btns"
                            elevation="9" @click="changeTheme(theme.name)">
                            <v-avatar :class="theme.bg" size="25">
                                <CheckIcon color="white" size="18" v-if="isSelected" />
                            </v-avatar>
                        </v-sheet>
                    </v-item>
                </v-col>
            </v-item-group>
            <h6 class="text-h6 mt-11 mb-2">Container Option</h6>
            <v-btn-toggle v-model="$page.props.auth.user.config.is_boxed" color="primary"
                class="my-2 btn-group-custom gap-3" rounded="0" group @update:model-value="changeContainer">
                <v-btn :value="true" variant="text" elevation="9" class="rounded-md">
                    <LayoutDistributeVerticalIcon stroke-width="1.5" size="21" class="mr-2" />
                    Boxed
                </v-btn>
                <v-btn :value="false" variant="text" elevation="9" class="rounded-md">
                    <LayoutDistributeHorizontalIcon stroke-width="1.5" size="21" class="mr-2" />
                    Full
                </v-btn>
            </v-btn-toggle>
            <!---Horizontal demo hide this option --->
            <v-sheet v-if="$page.props.auth.user.config.is_horizontal != true">
                <h6 class="text-h6 mt-11 mb-2">Sidebar Type</h6>
                <v-btn-toggle v-model="$page.props.auth.user.config.mini_sidebar" color="primary"
                    class="my-2 btn-group-custom gap-3" rounded="0" group @update:model-value="changeMiniSidebar">
                    <v-btn :value="false" variant="text" elevation="9" class="rounded-md">
                        <LayoutSidebarIcon stroke-width="1.5" size="21" class="mr-2" />
                        Full
                    </v-btn>
                    <v-btn :value="true" variant="text" elevation="9" class="rounded-md">
                        <LayoutSidebarLeftCollapseIcon stroke-width="1.5" size="21" class="mr-2" />
                        Collapse
                    </v-btn>
                </v-btn-toggle>
            </v-sheet>
            <h6 class="text-h6 mt-11 mb-2">Card with</h6>
            <v-btn-toggle v-model="$page.props.auth.user.config.is_card_bordered" color="primary"
                class="my-2 btn-group-custom gap-3" rounded="0" group @update:model-value="changeCardBorder">
                <v-btn :value="false" variant="text" elevation="9" class="rounded-md">
                    <LayoutSidebarLeftCollapseIcon stroke-width="1.5" size="21" class="mr-2" />
                    Shadow
                </v-btn>
                <v-btn :value="true" variant="text" elevation="9" class="rounded-md">
                    <LayoutSidebarIcon stroke-width="1.5" size="21" class="mr-2" />
                    Border
                </v-btn>
            </v-btn-toggle>
        </div>
    </PerfectScrollbar>
</template>
