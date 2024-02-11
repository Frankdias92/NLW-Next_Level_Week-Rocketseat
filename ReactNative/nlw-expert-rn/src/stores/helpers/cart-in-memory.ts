import { ProductProps } from "../../../utils/data/products";
import { ProductCartProps } from "../cart-store";

export function add(product: ProductCartProps[], newProduct: ProductProps) {
    const existingProduct = product.find(({ id }) => newProduct.id === id)

    if (existingProduct) {
        return product.map((product) => product.id === existingProduct.id
        ? { ...product, quantity: product.quantity += 1 }
        : product)
    }

    return [...product, { ...newProduct, quantity: 1 }]
}

export function remove(product: ProductCartProps[], productRemovedId: string) {
    const updateProducts = product.map((product) => 
    product.id === productRemovedId ? {
        ...product,
        quantity: product.quantity > 1 ? product.quantity -1 : 0
    } : product)

    return updateProducts.filter((product) => product.quantity > 0)
}