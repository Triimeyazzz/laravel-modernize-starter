import {
    CircleIcon,
    HomeIcon,
    ClipboardIcon,
    AlertCircleIcon,
    SettingsIcon,
    LoginIcon,
    UserPlusIcon,
    RotateIcon,
    ZoomCodeIcon,
    FileDescriptionIcon,
    BorderAllIcon,
    AppsIcon,
    PointIcon,
    UsersIcon
} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    divider?: boolean;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    subCaption?: string;
    class?: string;
    extraclass?: string;
    type?: string;
}

const horizontalItems: menu[] = [
    {
        title: 'Home',
        icon: HomeIcon,
        to: '/'
    },
    {
        title: 'Users',
        icon: UsersIcon,
        to: '/users'
    },
    {
        title: 'Example',
        icon: FileDescriptionIcon,
        to: '#',
        children: [
            {
                title: 'Level 1',
                icon: CircleIcon,
                to: '/components/',
                children: [
                    {
                        title: 'Level 2',
                        icon: CircleIcon,
                        to: '#'
                    },
                ]
            },
        ]
    },
];

export default horizontalItems;
