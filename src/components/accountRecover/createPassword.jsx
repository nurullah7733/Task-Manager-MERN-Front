import React, { Fragment } from "react";
import { useRef } from "react";
import { ResetPassword } from "../../APIRequest/api";
import { ErrorToast, IsEmpty } from "../../helper/FormValidation";
import { getEmail, getOTP } from "../../helper/sessionHelper";
import { useNavigate } from "react-router-dom";

const CreatePassword = () => {
  let newPasswordRef,
    newComfirmPasswordRef = useRef();

  let navigator = useNavigate();

  const handleSubmit = () => {
    let newPassword = newPasswordRef.value;
    let confirmPassword = newComfirmPasswordRef.value;
    console.log("first");
    if (IsEmpty(newPassword)) {
      ErrorToast("New Password is required!");
    } else if (IsEmpty(confirmPassword)) {
      ErrorToast("Confirm Password is required!");
    } else if (newPassword !== confirmPassword) {
      ErrorToast("Confirm Password is does not match!");
    } else {
      ResetPassword(getEmail(), getOTP(), newPassword).then((res) => {
        if (res === true) {
          navigator("/login");
        }
      });
    }
  };

  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90 p-4">
              <div className="card-body">
                <h4>SET NEW PASSWORD</h4>
                <br />
                <label>Your email address</label>
                <input
                  readOnly={true}
                  placeholder="User Email"
                  className="form-control animated fadeInUp"
                  type="email"
                  defaultValue={getEmail()}
                />
                <br />
                <label>New Password</label>
                <input
                  ref={(input) => (newPasswordRef = input)}
                  placeholder="New Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
                <br />
                <label>Confirm Password</label>
                <input
                  ref={(input) => (newComfirmPasswordRef = input)}
                  placeholder="Confirm Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
                <br />
                <button
                  onClick={handleSubmit}
                  className="btn w-100 animated fadeInUp float-end btn-primary"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreatePassword;
