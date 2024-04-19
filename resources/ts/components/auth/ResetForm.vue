<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';

const form = useForm({
    email: '',
});
</script>

<template>
    <div class="mt-sm-13 mt-8">
        <VLabel class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">Email Address</VLabel>
        <VTextField v-model="form.email" :error-messages="form.errors.email" required type="email" />
        <VBtn size="large" color="primary" block submit flat @click="form.post(route('password.email'))">Forgot Password</VBtn>
    </div>
</template>
