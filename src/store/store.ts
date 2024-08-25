import { create } from "zustand";

interface LoginState {
  isLogin: boolean;
  login: () => void;
  logout: () => void;
}

const useStore = create<LoginState>()((set) => ({
  isLogin: false,
  login: () => set(() => ({ isLogin: true })),
  logout: () => set(() => ({ isLogin: false })),
}));

export default useStore;
