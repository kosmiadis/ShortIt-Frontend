export type BaseEntity = {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}

export type Entity<T> = {
    [K in keyof T]: T[K];
} & BaseEntity

export type User = Entity<{
    firstName: string;
    lastName: string;
    age: number;
    password: number;
    email: string;
    urls: string[];
}>

export type PublicUser = Omit<User, 'password'>

export type Url = Entity<{
    title: string;
    description: string | null,
    original: string;
    short: string;
    status: 'enabled' | 'disabled';
    clicks: number;
    analytics: string; //reference to ObjectId (analytic document)
    thumbnail: null // | UrlThumbnail;
}>

export type UrlThumbnail = Entity<{
    url: string; //reference to ObjectId (url document)
    path: string;
}>

export type Notification = Entity<{
    hasImage: boolean;
    imagePath: string | null;
    title: string;
    body: string | null;
    priority: 'low' | 'medium' | 'high';
    category: 'security' | 'analytics' | 'url' | 'info' | 'warning' | 'subscription';
}>

export type CreditCard = Entity<{
    cardNumber: number;
    ownerFullName: string;	
    validThru: Date;
    cvv: number;
}>


export type AuthResponse = {
    message: string;
    user: User;
}

// export type UrlResponse = {

// }

// export type AnalyticsResponse = {

// }