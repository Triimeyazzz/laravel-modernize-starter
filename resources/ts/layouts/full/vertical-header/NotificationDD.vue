<script setup lang="ts">
import { BellRingingIcon } from 'vue-tabler-icons';

import user1 from '@/assets/images/profile/user-1.jpg';
import user2 from '@/assets/images/profile/user-2.jpg';
import user3 from '@/assets/images/profile/user-3.jpg';
import user4 from '@/assets/images/profile/user-4.jpg';
import user5 from '@/assets/images/profile/user-5.jpg';

type Notification = {
    avatar: string;
    title: string;
    subtitle: string;
};

const notifications: Notification[] = [
    {
        avatar: user1,
        title: 'Roman Joined the Team!',
        subtitle: 'Congratulate him'
    },
    {
        avatar: user2,
        title: 'New message received',
        subtitle: 'Salma sent you new message'
    },
    {
        avatar: user3,
        title: 'New Payment received',
        subtitle: 'Check your earnings'
    },
    {
        avatar: user4,
        title: 'Jolly completed tasks',
        subtitle: 'Assign her new tasks'
    },
    {
        avatar: user5,
        title: 'New Payment received',
        subtitle: 'Check your earnings'
    },
    {
        avatar: user1,
        title: 'Roman Joined the Team!',
        subtitle: 'Congratulate him'
    }
];
</script>

<template>
    <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-btn icon variant="text" color="primary" class="custom-hover-primary" v-bind="props">
                <v-badge dot color="primary">
                    <BellRingingIcon stroke-width="1.5" size="22" />
                </v-badge>
            </v-btn>
        </template>
        <v-sheet rounded="md" width="360" elevation="10">
            <div class="px-8 pb-4 pt-6">
                <div class="d-flex align-center justify-space-between">
                    <h6 class="text-h5">Notifications</h6>
                    <v-chip color="primary" variant="flat" size="small" class="text-white">5 New</v-chip>
                </div>
            </div>
            <PerfectScrollbar style="height: 400px">
                <v-list class="py-0 theme-list" lines="two">
                    <v-list-item v-for="item in notifications" :key="item.title" :value="item" active-color="primary"
                        class="py-4 px-8">
                        <template v-slot:prepend>
                            <v-avatar size="48" class="mr-3">
                                <v-img :src="item.avatar" width="48" :alt="item.avatar" />
                            </v-avatar>
                        </template>
                        <div>
                            <h6 class="text-subtitle-1 font-weight-bold mb-1">{{ item.title }}</h6>
                        </div>
                        <p class="text-subtitle-1 font-weight-regular textSecondary">{{ item.subtitle }}</p>
                    </v-list-item>
                    <v-divider></v-divider>
                </v-list>
            </PerfectScrollbar>
            <div class="py-4 px-6 text-center">
                <v-btn color="primary" variant="outlined" block>See all Notifications</v-btn>
            </div>
        </v-sheet>
    </v-menu>
</template>
