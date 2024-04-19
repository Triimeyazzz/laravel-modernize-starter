<script setup lang="ts">
import UpdatePasswordForm from "./UpdatePasswordForm.vue";
import { useForm, usePage } from "@inertiajs/vue3";

const user = usePage().props.auth.user;

const form = useForm({
    name: user.name,
    email: user.email,
});
</script>

<template>
    <v-card elevation="10">
        <v-row class="ma-sm-n2 ma-n1">
            <v-col cols="12" sm="6">
                <v-card elevation="10">
                    <v-card-item>
                        <h5 class="text-h5">Personal Details</h5>
                        <div class="text-subtitle-1 text-medium-emphasis mt-2">
                            To change your personal detail, edit and save from
                            here
                        </div>
                        <div class="mt-5">
                            <v-row>
                                <v-col cols="12">
                                    <v-label class="mb-2 font-weight-medium"
                                        >Your Name</v-label
                                    >
                                    <v-text-field
                                        color="primary"
                                        variant="outlined"
                                        type="text"
                                        v-model="form.name"
                                        hide-details
                                        :error-messages="form.errors.name"
                                    />
                                </v-col>
                                <v-col cols="12">
                                    <v-label class="mb-2 font-weight-medium">
                                        Your Email
                                    </v-label>
                                    <v-text-field
                                        color="primary"
                                        variant="outlined"
                                        v-model="form.email"
                                        hide-details
                                        type="email"
                                        :error-messages="form.errors.email"
                                    />
                                </v-col>
                            </v-row>
                        </div>
                        <div class="d-flex justify-end mt-5">
                            <v-btn
                                size="large"
                                color="primary"
                                class="mr-4"
                                flat
                                @click="form.patch(route('profile.update'))"
                                :disabled="!form.isDirty"
                            >
                                Save
                            </v-btn>
                            <v-btn
                                size="large"
                                class="bg-lighterror text-error"
                                flat
                                :disabled="!form.isDirty"
                                @click="form.reset()"
                            >
                                Cancel
                            </v-btn>
                        </div>
                    </v-card-item>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6">
                <UpdatePasswordForm />
            </v-col>
        </v-row>
    </v-card>
</template>
