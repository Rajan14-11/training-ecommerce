import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { descrease, getCart, increase, remove, selectCart } from "../../redux/cartSlice";
import CheckoutSteps from "../Checkout/CheckoutSteps";
import "./DetailCart.css";

function DetailCart() {

  const dispatch = useDispatch()
  const allproducts = useSelector(selectCart)


  let quantity = 0;

  {
    allproducts.products &&
      allproducts.products.map((item) => {
        return (quantity += parseInt(item.quantity));
      });
  }

  useEffect(() => {
    return () => {
     dispatch(getCart())
    };
  }, []);

  const removeItem = (id) => {
    dispatch(remove(id))
  }

  const increaseProductCount =(id)=>dispatch(increase(id))

  const decreaseProductCount = (id) => {
    dispatch(descrease(id))
  };

  return (
    <div
      className="main_detail_cart_container"
    >
      <CheckoutSteps activeStep={0} />
      <section className="d-flex mt-5">
        <div className="container">
          <div className="row detailcart_main">
            <div className="col-8">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr className="detail_cart_table_row">
                      <th
                        style={{ width: "35%", textAlign: "center" }}
                        scope="col"
                      >
                        Product
                      </th>
                      <th
                        style={{ width: "15%", textAlign: "center" }}
                        scope="col"
                      >
                        Price
                      </th>
                      <th
                        style={{ width: "35%", textAlign: "center" }}
                        scope="col"
                      >
                        Quantity
                      </th>
                      <th
                        style={{ width: "15%", textAlign: "center" }}
                        scope="col"
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allproducts.products &&
                      allproducts.products.map((product) => {
                        return (
                          <tr
                            key={product.id}
                            className="detail_cart_table_row"
                          >
                            <td style={{ width: "35%" }}>
                              <div className="main">
                                <div className="d-flex align-items-center" style={{position:'relative'}}>

                                  <i className="fa fa-solid fa-close close-icon" onClick={()=>removeItem(product.id)}></i>
                                  <div className="des">
                                    <p>{product.title}</p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td style={{ width: "15%", textAlign: "center" }}>
                              <h6>{product.price}</h6>
                            </td>
                            <td style={{ width: "35%" }}>
                              <div className="detailcart_counter">
                                <i
                                  className="fa-solid fa-plus"
                                  onClick={() =>
                                    increaseProductCount(product.id)
                                  }
                                ></i>
                                <input
                                  className="input-number"
                                  type="text"
                                  value={product.quantity}
                                  min="0"
                                  max="20"
                                  readOnly
                                />
                                <i
                                  className="fa-solid fa-minus"
                                  onClick={
                                    product.quantity > 1
                                      ? () => decreaseProductCount(product.id)
                                      : () => removeItem(product.id)
                                  }
                                ></i>
                              </div>
                            </td>
                            <td style={{ width: "15%", textAlign: "center" }}>
                              <h6>{product.price * product.quantity}</h6>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-4 checkout_main_div">
              <div className="checkout">
                <ul>
                  <li className="Order Summary">
                    Order Summary
                    <span>{allproducts.total}</span>
                  </li>

                  <div className="d-grid gap-3">
                    <div className="py-3">
                      <li className="Subtotal">
                        Total
                        <span>{allproducts.discountedTotal}</span>
                      </li>
                    </div>
                    <div className="py-3">
                      <li className="Discount">
                        Discount
                        <span>{(allproducts.total - allproducts.discountedTotal)}</span>
                      </li>
                    </div>
                    <div className="py-3">
                      <li className="Shopping (Regular Delivery)">
                        Shopping
                        <span>50</span>
                      </li>
                    </div>
                  </div>

                  <li className="Total Order">
                    Total Order
                    <span>{(allproducts.discountedTotal + 50)}</span>
                  </li>
                </ul>
                <Link to="/checkout" className="proceed-btn">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailCart;
