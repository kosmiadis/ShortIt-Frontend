export const endpoints = {
    auth: {
        me: {
            getEndpoint: () => '/auth/me'
        },
        login: {
            getEndpoint: () => '/auth/login'
        },
        register: {
            getEndpoint: () => '/auth/register'
        },
        logout: {
            getEndpoint: () => '/auth/logout'
        }
    },
    urls: {
        load: {
            url: {
                getEndpoint: (urlId: string) => `/url/${urlId}`
            },
            urls: {
                getEndpoint: (status?: 'enabled' | 'disabled', limit?: number) => 
                    `/url/urls${limit ? `?limit=${limit}${status ? `&status=${status}` : ''}` : ''}`
            }
        },
        shorten: {
            getEndpoint: () => `/url/shorten`
        },
        enable: {
            getEndpoint: (urlId: string) => `/url/enable?url=${urlId}`
        },
        disable: {
            getEndpoint: (urlId: string) => `/url/disable?url=${urlId}`
        },
        edit: {
            getEndpoint: (urlId: string) => `/url/edit?url=${urlId}`
        }
    },
    dashboard: {
        quickInsights: {
            getEndpoint: () => '/dashboard/quick-insights'
        },
        // for users to contact support
        help: {
            getEndpoint: () => '/dashboard/help'
        }
    },
    analytics: {
        overall: {
            
            traffic: {
                //total traffic of all urls.
                getEndpoint: () => '/analytics/traffic'
            },
            countries: {
                getEndpoint: () => '/analytics/countries'
            },
            devices: {
                getEndpoint: () => '/analytics/devices'
            },
            operatingSystem: {
                getEndpoint: () => '/analytics/os'
            }
        },
        url: {
            traffic: {
                getEndpoint: (urlId: string) => `/analytics/traffic?url=${urlId}`
            },
            countries: {
                getEndpoint: (urlId: string) => `/analytics/traffic?url=${urlId}`
            },
            devices: {
                getEndpoint: (urlId: string) => `/analytics/devices?url=${urlId}`
            },
            operatingSystem: {
                getEndpoint: (urlId: string) => `/analytics/os?url=${urlId}`
            }
        }
    },

    subscription: {
        // add later
    },
    account: {
        user: {
            getEndpoint: () => '/account/me'
        },
        edit: {
            getEndpoint: () => '/account/edit'
        },
        delete: {
            getEndpoint: () => '/account/delete'
        }
    },
    settings: {  }

}