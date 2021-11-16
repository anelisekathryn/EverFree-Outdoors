import './App.css';

import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./screens/Home/Home"
import Products from "./screens/Products/Products"
import ProductCreate from "./screens/ProductCreate/ProductCreate"
import ProductEdit from "./screens/ProductEdit/ProductEdit"
import ProductDetail from "./screens/ProductDetail/ProductDetail"
import AboutUs from "./screens/AboutUs/AboutUs"
import { verifyUser } from './services/users'
import SignUp from "./screens/SignUp/SignUp"
import SignIn from "./screens/SignIn/SignIn"

function App() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])
  
  return (
    <div className="App">
      <Routes>
        <Route
          exact path="/"
          element={<Home />}
        />
        <Route
          path="/sign-up"
          element={<SignUp />}
        />
        <Route
          path="/sign-in"
          element={<SignIn />}
        />
        <Route
          path="/products"
          element={<Products />}
        />
        <Route
          path="/products/:id"
          element={<ProductDetail />}
        />
        <Route
          path="/products/:id/edit"
          element={<ProductEdit />}
          // write in ternary statement to check if user is signed in
        />
        <Route
          path="/add-product"
          element={<ProductCreate />}
          // write in ternary statement to check if user is signed in
        />
        <Route
          path="/about"
          element={<AboutUs />}
        />
      </Routes>
    </div>
  );
}

export default App;
