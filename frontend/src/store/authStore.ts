import { create } from "zustand";

interface AuthState {
  user: null | { name: string; email: string };
  setUser: (user: { name: string; email: string }) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));