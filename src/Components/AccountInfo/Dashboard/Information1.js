import React from 'react';
import { BsHeart } from 'react-icons/bs';

const Information1 = () => {
    return (
        <>
      <div className="col-sm-11 col-md-8 col-lg-9 mt-5 mt-md-0">
        <div className="d-flex justify-content-around mb-5">
          <div className="col-5 col-lg-4 text-center">
            <a href="/" className="text-decoration-none">
              <div className="profile__info-box">
                <div className="">
                icon  {/* <HiOutlineClipboardCheck className="profile__info-box--icon" /> */}
                </div>
                <div className="">
                  <h4 className="profile__info-box--text">orders</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="col-5 col-lg-4 text-center">
            <a href="/" className="text-decoration-none">
              <div className="profile__info-box">
                <div className="">
                 icon2 {/* <TbCurrentLocation className="profile__info-box--icon" /> */}
                </div>
                <div className="">
                  <h4 className="profile__info-box--text">orders</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div className="col-5 col-lg-4 text-center">
            <a href="/" className="text-decoration-none">
              <div className="profile__info-box">
                <div className="">
                  icon{/* <HiUserGroup className="profile__info-box--icon" /> */}
                </div>
                <div className="">
                  <h4 className="profile__info-box--text">account details</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="col-5 col-lg-4 text-center">
            <a href="/" className="text-decoration-none">
              <div className="profile__info-box">
                <div className="">
                  <BsHeart className="profile__info-box--icon" />
                </div>
                <div className="">
                  <h4 className="profile__info-box--text">wishlist</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
    );
};

export default Information1;