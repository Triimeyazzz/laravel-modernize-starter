<script setup lang="ts">
import Logo from "@/layouts/full/logo/Logo.vue";
import BlankLayout from "@/layouts/BlankLayout.vue";
import { useForm } from "@inertiajs/vue3";

defineOptions({
    layout: BlankLayout,
});

const form = useForm({
    password: "",
});

const submit = () => {
    form.post(route("password.confirm"), {
        onFinish: () => {
            form.reset();
        },
    });
};
</script>

<template>
    <Head title="Forgot Password" />

    <div class="authentication">
        <v-container fluid class="pa-3">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col cols="12" lg="4" xl="5" class="d-flex align-center">
                    <v-card
                        rounded="md"
                        elevation="10"
                        class="px-sm-1 px-0 mx-auto"
                    >
                        <v-card-item class="pa-sm-8">
                            <div class="d-flex justify-center my-5">
                                <Logo />
                            </div>
                            <p class="text-subtitle-1 text-center text-10">
                                This is a secure area of the application. Please
                                confirm your password before continuing.
                            </p>
                            <div class="mt-sm-13 mt-8">
                                <VLabel class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">
                                    Password
                                </VLabel>
                                <VTextField
                                    v-model="form.password"
                                    :error-messages="form.errors.password"
                                    required
                                    type="password"
                                />
                                <VBtn
                                    size="large"
                                    color="primary"
                                    block
                                    submit
                                    flat
                                    @click="submit"
                                >
                                    Confirm
                                </VBtn>
                            </div>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
