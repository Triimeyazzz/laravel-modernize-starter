<script setup lang="ts">
import { CircleXIcon } from 'vue-tabler-icons';
import { CircleCheckIcon } from 'vue-tabler-icons';
</script>

<template>
    <v-locale-provider :rtl="false">
        <v-app :theme="$page.props.auth.user?.config.theme">
            <slot />
        </v-app>
    </v-locale-provider>

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
</template>
