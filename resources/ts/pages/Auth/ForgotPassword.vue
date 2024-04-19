<script setup lang="ts">
import Logo from '@/layouts/full/logo/Logo.vue';
import ResetPassword from '@/components/auth/ResetForm.vue';
import BlankLayout from "@/layouts/BlankLayout.vue"
defineOptions({
    layout: BlankLayout
})
</script>

<template>
    <Head title="Forgot Password" />

    <div class="authentication">
        <v-container fluid class="pa-3">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col cols="12" lg="4" xl="5" class="d-flex align-center">
                    <v-card rounded="md" elevation="10" class="px-sm-1 px-0  mx-auto">
                        <v-card-item class="pa-sm-8">
                            <div class="d-flex justify-center my-5">
                                <Logo />
                            </div>
                            <p class="text-subtitle-1 text-center text-10">
                                Please enter the email address associated with your account and We will email you a link
                                to reset your password.
                            </p>
                            <ResetPassword />
                            <Link :href="route('login')" class="text-decoration-none">
                                <VBtn size="large" block class="mt-5 text-primary" flat color="lightprimary">Back to Login</VBtn>
                            </Link>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
