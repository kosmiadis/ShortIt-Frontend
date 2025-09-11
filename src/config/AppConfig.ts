interface AppConfigI {
    baseUrl: string;
    nodeEnv: 'development' | 'production';
}

export const AppConfig: AppConfigI = {
    baseUrl: 'http://localhost:3000',
    nodeEnv: 'development'
}