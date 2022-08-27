import React, { useEffect, useState } from 'react'
import { Offcanvas ,Stack} from 'react-bootstrap'
import CurrencyFormat from 'react-currency-format';
import { Link, NavLink } from 'react-router-dom';
import { descrease, getCart, increase, remove, selectCart,clearcart } from '../../redux/cartSlice';
import { useDispatch, useSelector } from "react-redux";
import "./NewCart.css"

function NewCart() {

  const dispatch = useDispatch()
  const allproducts = useSelector(selectCart)

  const [showcart, setShowCart] = useState("true");
  
  let quantity = 0;

  {
    allproducts.products &&
      allproducts.products.map((item) => {
        return (quantity += parseInt(item.quantity));
      });
  }

   useEffect(() => {
     return () => {
       dispatch(getCart());
     };
   }, []);

   const getTotal = () => {
     return allproducts.products.reduce(
       (amount, item) => parseFloat(item.price * item.quantity) + amount,
       0
     );
   };

   const removeItem = (id) => {
     dispatch(remove(id))
   };

   const increaseProductCount = (id) => {
    dispatch(increase(id))
   };
   const decreaseProductCount = (id) => {
    dispatch(descrease(id))
   };

   const clearCart = () => {
    dispatch(clearcart())
   };


  return (
    <>
      <Offcanvas show={showcart} placement="end">
        <Link to={"/"}>
          <Offcanvas.Header
            closeButton
            onClick={() => {
              setShowCart(!showcart);
            }}
          >
            <Offcanvas.Title>Cart</Offcanvas.Title>
          </Offcanvas.Header>
        </Link>
        <Offcanvas.Body>
          <Stack gap={3}>
            {quantity!==0 ?
              allproducts.products.map((singleproduct) => {
                return (
                  <div className="cart-item" key={singleproduct.id}>
                    <div className="product-details">
                      <Link to={`/productdetail/${singleproduct.id}`}>
                        <img src= '/imgs/download.png' alt="" />
                      </Link>
                      <div className="product-detail">
                        <h4>{singleproduct.title}</h4>
                        <h6>
                          {6}/{128}
                        </h6>

                        {singleproduct.quantity > 0 ? (
                          <div className="quantity">
                            <i
                              className="fa fa-light fa-circle-plus"
                              onClick={() =>
                                increaseProductCount(singleproduct.id)
                              }
                            ></i>

                            <p className="item-amount">
                              {singleproduct.quantity}
                            </p>

                            <i
                              style={{
                                background: "transparent",
                                border: "none",
                              }}
                              className=" fa fa-light fa-circle-minus"
                              onClick={
                                singleproduct.quantity > 1
                                  ? () => decreaseProductCount(singleproduct.id)
                                  : () => removeItem(singleproduct.id)
                              }
                            ></i>
                          </div>
                        ) : (
                          <div>
                            <h4 style={{ color: "red" }}>Out of Stock</h4>
                          </div>
                        )}
                      </div>
                      <div className="right-part-cart">
                        <i
                          className="fa fa-light fa-xmark remove-item"
                          onClick={() => removeItem(singleproduct.id)}
                        ></i>

                        {singleproduct.quantity > 0 ? (
                          <h5>
                            <span>$</span>
                            {singleproduct.price * singleproduct.quantity}
                          </h5>
                        ) : (
                          " "
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            :
            (<div className='empty-cart'>
             <img src='/imgs/download.png'/>
             <h4>Your Cart is empty </h4>
            </div>
            )
            }
          {quantity !==0 ?
            <div className="cart-footer">
              <button
                className="clear-cart banner-btn"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p className="subtotal">
                      Subtotal ({quantity} items):{" "}
                      <strong>{value}</strong>
                    </p>
                  </>
                )}
                decimalScale={2}
                value={getTotal(allproducts.products)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />

              <NavLink to={"/checkout"}>
                <button className="checkout-btn">Checkout</button>
              </NavLink>
            </div>
            :""}
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NewCart