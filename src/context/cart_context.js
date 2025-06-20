import { createContext, useContext, useReducer, useEffect } from "react";
import cartReducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("MyCart");
  if (!localCartData) {
    return [];
  } else {
    try {
      const parsedData = JSON.parse(localCartData);
      if (parsedData === null) {
        return [];
      }
      return parsedData;
    } catch (error) {
      return [];
    }
  }
};

const initialState = {
  cart: getLocalCartData(),
  total_item: 0,
  total_price: 0,
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // increment and decrement the product

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  // to remove the individual item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // to add the data in localStorage
  // get vs set

  useEffect(() => {
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });

    localStorage.setItem("MyCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrement,
      }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
