import type { User } from "@types/api";
import { create } from "zustand";

interface AuthStoreI {
    user: null | User;
    setUser: (user: null | User) => void;
}

export const useAuth = create<AuthStoreI>()((set) => ({
    user: null,
    setUser: (user) => set(() => ({ user }))
}))