import React from 'react';
import { BsGoogle, BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import UseAuth from '../../../Hooks/useAuth';

const Social = () => {

    const {signInWithGoogle,signInWithFacebook}=UseAuth()

    return (
        <div>
             <span className="register__or">or</span>
      <div className="register__social">
        <ul className="register__social-ul">
          <li onClick={signInWithGoogle}>
            <button

              className="register__social-ul--link register__social-ul--g register__social-ul--active form-control"
            >
              <BsGoogle className="register__social-ul--icon mx-2" />
              <span  className="d-none d-sm-block">google</span>
            </button>
          </li>
          <li className="my-3 my-sm-0">
            <a
              href="/"
              className="register__social-ul--link register__social-ul--a form-control"
            >
              <BsApple className="register__social-ul--icon mx-2" />
            </a>
          </li>
          <li>
            <span
            onClick={signInWithFacebook}
              className="register__social-ul--link register__social-ul--f form-control"
            >
              <FaFacebookF  className="register__social-ul--icon mx-2" />
            </span>
          </li>
        </ul>
      </div>
        </div>
    );
};

export default Social;