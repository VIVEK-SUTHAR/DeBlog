import create from 'zustand'

const useStore = create((set) => ({
  currentAccount: "all",
  setCurrentAccount: (value) => set({currentAccount: value}),
}))

export default useStore;