<script setup lang="ts">
import { ref } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import EditableTable from './UsersTable.vue';
import FullLayout from '@/layouts/full/FullLayout.vue';

defineOptions({
    layout: FullLayout,
})

const { users } = defineProps(['users'])

const page = ref<{ title: string }>({ title: 'Users' });

const breadcrumbs = ref([
    {
        title: 'Users',
        disabled: true,
    }
]);
</script>

<template>
    <Head :title="page.title" />

    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Users">
                <EditableTable :users="users" />
            </UiParentCard>
        </v-col>
    </v-row>
</template>
