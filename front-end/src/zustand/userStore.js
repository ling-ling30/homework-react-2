import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  loading: true,
  error: null,
  setError: (error) => set({ error }),
  setUser: (user) => set({ user, loading: false }),
}));

export default useUserStore;
