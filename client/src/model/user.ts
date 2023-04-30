export interface User {
    _id: string;
    username: string;
    email: string;
    photo?: string;
    password: string;
    isAdmin: boolean;
}