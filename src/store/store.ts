import { create } from "zustand";

const useStore = create((set) => ({
  isLogin: false,
  login: () => set((state) => ({ isLogin: true })),
  logout: () => set((state) => ({ isLogin: false })),
}));

export default useStore;
