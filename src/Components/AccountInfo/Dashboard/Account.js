import React from "react";
import './Account.css'
// import { FaRegUser } from "react-icons/fa";

export default function Account() {
  return (
    <div className="col-sm-11 col-md-8 col-lg-9 mt-5 mt-md-0 address">
      <div className="container">
        <div className="row">
          <div className="mb-4">
            <h1 className="list__title d-flex">
              icon{/* <FaRegUser className="list__title-icon" /> account details */}
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
                email
              </label>
              <input
                className="form-control address__form-inp"
                type="text"
                placeholder="Enter company name..."
              />
            </div>

            <div className="mb-4" style={{ padding: "0 1rem 0 0" }}>
              <label className="address__form-label" htmlFor="">
                old password
              </label>
              <input
                className="form-control address__form-inp"
                type="password"
                placeholder="Enter your old password..."
              />
            </div>
            <div className="mb-4" style={{ padding: "0 1rem 0 0" }}>
              <label className="address__form-label" htmlFor="">
                new password
              </label>
              <input
                className="form-control address__form-inp"
                type="password"
                placeholder="enter new password..."
              />
            </div>
            <div className="mb-4" style={{ padding: "0 1rem 0 0" }}>
              <label className="address__form-label" htmlFor="">
                confirm password
              </label>
              <input
                className="form-control address__form-inp"
                type="password"
                placeholder="confirm password..."
              />
            </div>

            <div className="">
              <button className="btn address__form-btn">save change</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
