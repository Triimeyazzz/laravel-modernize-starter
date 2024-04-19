<script setup lang="ts">
import Logo from "@/layouts/full/logo/Logo.vue";
import BlankLayout from "@/layouts/BlankLayout.vue";
import { useForm } from "@inertiajs/vue3";

defineOptions({
    layout: BlankLayout,
});

const form = useForm({});
</script>

<template>
    <Head title="Email Verification" />

    <div class="authentication">
        <v-container fluid class="pa-3">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col cols="12" class="d-flex align-center">
                    <v-card
                        rounded="md"
                        elevation="10"
                        class="px-sm-1 px-0 mx-auto"
                        max-width="450"
                    >
                        <v-card-item class="pa-sm-8">
                            <div class="d-flex justify-center py-4 mb-5">
                                <Logo />
                            </div>

                            <div class="mb-8 text-sm-body-1">
                                Thanks for signing up! Before getting started,
                                could you verify your email address by clicking
                                on the link we just emailed to you? If you
                                didn't receive the email, we will gladly send
                                you another.
                            </div>

                            <form
                                @submit.prevent="form.post(route('verification.send'))"
                                class="mt-5 d-flex items-center justify-space-between"
                            >
                                <v-btn
                                    size="large"
                                    :loading="form.processing"
                                    color="primary"
                                    :disabled="form.processing"
                                    type="submit"
                                    flat
                                >
                                    Resend Verification Email
                                </v-btn>
                                <Link
                                    :href="route('logout')"
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Link>
                            </form>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
