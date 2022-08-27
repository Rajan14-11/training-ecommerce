import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OurServices.css";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, selectProducts } from "../../redux/productSlice";

const OurServices = ({deviceType}) => {

  const dispatch = useDispatch()
  const posts = useSelector(selectProducts)

  useEffect(() => {
    return ()=>{
      dispatch(getProduct())
    }
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="mainServiceStore">
        <div className="titleItem d-flex align-items-center">
          <h2>IN THE SPOTLIGHT</h2>
          <Link to="productspage">
          <span style={{cursor:'pointer', fontWeight:700}}>View all Products</span>
          </Link>
        </div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={deviceType !== "mobile" ? true : false}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all 1"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >

          {posts.map((post) => {
            return(
              <>
              <Link to={`productdetail/${post.id}`}>
              <Card className="d-flex flex-column justify-content-center align-items-center">
            <div className="post_image_container">
              <img className="post_image" src={post.thumbnail} />
            </div>
            <div className="post_title">
              <p>{post.title}</p>
            </div>
              </Card>
              </Link>
              </>
            )
          })}
        </Carousel>




      </div>
    </div>
  );
};

export default OurServices;
