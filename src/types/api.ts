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
    email: string;
    urls: string[];
}>

export type AuthResponse = {
    message: string;
    user: User;
}