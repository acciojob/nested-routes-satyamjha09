// components/Layout.js
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Product Categories</h1>
      <nav>
        <ul>
          <li><Link to="category/women">Women</Link></li>
          <li><Link to="category/men">Men</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;