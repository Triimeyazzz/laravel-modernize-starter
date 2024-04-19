<script setup>
import LogoLight from "./LogoLight.vue";
import LogoDark from "./LogoDark.vue";
</script>
<template>
    <LogoLight v-if="$page.props.auth.user?.config.theme.startsWith('DARK')" />
    <LogoDark v-else />
</template>
