import React from "react";
import './Address.css';
// import {  } from "react-icons/tb";

export default function Address() {
  return (
    <div className="col-sm-11 col-md-8 col-lg-9 mt-5 mt-md-0 address">
      <div className="container">
        <div className="row">
          <div className="mb-4">
            <h1 className="list__title d-flex">
           Icon   {/* <TbCurrentLocation className="list__title-icon" /> address */}
            </h1>
            <hr className="list__title-border" />
          </div>
          <form className="address__form">
            <div className="col-12 d-lg-flex justify-content-between mb-4">
              <div
                className="col-lg-6 mb-4 mb-lg-0"
                style={{ padding: "0 1rem 0 0" }}
              >
                <label className="address__form-label" htmlFor="">
                  first name
                </label>
                <input
                  className="form-control address__form-inp"
                  type="text"
                  placeholder="Enter first name..."
                />
              </div>
              <div className="col-lg-6" style={{ padding: "0 1rem 0 0" }}>
                <label className="address__form-label" htmlFor="">
                  last name
                </label>
                <input
                  className="form-control address__form-inp"
                  type="text"
                  placeholder="Enter last name..."
                />
              </div>
            </div>
            <div className="mb-4" style={{ padding: "0 1rem 0 0" }}>
              <label className="address__form-label" htmlFor="">
                company name
              </label>
              <input
                className="form-control address__form-inp"
                type="text"
                placeholder="Enter company name..."
              />
            </div>
            <div className="col-lg-6 mb-4" style={{ padding: "0 1rem 0 0" }}>
              <label className="address__form-label" htmlFor="">
                country / region
              </label>
              <select className="form-select address__form-inp">
                <option selected>select country / region</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-4" style={{ padding: "0 1rem 0 0" }}>
              <label className="address__form-label" htmlFor="">
                house
              </label>
              <input
                className="form-control address__form-inp"
                type="text"
                placeholder="house number and street name..."
              />
            </div>

            <div className="col-12 d-lg-flex justify-content-between mb-4">
              <div
                className="col-lg-6 mb-4 mb-lg-4"
                style={{ padding: "0 1rem 0 0" }}
              >
                <label className="address__form-label" htmlFor="">
                  town / city
                </label>
                <input className="form-control address__form-inp" type="text" />
              </div>
              <div className="col-lg-6" style={{ padding: "0 1rem 0 0" }}>
                <label className="address__form-label" htmlFor="">
                  country
                </label>
                <input className="form-control address__form-inp" type="text" />
              </div>
            </div>
            <div className="col-lg-6" style={{ padding: "0 1rem 0 0" }}>
              <label className="address__form-label" htmlFor="">
                post code
              </label>
              <input
                className="form-control address__form-inp"
                type="number"
                placeholder="Enter code..."
              />
            </div>

            <div className="">
              <button className="btn address__form-btn">save address</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
