<script setup>
import LogoLightRtl from "./LogoLightRtl.vue";
import LogoDarkRtl from "./LogoDarkRtl.vue";
</script>

<template>
    <LogoLightRtl v-if="$page.props.auth.user.config.theme.startsWith('DARK')" />
    <LogoDarkRtl v-else />
</template>
