import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Registration } from "../../APIRequest/api";
import { useNavigate } from "react-router-dom";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  IsMobile,
} from "../../helper/FormValidation";

const Registraion = () => {
  let navigate = useNavigate();

  let emailRef,
    firstNameRef,
    lastNameRef,
    mobileRef,
    passwordRef,
    confirmPasswordRef = useRef();

  const onRegistration = () => {
    const email = emailRef.value;
    const firstName = firstNameRef.value;
    const lastName = lastNameRef.value;
    const mobile = mobileRef.value;
    const password = passwordRef.value;
    const confirmPassword = confirmPasswordRef.value;

    if (IsEmpty(email)) {
      ErrorToast("Email is required!");
    } else if (IsEmail(email)) {
      ErrorToast("Valid Email is required!");
    } else if (IsEmpty(firstName)) {
      ErrorToast("Frist name is required!");
    } else if (IsEmpty(lastName)) {
      ErrorToast("Last name is required!");
    } else if (IsEmpty(mobile)) {
      ErrorToast("Mobile number is required!");
    } else if (IsMobile(mobile)) {
      ErrorToast("Valid Mobile number is required!");
    } else if (IsEmpty(password)) {
      ErrorToast("Password is required!");
    } else if (password !== confirmPassword) {
      ErrorToast("Confirm Password is not match!");
    } else {
      Registration(email, firstName, lastName, mobile, password, "").then(
        (res) => {
          if (res === true) {
            navigate("/login");
          }
        }
      );
    }
  };

  return (
    <div className="container mt-5">
      <div className="row  justify-content-center">
        <div className="col-md-10 col-lg-10 center-screen">
          <div className="card animated fadeIn w-100 p-3">
            <div className="card-body">
              <h4>Sign Up</h4>
              <hr />
              <div className="container-fluid m-0 p-0">
                <div className="row m-0 p-0">
                  <div className="col-md-4 p-2">
                    <label>Email Address</label>
                    <input
                      ref={(input) => (emailRef = input)}
                      placeholder="User Email"
                      className="form-control animated fadeInUp"
                      type="email"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>First Name</label>
                    <input
                      ref={(input) => (firstNameRef = input)}
                      placeholder="First Name"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Last Name</label>
                    <input
                      ref={(input) => (lastNameRef = input)}
                      placeholder="Last Name"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Mobile Number</label>
                    <input
                      ref={(input) => (mobileRef = input)}
                      placeholder="Mobile"
                      className="form-control animated fadeInUp"
                      type="mobile"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Password</label>
                    <input
                      ref={(input) => (passwordRef = input)}
                      placeholder="User Password"
                      className="form-control animated fadeInUp"
                      type="password"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Confirm Password</label>
                    <input
                      ref={(input) => (confirmPasswordRef = input)}
                      placeholder="User Password"
                      className="form-control animated fadeInUp"
                      type="password"
                    />
                  </div>
                </div>
                <div lassName="row mt-2 p-0">
                  <div className="col-md-4 p-2">
                    <button
                      onClick={onRegistration}
                      className="btn mt-3 w-100 float-end btn-primary animated fadeInUp"
                    >
                      Complete
                    </button>
                  </div>
                </div>

                <div className="float-end mt-3">
                  <span>
                    <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/login"
                    >
                      Sign In
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registraion;
