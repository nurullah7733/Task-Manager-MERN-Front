import React, { Fragment } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Login } from "../../APIRequest/api";
import { ErrorToast, IsEmail, IsEmpty } from "../../helper/FormValidation";

const LoginComponent = () => {
  let emailRef,
    passwordRef = useRef();
  const OnLogin = () => {
    let email = emailRef.value;
    let password = passwordRef.value;

    if (IsEmpty(email)) {
      ErrorToast("Please provide your Email");
    } else if (IsEmail(email)) {
      ErrorToast("Please provide Valid Email");
    } else if (IsEmpty(password)) {
      ErrorToast("Please provide your Password");
    } else {
      Login(email, password).then((res) => {
        if (res === true) {
          // navigate("/");
          window.location.href = "/";
        }
      });
    }
  };

  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90  p-4">
              <div className="card-body">
                <h4>SIGN IN</h4>
                <br />
                <input
                  ref={(input) => (emailRef = input)}
                  placeholder="User Email"
                  className="form-control animated fadeInUp"
                  type="email"
                />
                <br />
                <input
                  ref={(input) => (passwordRef = input)}
                  placeholder="User Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
                <br />
                <button
                  onClick={OnLogin}
                  className="btn w-100 animated fadeInUp float-end btn-primary"
                >
                  Next
                </button>
                <hr />
                <div className="float-end mt-3">
                  <span>
                    <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/registration"
                    >
                      Sign Up
                    </Link>
                    <span className="ms-1">|</span>
                    <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/forget-password"
                    >
                      Forget Password
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginComponent;
