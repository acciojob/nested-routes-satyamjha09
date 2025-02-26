import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const Category = () => {
  const { categoryName } = useParams();
  const items = {
    women: ["Dress", "Shoes", "Handbag"],
    men: ["Shirt", "Trousers", "Watch"]
  };

  return (
    <div>
      <h2>{categoryName.toUpperCase()} Collection</h2>
      <ul>
        {items[categoryName]?.map((item, index) => (
          <li key={index}>
            <Link to={item.toLowerCase()}>{item}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Category;