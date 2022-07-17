import create from 'zustand'

const useStore = create((set) => ({
  currentAccount: "all",
  writeBlog: false,
  setCurrentAccount: (value) => set({currentAccount: value}),
  setWriteBlog: (value) => set({writeBlog: value}),
}))

export default useStore;