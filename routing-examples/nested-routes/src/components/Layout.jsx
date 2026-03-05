import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">
          <u>Home</u>
        </NavLink>
        <br />
        <NavLink to="/catalog">
          <u>Catalog</u>
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
