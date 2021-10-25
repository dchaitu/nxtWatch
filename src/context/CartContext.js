import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  isDarkTheme: false,
  toggleTheme: () => {},
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
})

export default CartContext

// const ThemeContext = React.createContext({

// })

// export default ThemeContext
