import { create } from "zustand"
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from "@react-native-async-storage/async-storage"


import { ProductProps } from "../../utils/data/products"
import * as cartInMemory from './helpers/cart-in-memory'



export type ProductCartProps = ProductProps & {
    quantity: number
}

type StateProps = {
    product: ProductCartProps[]
    add: (product: ProductProps) => void
    remove: (productId: string) => void
    clear: () => void
}

export const userCartStore = create(
    persist<StateProps>((set) => ({
    product: [],

    add: (product: ProductProps) => 
        set((state) => ({
            product: cartInMemory.add(state.product, product)
        })),

    remove: (productId: string) => 
    set((state) => ({
        product: cartInMemory.remove(state.product, productId)
    })),

    clear: () => set(() => ({ product: [] }))
    
}), {
    name: 'nlw-expert:cart',
    storage: createJSONStorage(() => AsyncStorage),
}))