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
import SignOut from "./screens/SignOut/SignOut"


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
          element={<Home user={user} />}
        />
        <Route
          path="/sign-up"
          element={<SignUp setUser={setUser}/>}
        />
        <Route
          path="/sign-in"
          element={<SignIn setUser={setUser}/>}
        />
        <Route
          path="/sign-out"
          element={<SignOut setUser={setUser}/>}
        />
        <Route
          path="/products"
          element={<Products user={user}/>}
        />
        <Route
          path="/products/:id"
          element={<ProductDetail user={user}/>}
        />
        <Route
          path="/products/:id/edit"
          // element={<ProductEdit user={user}/>}
          // write in ternary statement to check if user is signed in
          element={user ? <ProductEdit user={user}/> : <Navigate to='/sign-in'/>}

        />
        <Route
          path="/add-product"
          // element={<ProductCreate user={user} />}
          element={user ? <ProductCreate user={user}/> : <Navigate to='/sign-in'/>}
        />
        <Route
          path="/about"
          element={<AboutUs user={user}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
