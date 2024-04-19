<script setup lang="ts">
import RtlDarklogo from '@/assets/images/logos/light-logo-rtl.svg';

</script>
<template>
    <div class="logo">
        <Link :href="route('home')">
            <img :src="RtlDarklogo" alt="home" />
        </Link>
    </div>
</template>
