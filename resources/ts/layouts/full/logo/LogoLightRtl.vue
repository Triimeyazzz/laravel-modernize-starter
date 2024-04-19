<script setup lang="ts">
import RtlLightlogo from '@/assets/images/logos/dark-rtl-logo.svg';

</script>
<template>
    <div class="logo">
        <Link :href="route('home')">
            <img :src="RtlLightlogo" alt="home" />
        </Link>
    </div>
</template>
