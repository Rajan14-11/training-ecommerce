import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import './RightSide.css'
function RightSection(product) {
  const rating = product && product.product.rating
  const maxPrice = (product && product.product.price + (product && product.product.discountPercentage/100)*(product && product.product.price)).toFixed(2)

  const [changeValue, setChangeValue] = useState(1)
  const [counterValue, setCounterValue] = useState(1)
  const [totalPrice,setTotalPrice] = useState(product && product.product.price)
 let navigate = useNavigate()
 const Cart = ()=>{

    navigate("/detailcart",{replace:true})

  }

  const increment = ()=>{
    setCounterValue((prevValue) => prevValue + changeValue);
    setTotalPrice(product && product.product.price*(counterValue+1))
  }
  return (
    <>
      <div className="rightside_content">
        <div className="product">
          <strong>
            <div className="product-name">
              <h3 className="title">{product && product.product.title}</h3>
            </div>
          </strong>

          <p className="product_briefdesc">
            {product && product.product.description}
          </p>

          <div className="d-flex justify-content-center align-items-center">
            <p className="product__price">
              <strong>$</strong>
              <strong>{product && product.product.price}</strong>
            </p>
            <p className="product__max-price">
              <strong>$</strong>
              <strong>{maxPrice}</strong>
            </p>
            <p className='price_discount'>{product && product.product.discountPercentage} %</p>
          </div>

          <div className="product__rating">
            {Array(rating>1? Math.ceil(rating):1)
              .fill()
              .map((_, i) => (
                <p key={i}>🌟</p>
              ))}
          </div>

          <div className="product_desc">
            <ul>
              <li>
                {product && product.product.description}
              </li>
              <li>
                                {product && product.product.description}

              </li>
              <li>
                                {product && product.product.description}

              </li>
              <li>                {product && product.product.description}
</li>
              <li>                {product && product.product.description}
</li>
            </ul>
          </div>

          <div className="d-flex cartbtn">
            <div className="counter">
              <button className="counterbutton" onClick={() => increment()}>
                <b>+</b>
              </button>

              <input
                className="counter_input"
                value={counterValue}
                type="text"
                onChange={(e) => setChangeValue(parseInt(e.target.value))}
              />
              <button
                className="counterbutton"
                onClick={() => {
                  setCounterValue((prevValue) => prevValue - changeValue);
                  setTotalPrice(totalPrice - product && product.product.price);
                }}
                disabled={counterValue == 1 ? true : false}
              >
                <b>-</b>
              </button>
            </div>

            <button
              className="btn btn-primary buyitnowbtn"
              type="button"
              onClick={() => {
                Cart();
              }}
            >
              Add To Cart
            </button>
          </div>
          <div className="social-sharing">
            <div className="facebook">
              <img src="/imgs/facebooksvg.svg"></img>
            </div>
            <div className="facebook">
              <img src="/imgs/twittersvg.svg"></img>
            </div>
            <div className="facebook">
              <img src="/imgs/instagramsvg.svg"></img>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default RightSection