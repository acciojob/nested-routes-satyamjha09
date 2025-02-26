import React from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { itemName } = useParams();
  return <h3>Selected Item: {itemName.replace(/\b\w/g, char => char.toUpperCase())}</h3>;
};

export default ItemDetail;