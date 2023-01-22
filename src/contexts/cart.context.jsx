import { useState, createContext } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cardItem) => cardItem.id === productToAdd.id
    )

    if (existingCartItem) {
        return cartItems.map((cardItem) =>
            cardItem.id === productToAdd.id
                ? { ...cardItem, quantity: cardItem.quantity + 1 }
                : cardItem
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}