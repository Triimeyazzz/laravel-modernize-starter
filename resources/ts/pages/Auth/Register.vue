<script setup lang="ts">
import Logo from '@/layouts/full/logo/Logo.vue';
import RegisterForm from '@/components/auth/RegisterForm.vue';
</script>

<template>
    <Head title="Register" />

    <div class="authentication">
        <v-container fluid class="pa-3">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col cols="12" class="d-flex align-center">
                    <v-card rounded="md" elevation="10" class="px-sm-1 px-0  mx-auto" max-width="450">
                        <v-card-item class="pa-sm-8">
                            <div class="d-flex justify-center py-4 mb-5"><Logo /></div>
                            <!-- <div class="text-h6 text-medium-emphasis text-center mb-6">Your Social Campaigns</div> -->
                            <RegisterForm />
                            <h6 class="text-h6 text-medium-emphasis d-flex justify-center align-center mt-3">
                                Already have an Account?
                                <Link variant="plain" :href="route('login')" class="text-primary text-body-1 opacity-1 pl-2">Sign In</Link>
                            </h6>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
