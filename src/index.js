import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/productcontex";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
  // app provider that will provide the product context data to all the app components 
  <AppProvider>

    {/* filter context data to all the app  */}
    <FilterContextProvider>

      {/* cart data will also be provided to the app components  */}
      <CartProvider>

        {/* main component of your app  */}
        <App />

      </CartProvider>
    
    </FilterContextProvider>
  
  </AppProvider>
);


