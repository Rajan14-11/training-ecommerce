import React from "react";
import './info.css';




export default function Info() {
  return (
    <>
      <div className="col-sm-11 col-md-8 col-lg-9 mt-5 mt-md-0 info">
        <div className="container">
          <div className="row justify-content-between">
            <div className="mb-4">
              <h1 className="list__title d-flex">
               icon {/* <GrLocation className="list__title-icon" /> information */}
              </h1>
              <hr className="list__title-border" />
            </div>
            <div className="col-lg-5">
              <div className="">
                <h4 className="info__text">billing address</h4>
              </div>
              <div className="">
                <table className="table info__table">
                  <tbody>
                    <tr>
                      <th>Name:</th>
                      <td>fazlay elahi rafi</td>
                    </tr>
                    <tr>
                      <th>Company:</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Address:</th>
                      <td> </td>
                    </tr>
                    <tr>
                      <th>City:</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Country:</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Postcode:</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Phone:</th>
                      <td>01828451508</td>
                    </tr>
                  </tbody>
                </table>

                <div className="">
                  <button className="btn info__btn">
                    edit address 
                    {/* <HiArrowNarrowRight /> */}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="">
                <h4 className="info__text">shipping address</h4>
              </div>
              <div className="">
                <table className="table info__table">
                  <tbody>
                    <tr>
                      <th>Name:</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Company:</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Address:</th>
                      <td> </td>
                    </tr>
                    <tr>
                      <th>City:</th>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <div className="">
                  <button className="btn info__btn">
                    add address 
                    {/* <HiArrowNarrowRight /> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
