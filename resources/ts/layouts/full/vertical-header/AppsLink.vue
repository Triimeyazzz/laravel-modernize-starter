<script setup lang="ts">
type AppsLink = {
    avatar: string;
    title: string;
    subtext: string;
    href: string;
};

import img1 from '@/assets/images/svgs/icon-dd-chat.svg';
import img2 from '@/assets/images/svgs/icon-dd-cart.svg';
import img3 from '@/assets/images/svgs/icon-dd-invoice.svg';
import img4 from '@/assets/images/svgs/icon-dd-date.svg';
import img5 from '@/assets/images/svgs/icon-dd-mobile.svg';
import img6 from '@/assets/images/svgs/icon-dd-lifebuoy.svg';
import img7 from '@/assets/images/svgs/icon-dd-message-box.svg';
import img8 from '@/assets/images/svgs/icon-dd-application.svg';

const appsLink: AppsLink[] = [
    {
        avatar: img1,
        title: 'Chat Application',
        subtext: 'New messages arrived',
        href: '/apps/chats'
    },
    {
        avatar: img2,
        title: 'eCommerce App',
        subtext: 'learn more information',
        href: '/ecommerce/products'
    },
    {
        avatar: img3,
        title: 'User Profile App',
        subtext: 'Get profile details',
        href: '/apps/user/profile'
    },
    {
        avatar: img4,
        title: 'Calendar App',
        subtext: 'Get dates',
        href: '/apps/calendar'
    },
    {
        avatar: img5,
        title: 'Contact Application',
        subtext: '2 Unsaved Contacts',
        href: '/apps/contacts'
    },
    {
        avatar: img6,
        title: 'Account Setting App',
        subtext: 'Account settings',
        href: '/pages/account-settings'
    },
    {
        avatar: img7,
        title: 'Email App',
        subtext: 'Get new emails',
        href: '/'
    },
    {
        avatar: img8,
        title: 'Notes Application',
        subtext: 'To-do and Daily tasks',
        href: '/apps/notes'
    }
];
</script>

<template>
    <v-row>
        <v-col cols="12" lg="6" v-for="(item, i) in appsLink" :key="i">
            <Link :href="item.href" class="text-decoration-none custom-text-primary">
                <div class="d-flex align-center">
                    <v-avatar size="45" color="grey100" rounded="md">
                        <v-img :src="item.avatar" width="24" height="24" :alt="item.avatar" />
                    </v-avatar>
                    <div class="ml-3">
                        <h6 class="text-subtitle-1 mb-1 textPrimary font-weight-semibold custom-title">{{ item.title }}</h6>
                        <p class="text-subtitle-2 textSecondary">{{ item.subtext }}</p>
                    </div>
                </div>
            </Link>
        </v-col>
    </v-row>
</template>
