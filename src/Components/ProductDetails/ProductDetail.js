import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
import Loader from "../layout/Loader/Loader";
import "./AddToCart.css";
import BottomPart from "./BottomPart/BottomPart";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";
import Footer from "../../Shared/Footer/Footer"
import { getProductDetail } from "../../redux/productSlice";
import {useDispatch,useSelector} from "react-redux"

function ProductDetails() {

  const dispatch = useDispatch()
  const details = useSelector((state)=>state.products.productDetail)

  const  id  = useParams();

  useEffect(() => {

    return () => {
      dispatch(getProductDetail(id.id));
    };
  }, []);

  return (
    <>
      <div className="product_container">
          {
            details.length < 1 ? <Loader/>:
<>
        <div className="product_content">
          <div className="home-line">
            <a className="heading" href="/">
              Home
            </a>
            <span className="heading">&gt;</span>
            <h6 className="heading">Productname</h6>
          </div>



          <div
            className="main-section"
            key={details && details.id}
          >
            <LeftSection
            product={details && details}
            />

            <RightSection
             product={details && details}
            />
          </div>
          <BottomPart/>
          <Footer/>
        </div>
        </>
}
      </div>
    </>
  );
}

export default ProductDetails;
