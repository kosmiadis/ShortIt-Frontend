export const paths = {
    auth: {
        root: {
            path: '/auth',
            getHref: () => '/auth'
        },

        register: {
            path: 'register',
            getHref: (redirectTo?: string | null | undefined) => 
                `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}`: ''}`
        },
        login: {
            path: 'login',
            getHref: (redirectTo?: string | null | undefined) => 
                `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}`: ''}`
        },
    },

    app: {
        root: {
            path: '/',
            getHref: () => '/'
        },  

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
            getHref: () => 'links'
        },
        analytics: {
            path: 'analytics',
            getHref: () => 'analytics'
        },
        subscription: {
            path: 'subscription',
            getHref: () => 'subscription'
        },
        settings: {
            path: 'settings',
            getHref: () => 'settings'
        }
    }
} as const;