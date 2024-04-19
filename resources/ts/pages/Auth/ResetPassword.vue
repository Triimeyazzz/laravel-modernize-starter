<script setup lang="ts">
import Logo from "@/layouts/full/logo/Logo.vue";
import BlankLayout from "@/layouts/BlankLayout.vue";
import { useForm } from "@inertiajs/vue3";

defineOptions({
    layout: BlankLayout,
});

const props = defineProps<{
    email: string;
    token: string;
}>();

const form = useForm<{
    token: string;
    email: string;
    password: string;
    password_confirmation: string;
}>({
    token: props.token,
    email: props.email,
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.post(route("password.store"), {
        onFinish: () => {
            form.reset("password", "password_confirmation");
        },
    });
};
</script>

<template>

    <Head title="Reset Password" />

    <div class="authentication">
        <v-container fluid class="pa-3">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col cols="12" lg="4" xl="5" class="d-flex align-center">
                    <v-card rounded="md" elevation="10" class="px-sm-1 px-0 mx-auto">
                        <v-card-item class="pa-sm-8">
                            <div class="d-flex justify-center my-5">
                                <Logo />
                            </div>
                            <p class="text-subtitle-1 text-center text-10">
                                Reset password for: {{ props.email }}.
                            </p>
                            <VLabel class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">
                                Password
                            </VLabel>
                            <VTextField v-model="form.password" :error-messages="form.errors.password" required type="password" />
                            <VLabel class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">
                                Confirm Password
                            </VLabel>
                            <VTextField v-model="form.password_confirmation" :error-messages="form.errors.password_confirmation" required type="password" />
                            <VBtn size="large" color="primary" block submit flat @click="submit">Reset Password</VBtn>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
