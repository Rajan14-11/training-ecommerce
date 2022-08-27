import React, { useEffect, useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../../../redux/userSlice";
import Home from "../../Home/Home";
import { auth } from "../../../Firebase/FirebaseInitialize";
import {onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import {Link } from "react-router-dom";


function Login() {
  const user = useSelector(selectUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()


  useEffect(() => {
   onAuthStateChanged(auth,(authUser)=>{
      if(authUser){
        dispatch(login({
          email:authUser.email
        }))
      }
      else{
        dispatch(logout())
      }
   })
  }, [])


  const handleLogin = (e)=>{
    e.preventDefault()
     if(email && password !=""){
            signInWithEmailAndPassword(auth,email,password)
            .then((data)=>{
              console.log("logged")
            }).catch((err)=>console.log(err))
     }
  }

  return (
    <div>
      {user ? (
        <Home />
      ) : (
        <>
          <section className="register">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 p-0">
                  <div className="card register__card">
                    <img
                      className="img-fluid register__card-img"
                      src="https://i.ibb.co/CsG3X0z/auth.jpg"
                      alt="food"
                    />
                    <div className="card-img-overlay d-flex justify-content-center align-items-center">
                      <div className="register__card-layer">
                        <div className="col-10 m-auto">
                          <div className="register__card-logo">
                            <a href="/">
                              <img
                                className="img-fluid register__card-logo--img"
                                src="https://i.ibb.co/6Pc68GB/logo.png"
                                alt="logo"
                              />
                            </a>
                          </div>
                          <div className="register__card-body">
                            <div className="register__card-body--middle">
                              <span className="register__card-body--textSmall">
                                welcome to
                              </span>

                              <span className="register__card-body--text">
                                my e-commerce website
                              </span>

                              <p className="register__card-body--para m-0">
                                I am glad to see you again! Get access to your
                                Orders, Wishlist and Recommendations.
                              </p>
                            </div>
                            <div className="register__card-body--bottom">
                              <span className="register__card-body--span">
                                Have'n any account?
                              </span>
                              <Link
                                to="/signup"
                                className="register__card-body--link"
                              >
                                register
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xxl-4 m-auto my-4 my-lg-auto">
                  <h1 className="register__title">login</h1>
                  <form onSubmit={(e)=>handleLogin(e)}>
                    <div className="mb-3">
                      <label htmlFor="email" className="register__sub">
                        email
                      </label>
                      <input
                        className="form-control register__inp"
                        placeholder="Enter Your Email"
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="register__sub">
                        password
                      </label>
                      <input
                        className="form-control register__inp"
                        placeholder="Enter Your Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        name="password"
                        required
                      />
                    </div>

                    <div className="register__forgot">
                      <a
                        href="/"
                        className="register__sub register__forgot-text"
                      >
                        forgot password
                      </a>
                    </div>
                    <div className="register__button">
                      <input
                        className="btn register__button-btn form-control"
                        type="submit"
                        value={"login"}
                        onClick={(e)=>handleLogin(e)}
                      />
                    </div>
                  </form>
                  {/* <Social /> */}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}


export default Login;
