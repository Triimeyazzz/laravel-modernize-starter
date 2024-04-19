<script setup lang="ts">
import flag1 from '@/assets/images/flag/icon-flag-en.svg';
import flag2 from '@/assets/images/flag/icon-flag-ro.svg';
import { useI18n } from 'vue-i18n';
import { router, usePage } from '@inertiajs/vue3';
import { onMounted } from 'vue';

type Language = {
    avatar: string;
    title: string;
    subtext: string;
    value: string;
};

const languages: Language[] = [
    { title: 'English', subtext: 'UK', value: 'en', avatar: flag1 },
    { title: 'العربية', subtext: 'Arabic', value: 'ar', avatar: flag2 },
];

const { locale } = useI18n();

onMounted(function() {
    locale.value = usePage().props.auth.user.config.locale ?? 'en';
})

const updateLocale = (loc: string) => {
    router.put(route('config.update'), {locale: loc}, {
        onSuccess: () => locale.value = loc
    })
}
</script>

<template>
    <v-menu :close-on-content-click="false" location="bottom">
        <template v-slot:activator="{ props }">
            <v-btn icon variant="text" color="primary" v-bind="props">
                <v-avatar size="22">
                    <img v-if="$i18n.locale === 'en'" :src="flag1" :alt="$i18n.locale" width="22" height="22" class="obj-cover" />
                    <img v-if="$i18n.locale === 'ar'" :src="flag2" :alt="$i18n.locale" width="22" height="22" class="obj-cover" />
                </v-avatar>
            </v-btn>
        </template>
        <v-sheet rounded="md" width="200" elevation="10">
            <v-list class="theme-list">
                <v-list-item
                    v-for="(item, index) in languages"
                    :key="index"
                    active-color="primary"
                    :active="$i18n.locale == item.value"
                    class="d-flex align-center"
                    @click="updateLocale(item.value)"
                >
                    <template v-slot:prepend>
                        <v-avatar size="22">
                            <img :src="item.avatar" :alt="item.avatar" width="22" height="22" class="obj-cover" />
                        </v-avatar>
                    </template>
                    <v-list-item-title class="text-subtitle-1 font-weight-regular">
                        {{ item.title }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-sheet>
    </v-menu>
</template>
