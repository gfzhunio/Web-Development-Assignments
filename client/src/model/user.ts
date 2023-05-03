import axios from "axios";

export interface User {
    _id: string;
    username: string;
    email: string;
    photo?: string;
    password: string;
    isAdmin: boolean;
}

const enum storageKey {
    currentUser = "user",
}

export const LocalStorage = {
    getCurrentUser(): User {
        const user = localStorage.getItem(storageKey.currentUser);
        return user ? JSON.parse(user) : null;
    },

    setCurrentUSer(user: User) {
        localStorage.setItem(storageKey.currentUser, JSON.stringify(user));
    }
}
