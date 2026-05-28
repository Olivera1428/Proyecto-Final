import { create } from "zustand";

const useAuthStore = create((set) => ({
  esAdmin: false,

  loginAdmin: () => set({ esAdmin: true }),

  logout: () => set({ esAdmin: false }),
}));

export default useAuthStore;
