import { useParams } from "react-router-dom";

const Item = () => {
  const { categoryName, itemName } = useParams();

  return (
    <div>
      <h3>Item Details</h3>
      <p>Category: {categoryName}</p>
      <p>Item: {itemName}</p>
    </div>
  );
};

export default Item;
