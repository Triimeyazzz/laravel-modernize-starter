<script setup lang="ts">
import { MailIcon } from 'vue-tabler-icons';
import { router } from '@inertiajs/vue3';
import proUser1 from '@/assets/images/svgs/icon-account.svg';
import proUser2 from '@/assets/images/svgs/icon-inbox.svg';
import proUser3 from '@/assets/images/svgs/icon-tasks.svg';

type ProfileMenuItem = {
    avatar: string;
    title: string;
    subtitle: string;
    href: string;
};

const profileDD: ProfileMenuItem[] = [
    {
        avatar: proUser1,
        title: 'My Profile',
        subtitle: 'Account settings',
        href: 'profile'
    },
    {
        avatar: proUser2,
        title: 'My Inbox',
        subtitle: 'Messages & Emails',
        href: '/'
    },
    {
        avatar: proUser3,
        title: 'My Tasks',
        subtitle: 'To-do and Daily tasks',
        href: '/'
    }
];

</script>

<template>
    <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-btn class="custom-hover-primary" variant="text" v-bind="props" icon>
                <v-avatar size="35">
                    <img src="@/assets/images/profile/user-1.jpg" width="35" alt="Julia" />
                </v-avatar>
            </v-btn>
        </template>
        <v-sheet rounded="md" width="360" elevation="10">
            <div class="px-8 pt-6">
                <h6 class="text-h5 font-weight-medium">User Profile</h6>
                <div class="d-flex align-center mt-4 pb-6">
                    <v-avatar size="80">
                        <img src="@/assets/images/profile/user-1.jpg" width="80" />
                    </v-avatar>
                    <div class="ml-3">
                        <h6 class="text-h6 mb-n1">{{ $page.props.auth.user.name }}</h6>
                        <span class="text-subtitle-1 font-weight-regular textSecondary">Administrator</span>
                        <div class="d-flex align-center mt-1">
                            <MailIcon size="18" stroke-width="1.5" />
                            <span class="text-subtitle-1 font-weight-regular textSecondary ml-2">
                                {{ $page.props.auth.user.email }}
                            </span>
                        </div>
                    </div>
                </div>
                <v-divider></v-divider>
            </div>
            <PerfectScrollbar style="height: calc(100vh - 240px); max-height: 240px">
                <v-list class="py-0 theme-list" lines="two">
                    <v-list-item v-for="item in profileDD" :key="item.title" class="py-4 px-8 custom-text-primary" :to="item.href">
                        <template v-slot:prepend>
                            <v-avatar size="48" color="lightprimary" class="mr-3" rounded="md">
                                <v-img :src="item.avatar" width="24" height="24" :alt="item.avatar" />
                            </v-avatar>
                        </template>
                        <div>
                            <h6 class="text-subtitle-1 font-weight-bold mb-2 custom-title">{{ item.title }}</h6>
                        </div>
                        <p class="text-subtitle-1 font-weight-regular textSecondary">{{ item.subtitle }}</p>
                    </v-list-item>
                </v-list>
            </PerfectScrollbar>
            <div class="pt-4 pb-6 px-8 text-center">
                <v-btn color="primary" variant="outlined" block @click.prevent="router.post(route('logout'))">Logout</v-btn>
            </div>
        </v-sheet>
    </v-menu>
</template>
