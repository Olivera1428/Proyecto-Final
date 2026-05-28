import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      esAdmin: false,

      loginAdmin: () => set({ esAdmin: true }),

      logout: () => set({ esAdmin: false }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
