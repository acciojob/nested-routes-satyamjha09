import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Categories</h1>
      <nav>
        <ul>
          <li><Link to="/category/women">Women</Link></li>
          <li><Link to="/category/men">Men</Link></li>
          <li><Link to="/category/kids">Kids</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
