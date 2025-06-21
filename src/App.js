import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import ErrorPage from "./pages/ErrorPage";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    //  {/* Provide theme to styled-components */}
    <ThemeProvider theme={theme}>

      {/* Router component that include all the routes  Define all application routes */} 
      <Router>

        {/* globalstyle  conatins the styled for all the pages components globaly applied */} 
        <GlobalStyle />

        {/* Header component of the app  This is the main navigation header of the application */} 
        <Header />

         {/* scroll component   this will activate whenever the route changed this move th user to top of page  */}
        <ScrollToTop />

        {/* deifne all the routes that will be used in the app  */}
        <Routes>

          {/* home route redirect to home  */}
          <Route path="/" element={<Home />} />

          {/* About route redirect to about page  */}
          <Route path="/about" element={<About />} />

          {/* products route redirect to products page */}
          <Route path="/products" element={<Products />} />

          {/* contact route that will redirect the user to contact  */}
          <Route path="/contact" element={<Contact />} />

          {/* single products route that will display a single product details */}
          <Route path="/singleproduct/:id" element={<SingleProduct />} />

          {/* cart route redirect to cart page  */}
          <Route path="/cart" element={<Cart />} />

          {/* other than the defined routes show error page if the route does not match any defined routes, redirect to the error page */}
          <Route path="*" element={<ErrorPage />} />

        </Routes>
        
        {/* footer component that contains the main footer of the application */}
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
