import { create } from 'zustand'


const bearsConfig = (set: any) => {
return {
  bears: 7126387,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}
}

const Store = create((set) => ({
  ...bearsConfig(set)


  
}))

export default Store;