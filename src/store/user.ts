import { create } from 'zustand'

//global state for setting user info
const useUserStore = create((set) => ({
    userInfo: null,
    setUserStore: (userInfo:any) => set({userInfo}),
}))

export default useUserStore;