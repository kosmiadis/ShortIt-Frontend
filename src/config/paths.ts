export const paths = {
    auth: {
        root: {
            path: '/auth',
            getHref: () => '/auth'
        },

        register: {
            path: 'register',
            getHref: (redirectTo?: string | null | undefined) => 
                `/auth/register${redirectTo ? `?=redirectTo=${encodeURIComponent(redirectTo)}`: ''}`
        },
        login: {
            path: 'login',
            getHref: (redirectTo?: string | null | undefined) => 
                `/auth/login${redirectTo ? `?=redirectTo=${encodeURIComponent(redirectTo)}`: ''}`
        },
    },

    app: {
        home: {
            path: '/',
            getHref: () => '/'
        },
        dashboard: {
            path: 'dashboard',
            getHref: () => '/dashboard'
        },
        links: {
            path: 'links',
            getHref: () => '/dashboard/links'
        },
        analytics: {
            path: 'analytics',
            getHref: () => '/dashboard/analytics'
        },
        subscription: {
            path: 'subscription',
            getHref: () => '/dashboard/subscription'
        },
        settings: {
            path: 'settings',
            getHref: () => '/dashboard/settings'
        }
    }
} as const;