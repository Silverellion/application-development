import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Layout from "./components/Layout";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "catalog", element: <Catalog /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
