import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link,useNavigate  } from "react-router-dom";
import {useSelector} from "react-redux"
import UseAuth from "../../../Hooks/useAuth";
import Social from "./Social";
import "./SignUp.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase/FirebaseInitialize";
import { selectUser } from "../../../redux/userSlice";

const SignUp = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

  const {error, registerUser,loading,signInWithGoogle } = UseAuth();
  const user = useSelector(selectUser)
  const navigate=useNavigate()

    const handleRegister = (e) => {
      e.preventDefault()
       if (password1 !== password2) {
         alert("password not match");
         return;
       }
      if (email && password1 != "") {
        createUserWithEmailAndPassword(auth, email, password1).then((data) => {
          toast.success("registration Successfully")
          navigate('/login')
        }).catch(error=>{
          console.error(error)
        }
        )
      }
    };

  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          className: "fw-bold text-danger",
          style: {
            fontSize: "16px",
            width: "200px",
          },

          success: {
            duration: 300000,
            className: "fw-bold text-success",
          },
        }}
      />

      {/* ========================= */}
      {!loading && (
        <div className="mainSignUp">
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
                                Already have an account?
                              </span>
                              <Link
                                to="/login"
                                className="register__card-body--link"
                              >
                                sign in
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xxl-4 m-auto my-4 my-lg-auto">
                  <h1 className="register__title">register</h1>

                  <form onSubmit={(e)=>handleRegister(e)}>
                    <div className="mb-3">
                      <label htmlFor="name" className="register__sub">
                        name
                      </label>
                      <input
                        autoComplete="off"
                        className="form-control register__inp"
                        placeholder="Enter Your Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                         type="name"
                        name="name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="register__sub">
                        email
                      </label>
                      <input
                        autoComplete="off"
                        className="form-control register__inp"
                        placeholder="Enter Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                         type="email"
                        name="email"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="register__sub">
                        password
                      </label>
                      <input
                        autoComplete="off"
                        className="form-control register__inp"
                        placeholder="Enter Your Password"
                        onChange={(e) => setPassword1(e.target.value)}
                        value={password1}
                         type="password"
                        name="password"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="confirm password"
                        className="register__sub"
                      >
                        confirm password
                      </label>
                      <input
                        autoComplete="off"
                        className="form-control register__inp"
                        placeholder="Confirm Password"
                        required
                        onChange={(e) => setPassword2(e.target.value)}
                        value={password2}
                        type="password"
                        name="password2"
                      />
                    </div>

                    <div className="register__button">
                      <button
                         type="submit"
                        className="btn register__button-btn form-control"
                        onClick={(e) => handleRegister(e)}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  <Social />
                  {loading && <div className="lds-roller">Loading....</div>}
                  {/* success alert */}


                  {error && <h2>error{error}</h2>}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default SignUp;
