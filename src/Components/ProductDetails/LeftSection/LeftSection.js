import React, { useState } from "react";
import "./LeftSide.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function LeftSection({product}) {


  const [image, setImage] = useState(product.images && product.thumbnail);
  return (
    <>
      <div className="content">
        <div className="large-img">
          <img src={image} alt="big-image" />
        </div>
        <div className="small-images">
          <div className="img-1">
            <img
              src={product.images && product.images[0]}
              onClick={() => setImage(product.images && product.images[0])}
            />
          </div>
          <div className="img-1">
            <img
              src={product.images && product.images[1]}
              onClick={() => setImage(product && product.images[1])}
            />
          </div>
          <div className="img-2">
            <img
              src={product.images && product.images[2]}
              onClick={() => setImage(product.images && product.images[2])}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
