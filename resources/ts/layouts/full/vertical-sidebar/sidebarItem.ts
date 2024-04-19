import {
    CircleOffIcon,
    BoxMultipleIcon,
    StarIcon,
    AwardIcon,
    MoodSmileIcon,
    PointIcon,
    UsersIcon,
    HomeIcon,
} from "vue-tabler-icons";

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    route?: string;
    chip?: string;
    chipBgColor?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: "Home" },
    {
        title: "Home",
        icon: HomeIcon,
        route: 'home',
    },

    { header: "App" },
    {
        title: "Users",
        icon: UsersIcon,
        route: 'users.index',
    },

    { header: "Others" },
    {
        title: "Menu Level",
        icon: BoxMultipleIcon,
        to: "#",
        children: [
            {
                title: "Level 1",
                icon: PointIcon,
                to: "/",
            },
            {
                title: "Level 1",
                icon: PointIcon,
                to: "/",
                children: [
                    {
                        title: "Level 2",
                        icon: PointIcon,
                        to: "/",
                    },
                    {
                        title: "Level 2",
                        icon: PointIcon,
                        to: "/",
                        children: [
                            {
                                title: "Level 3",
                                icon: PointIcon,
                                to: "/",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: "Disabled",
        icon: CircleOffIcon,
        disabled: true,
        to: "/",
    },
    {
        title: "Sub Caption",
        icon: StarIcon,
        subCaption: "This is the subtitle",
        to: "/",
    },
    {
        title: "Chip",
        icon: AwardIcon,
        chip: "9",
        chipColor: "surface",
        chipBgColor: "primary",
        to: "/",
    },
    {
        title: "Outlined",
        icon: MoodSmileIcon,
        chip: "Outline",
        chipColor: "primary",
        chipVariant: "outlined",
        to: "/",
    },
    {
        title: "External Link",
        icon: StarIcon,
        to: "/",
        type: "external",
    },
];

export default sidebarItem;
