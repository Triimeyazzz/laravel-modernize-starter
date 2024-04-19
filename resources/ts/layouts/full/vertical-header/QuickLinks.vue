<script setup lang="ts">
type QuickLink = {
    title: string;
    href: string;
};

const quickLink: QuickLink[] = [
    {
        title: "Pricing Page",
        href: "/pages/pricing",
    },
    {
        title: "Authentication Design",
        href: "/auth/login",
    },
    {
        title: "Register Now",
        href: "/auth/register",
    },
    {
        title: "404 Error Page",
        href: "/auth/404",
    },
    {
        title: "Notes App",
        href: "/apps/notes",
    },
    {
        title: "User Application",
        href: "/apps/user/profile",
    },
    {
        title: "Blog Design",
        href: "/apps/blog/posts",
    },
    {
        title: "Shopping Cart",
        href: "/ecommerce/checkout",
    },
];


</script>

<template>
    <!-- ---------------------------------------------- -->
    <!-- language DD -->
    <!-- ---------------------------------------------- -->
    <div v-for="(item, i) in quickLink" :key="i" class="py-2">
        <Link :href="item.href" class="text-decoration-none text-hover-primary font-weight-semibold text-subtitle-1">
            {{ item.title }}
        </Link>
    </div>
</template>
