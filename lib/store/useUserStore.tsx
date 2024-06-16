import { create } from "zustand";

interface UserState {
  isLoggedIn: boolean;
  username: string | null;
  userLogin: (username: string) => void;
  userLogout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  isLoggedIn: false,
  username: null,
  userLogin: (username) => {
    //为cookie设置1小时过期时间
    document.cookie = `isLoggedIn=true; max-age=3600; path=/`;
    document.cookie = `username=${username}; max-age=3600; path=/`;
    set({ isLoggedIn: true, username });
  },
  userLogout: () => {
    //清空cookie
    document.cookie = `isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    document.cookie = `username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    set({ isLoggedIn: false, username: null });
  },
}));

export default useUserStore;
