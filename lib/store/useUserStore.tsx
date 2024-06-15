import create from "zustand";

interface UserState {
  isLoggedIn: boolean;
  username: string | null;
  login: (username: string) => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  isLoggedIn: false,
  username: null,
  login: (username) => set({ isLoggedIn: true, username }),
  logout: () => set({ isLoggedIn: false, username: null }),
}));

export default useUserStore;
