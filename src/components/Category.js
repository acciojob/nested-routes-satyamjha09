import { Link, Outlet, useParams } from "react-router-dom";

const categoryData = {
  women: ["Dress", "Shoes", "Bag"],
  men: ["Shirt", "Watch", "Shoes"],
  kids: ["Toys", "Books", "Clothes"]
};

const Category = () => {
  const { categoryName } = useParams();
  const items = categoryData[categoryName] || [];

  return (
    <div>
      <h2>{categoryName.toUpperCase()} Category</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={`/category/${categoryName}/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Category;
