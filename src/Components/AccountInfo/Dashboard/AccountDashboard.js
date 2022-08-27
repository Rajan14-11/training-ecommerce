import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './AccountDashboard.css';
import Information1 from './Information1';


const AccountDashboard = () => {


  const [active,setActive]=useState(true)



  const activeRoute=()=>{
    setActive(false)
  }





    return (
        <>
        <section className="profile">
          <div className="container">
            <div className="row text-center">
              <div className="">
                <h1 className="profile__title">my account</h1>
              </div>
  
              <div className="">
                <ul className="profile__list">
                  <li>
                    <a href="/">
                      home                    </a>
                  </li>
                  <li>
                    <a href="/">profile</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        <section className="profile__info">
          <div className="container">
            <div className="row">
              <div className="col-10 col-sm-11 col-md-4 col-lg-3 m-auto m-sm-0">
                <ul className="profile__info-list">
                  <li>
                    <Link to="accountDashboard" className="profile__info-list--active">
                      dashboard
                    </Link>
                  </li>
                  <li onClick={activeRoute} >
                    <Link to="order" className="profile__info-list--a">
                      Order
                    </Link>
                  </li>
                  <li onClick={activeRoute} >
                    <Link to="info" className="profile__info-list--a">
                      infomation
                    </Link>
                  </li>
                  <li onClick={activeRoute} >
                    <Link to="address" className="profile__info-list--a">
                      address
                    </Link>
                  </li>
                  <li>
                    <Link to="account" className="profile__info-list--a">
                      account details
                    </Link>
                  </li>
                  <li onClick={activeRoute} >
                    <a className="profile__info-list--a" href="/">
                      wishlist
                    </a>
                  </li>
                </ul>
              </div>
            {active&&  <Information1/>}
              <Outlet />
            </div>
          </div>
        </section>
      </>
    );
};

export default AccountDashboard;