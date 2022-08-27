import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import "./ProductCard.css"

const ProductCard = ({ product , id }) => {
  const options = {
    value: product.rating,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/productdetail/${product.id}`}>
      <img key={id} src={product.images[0]} alt={product.title} />
      <p>{product.title}</p>
      <div>
        <Rating {...options} />
        {/* <span className="productCardSpan">

          ({product.numOfReviews} Reviews)
        </span> */}
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
