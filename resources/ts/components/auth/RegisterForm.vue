<script setup lang="ts">
import google from "@/assets/images/svgs/google-icon.svg";
import facebook from "@/assets/images/svgs/facebook-icon.svg";
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.post(route("register"), {
        onFinish: () => {
            form.reset("password", "password_confirmation");
        },
    });
};
</script>
<template>
    <v-row class="d-flex mb-6">
        <v-col cols="6" sm="6">
            <v-btn
                variant="outlined"
                size="large"
                class="border text-subtitle-1"
                block
            >
                <img :src="google" height="20" class="mr-2" alt="google" />
                <span class="d-sm-flex d-none mr-1">Sign up with</span>Google
            </v-btn>
        </v-col>
        <v-col cols="6" sm="6">
            <v-btn
                variant="outlined"
                size="large"
                class="border text-subtitle-1"
                block
            >
                <img
                    :src="facebook"
                    width="25"
                    height="30"
                    class="mr-1"
                    alt="facebook"
                />
                <span class="d-sm-flex d-none mr-1">Sign up with</span>FB
            </v-btn>
        </v-col>
    </v-row>
    <div class="d-flex align-center text-center mb-6">
        <div
            class="text-h6 w-100 px-5 font-weight-regular auth-divider position-relative"
        >
            <span class="bg-surface px-5 py-3 position-relative"
                >or sign in with</span
            >
        </div>
    </div>
    <form class="mt-5">
        <v-label class="text-subtitle-1 font-weight-medium pb-2">Name</v-label>
        <VTextField v-model="form.name" :error-messages="form.errors.name" required></VTextField>
        <v-label class="text-subtitle-1 font-weight-medium pb-2"
            >Email Adddress</v-label
        >
        <VTextField v-model="form.email" :error-messages="form.errors.email" required type="email"></VTextField>
        <v-label class="text-subtitle-1 font-weight-medium pb-2"
            >Password</v-label
        >
        <VTextField
            v-model="form.password"
            :error-messages="form.errors.password"
            :counter="10"
            required
            variant="outlined"
            type="password"
            color="primary"
        ></VTextField>
        <v-label class="text-subtitle-1 font-weight-medium pb-2"
            >Password Confirmation</v-label
        >
        <VTextField
            v-model="form.password_confirmation"
            :counter="10"
            required
            variant="outlined"
            type="password"
            color="primary"
        ></VTextField>
        <v-btn size="large" class="mt-2" color="primary" block submit flat @click.prevent="submit">
            Sign Up
        </v-btn>
    </form>
</template>
