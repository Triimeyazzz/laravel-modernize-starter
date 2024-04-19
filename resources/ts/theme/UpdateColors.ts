import { computed } from 'vue';
import * as themeColors from '@/theme/LightTheme';
import * as DarkThemeColors from '@/theme/DarkTheme';
import { usePage } from '@inertiajs/vue3';

const theme = usePage().props.auth.user.config.theme

const getPrimary = computed(() => {
    if (theme === 'AQUA_THEME') {
        return themeColors.AQUA_THEME.colors.primary;
    } else if (theme === 'PURPLE_THEME') {
        return themeColors.PURPLE_THEME.colors.primary;
    } else if (theme === 'GREEN_THEME') {
        return themeColors.GREEN_THEME.colors.primary;
    } else if (theme === 'CYAN_THEME') {
        return themeColors.CYAN_THEME.colors.primary;
    } else if (theme === 'ORANGE_THEME') {
        return themeColors.ORANGE_THEME.colors.primary;
    } else if (theme === 'DARK_AQUA_THEME') {
        return DarkThemeColors.DARK_AQUA_THEME.colors.primary;
    } else if (theme === 'DARK_PURPLE_THEME') {
        return DarkThemeColors.DARK_PURPLE_THEME.colors.primary;
    } else if (theme === 'DARK_GREEN_THEME') {
        return DarkThemeColors.DARK_GREEN_THEME.colors.primary;
    } else if (theme === 'DARK_CYAN_THEME') {
        return DarkThemeColors.DARK_CYAN_THEME.colors.primary;
    } else if (theme === 'DARK_ORANGE_THEME') {
        return DarkThemeColors.DARK_ORANGE_THEME.colors.primary;
    } else if (theme === 'DARK_BLUE_THEME') {
        return DarkThemeColors.DARK_BLUE_THEME.colors.primary;
    } else {
        return themeColors.BLUE_THEME.colors.primary;
    }
});

const getLightPrimary = computed(() => {
    if (theme === 'AQUA_THEME') {
        return themeColors.AQUA_THEME.colors.lightprimary;
    } else if (theme === 'PURPLE_THEME') {
        return themeColors.PURPLE_THEME.colors.lightprimary;
    } else if (theme === 'GREEN_THEME') {
        return themeColors.GREEN_THEME.colors.lightprimary;
    } else if (theme === 'CYAN_THEME') {
        return themeColors.CYAN_THEME.colors.lightprimary;
    } else if (theme === 'ORANGE_THEME') {
        return themeColors.ORANGE_THEME.colors.lightprimary;
    }
    if (theme === 'DARK_AQUA_THEME') {
        return DarkThemeColors.DARK_AQUA_THEME.colors.lightprimary;
    } else if (theme === 'DARK_PURPLE_THEME') {
        return DarkThemeColors.DARK_PURPLE_THEME.colors.lightprimary;
    } else if (theme === 'DARK_GREEN_THEME') {
        return DarkThemeColors.DARK_GREEN_THEME.colors.lightprimary;
    } else if (theme === 'DARK_CYAN_THEME') {
        return DarkThemeColors.DARK_CYAN_THEME.colors.lightprimary;
    } else if (theme === 'DARK_ORANGE_THEME') {
        return DarkThemeColors.DARK_ORANGE_THEME.colors.lightprimary;
    } else if (theme === 'DARK_BLUE_THEME') {
        return DarkThemeColors.DARK_BLUE_THEME.colors.lightprimary;
    } else {
        return themeColors.BLUE_THEME.colors.lightprimary;
    }
});

const getSecondary = computed(() => {
    if (theme === 'AQUA_THEME') {
        return themeColors.AQUA_THEME.colors.secondary;
    } else if (theme === 'PURPLE_THEME') {
        return themeColors.PURPLE_THEME.colors.secondary;
    } else if (theme === 'GREEN_THEME') {
        return themeColors.GREEN_THEME.colors.secondary;
    } else if (theme === 'CYAN_THEME') {
        return themeColors.CYAN_THEME.colors.secondary;
    } else if (theme === 'ORANGE_THEME') {
        return themeColors.ORANGE_THEME.colors.secondary;
    } else if (theme === 'DARK_AQUA_THEME') {
        return DarkThemeColors.DARK_AQUA_THEME.colors.secondary;
    } else if (theme === 'DARK_PURPLE_THEME') {
        return DarkThemeColors.DARK_PURPLE_THEME.colors.secondary;
    } else if (theme === 'DARK_GREEN_THEME') {
        return DarkThemeColors.DARK_GREEN_THEME.colors.secondary;
    } else if (theme === 'DARK_CYAN_THEME') {
        return DarkThemeColors.DARK_CYAN_THEME.colors.secondary;
    } else if (theme === 'DARK_ORANGE_THEME') {
        return DarkThemeColors.DARK_ORANGE_THEME.colors.secondary;
    } else if (theme === 'DARK_BLUE_THEME') {
        return DarkThemeColors.DARK_BLUE_THEME.colors.secondary;
    } else {
        return themeColors.BLUE_THEME.colors.secondary;
    }
});

const getLightSecondary = computed(() => {
    if (theme === 'AQUA_THEME') {
        return themeColors.AQUA_THEME.colors.lightsecondary;
    } else if (theme === 'PURPLE_THEME') {
        return themeColors.PURPLE_THEME.colors.lightsecondary;
    } else if (theme === 'GREEN_THEME') {
        return themeColors.GREEN_THEME.colors.lightsecondary;
    } else if (theme === 'CYAN_THEME') {
        return themeColors.CYAN_THEME.colors.lightsecondary;
    } else if (theme === 'ORANGE_THEME') {
        return themeColors.ORANGE_THEME.colors.lightsecondary;
    } if (theme === 'DARK_AQUA_THEME') {
        return DarkThemeColors.DARK_AQUA_THEME.colors.lightsecondary;
    } else if (theme === 'DARK_PURPLE_THEME') {
        return DarkThemeColors.DARK_PURPLE_THEME.colors.lightsecondary;
    } else if (theme === 'DARK_GREEN_THEME') {
        return DarkThemeColors.DARK_GREEN_THEME.colors.lightsecondary;
    } else if (theme === 'DARK_CYAN_THEME') {
        return DarkThemeColors.DARK_CYAN_THEME.colors.lightsecondary;
    } else if (theme === 'DARK_ORANGE_THEME') {
        return DarkThemeColors.DARK_ORANGE_THEME.colors.lightsecondary;
    } else if (theme === 'DARK_BLUE_THEME') {
        return DarkThemeColors.DARK_BLUE_THEME.colors.lightsecondary;
    } else {
        return themeColors.BLUE_THEME.colors.lightsecondary;
    }
});

const getLight100 = computed(() => {
    if (
        theme === 'AQUA_THEME' ||
        theme === 'PURPLE_THEME' ||
        theme === 'GREEN_THEME' ||
        theme === 'CYAN_THEME' ||
        theme === 'ORANGE_THEME'
    ) {
        return themeColors.AQUA_THEME.colors.grey100;
    } else if (
        theme === 'DARK_AQUA_THEME' ||
        theme === 'DARK_PURPLE_THEME' ||
        theme === 'DARK_GREEN_THEME' ||
        theme === 'DARK_CYAN_THEME' ||
        theme === 'DARK_ORANGE_THEME' ||
        theme === 'DARK_BLUE_THEME'
    ) {
        return DarkThemeColors.DARK_AQUA_THEME.colors.grey100;
    } else {
        return themeColors.BLUE_THEME.colors.grey100;
    }
});

export { getPrimary, getSecondary, getLightPrimary, getLightSecondary, getLight100 };
