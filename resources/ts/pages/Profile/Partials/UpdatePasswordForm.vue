<script setup lang="ts">
import { useForm } from "@inertiajs/vue3";
import { ref } from "vue";

const passwordInput = ref<HTMLInputElement | null>(null);
const currentPasswordInput = ref<HTMLInputElement | null>(null);

const form = useForm({
    current_password: "",
    password: "",
    password_confirmation: "",
});

const updatePassword = () => {
    form.put(route("password.update"), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
        },
        onError: () => {
            if (form.errors.password) {
                form.reset("password", "password_confirmation");
                passwordInput.value?.focus();
            }
            if (form.errors.current_password) {
                form.reset("current_password");
                currentPasswordInput.value?.focus();
            }
        },
    });
};
</script>

<template>
    <v-card elevation="10">
        <v-card-item>
            <h5 class="text-h5">Change Password</h5>
            <div class="text-subtitle-1 text-medium-emphasis mt-2">
                To change your password please confirm here
            </div>
            <div class="mt-5">
                <v-label class="mb-2 font-weight-medium"
                    >Current Password</v-label
                >
                <v-text-field
                    color="primary"
                    variant="outlined"
                    type="password"
                    v-model="form.current_password"
                    ref="currentPasswordInput"
                    :error-messages="form.errors.current_password"
                />
                <v-label class="mb-2 font-weight-medium">New Password</v-label>
                <v-text-field
                    color="primary"
                    variant="outlined"
                    type="password"
                    v-model="form.password"
                    ref="passwordInput"
                    :error-messages="form.errors.password"
                />
                <v-label class="mb-2 font-weight-medium"
                    >Confirm Password</v-label
                >
                <v-text-field
                    color="primary"
                    variant="outlined"
                    type="password"
                    v-model="form.password_confirmation"
                    hide-details
                    :error-messages="form.errors.password_confirmation"
                />
            </div>
            <div class="d-flex justify-end mt-5">
                <v-btn
                    size="large"
                    color="primary"
                    class="mr-4"
                    flat
                    @click="updatePassword"
                    :disabled="! form.isDirty"
                >
                    Save
                </v-btn>
                <v-btn
                    size="large"
                    class="bg-lighterror text-error"
                    flat
                    :disabled="! form.isDirty"
                    @click="form.reset()"
                >
                    Cancel
                </v-btn>
            </div>
        </v-card-item>
    </v-card>
</template>
