<script setup lang="ts">
import { ref } from 'vue';
import google from '@/assets/images/svgs/google-icon.svg';
import facebook from '@/assets/images/svgs/facebook-icon.svg';
import { useForm } from '@inertiajs/vue3';

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => {
            form.reset('password');
        },
    });
};
</script>

<template>
    <v-row class="d-flex mb-3">
        <v-col cols="6" sm="6" >
            <v-btn variant="outlined" size="large" class="border text-subtitle-1" block>
                <img :src="google" height="16" class="mr-2" alt="google" />
                <span class="d-sm-flex d-none mr-1">Sign in with</span>Google
            </v-btn>
        </v-col>
        <v-col cols="6" sm="6">
            <v-btn variant="outlined" size="large" class="border text-subtitle-1" block>
                <img :src="facebook" width="25" height="25" class="mr-1" alt="facebook" />
                <span class="d-sm-flex d-none mr-1">Sign in with</span>FB
            </v-btn>
        </v-col>
    </v-row>
    <div class="d-flex align-center text-center mb-6">
        <div class="text-h6 w-100 px-5 font-weight-regular auth-divider position-relative">
            <span class="bg-surface px-5 py-3 position-relative">or sign in with</span>
        </div>
    </div>
    <form @submit.prevent="submit" class="mt-5">
        <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">Email Address</v-label>
        <VTextField
            v-model="form.email"
            :error-messages="form.errors.email"
            class="mb-8"
            required
            hide-details="auto"
        ></VTextField>
        <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">Password</v-label>
        <VTextField
            v-model="form.password"
            :error-messages="form.errors.password"
            required
            hide-details="auto"
            type="password"
            class="pwdInput"
        ></VTextField>
        <div class="d-flex flex-wrap align-center my-3 ml-n2">
            <v-checkbox v-model="form.remember" hide-details color="primary">
                <template v-slot:label class="">Remeber this Device</template>
            </v-checkbox>
            <div class="ml-sm-auto">
                <Link :href="route('password.request')" class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
                    >Forgot Password ?</Link
                >
            </div>
        </div>
        <v-btn size="large" :loading="form.processing" color="primary" :disabled="form.processing" block type="submit" flat>Sign In</v-btn>
    </form>
</template>
