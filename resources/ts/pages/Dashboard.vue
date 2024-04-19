<script setup lang="ts">
import { ref } from 'vue';
import FullLayout from '@/layouts/full/FullLayout.vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

defineOptions({
    layout: FullLayout
})

const page = ref({ title: 'Welcome Page' });

const breadcrumbs = ref([
    {
        title: page.value.title,
        disabled: true,
    }
]);
</script>

<template>
    <Head :title="page.title" />

    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>

    <v-row>
        <v-col cols="12" md="12">
            <UiParentCard title="Simple Title">Welcome</UiParentCard>
        </v-col>
    </v-row>
</template>
