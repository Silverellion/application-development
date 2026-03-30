import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/dashboard/Profile";
import Orders from "./components/dashboard/Orders";
import Settings from "./components/dashboard/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "*" element = {<NotFound/>}></Route>
        <Route path = "/products/:id" element = {<Products/>}></Route>
        <Route path = "/dashboard" element = {<Dashboard/>}>
          <Route path="profile" element = {<Profile/>}/>
          <Route path="orders" element = {<Orders/>}/>
          <Route path="settings" element = {< Settings/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
