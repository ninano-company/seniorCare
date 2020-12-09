import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '',
        title: 'Main',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '/dashboard/dashboard1',
        title: '홈',
        icon: 'icon-Car-Wheel',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '',
        title: 'Manage',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: '시설 관리',
        icon: 'icon-Ticket',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/dashboard/facility',
                title: '시설A',
                icon: '',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/dashboard/facility',
                title: '시설B',
                icon: '',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: '시니어 관리',
        icon: 'icon-Ticket',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/dashboard/seniorList',
                title: '시니어 목록',
                icon: '',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/ticketdetails',
                title: '출석부',
                icon: '',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '/apps/email',
        title: 'CCTV 관리',
        icon: 'icon-Mailbox-Empty',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/email',
        title: '돌봄 기기 관리',
        icon: 'icon-Mailbox-Empty',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/email',
        title: '인력 관리',
        icon: 'icon-Mailbox-Empty',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '',
        title: '활동 관리',
        icon: 'icon-Ticket',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/apps/ticketlist',
                title: '목록',
                icon: '',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/ticketlist',
                title: '일정표',
                icon: '',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/ticketdetails',
                title: '사진첩',
                icon: '',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '/apps/email',
        title: '업무 관리',
        icon: 'icon-Mailbox-Empty',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '',
        title: 'Center',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '/apps/email',
        title: '요청 사항',
        icon: 'icon-Mailbox-Empty',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/email',
        title: '이벤트 로그',
        icon: 'icon-Mailbox-Empty',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/email',
        title: '응급 서비스',
        icon: 'icon-Mailbox-Empty',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '',
        title: '자료실',
        icon: 'icon-Ticket',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/apps/ticketlist',
                title: '공지사항',
                icon: '',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/ticketlist',
                title: '동영상',
                icon: '',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/ticketdetails',
                title: '식단표',
                icon: '',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    }
]