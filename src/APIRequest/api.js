import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormValidation";
import { setEmail, setOTP } from "../helper/sessionHelper";
import store from "../app/store";
import { hideLoader, showLoader } from "../features/settings/settingsSlice";
import { setToken, setUserData } from "../helper/sessionHelper";
import { getToken } from "../helper/sessionHelper";
import {
  setCanceledTasks,
  setCompletedTasks,
  setNewTasks,
  setProgressTasks,
} from "../features/selectTasks/selectTasksSlice";
import { setSummary } from "../features/summaryTask/summaryTaskSlice";
import { setProfileValue } from "../features/profile/profileSlice";

let baseUrl = "https://task-manager-mern.onrender.com";
const AxiosHeader = { headers: { token: getToken() } };

// Account recover step 03
export const ResetPassword = (email, otpCode, password) => {
  let url = baseUrl + "/reset-password";
  let reqBody = { email: email, otpCode: otpCode, password: password };
  store.dispatch(showLoader());
  return axios
    .post(url, reqBody)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.data["status"] === "success") {
        SuccessToast("New Password Created Success!");
        return true;
      } else {
        ErrorToast("Invalid OTP code!");
        store.dispatch(hideLoader());
        return false;
      }
    })
    .catch((e) => {
      ErrorToast("Something went wrong");
      store.dispatch(hideLoader());
      return false;
    });
};

// Account recover step 02
export const VerifyOTPRequest = (email, OTP) => {
  let url = baseUrl + `/verify-otp/${email}/${OTP}`;
  store.dispatch(showLoader());

  return axios
    .get(url)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.status === 200) {
        SuccessToast("OTP Varification success");
        setOTP(OTP);
        return true;
      } else {
        ErrorToast(res.data["data"]);
        return false;
      }
    })
    .catch((e) => {
      ErrorToast("Something went wrong");
      store.dispatch(hideLoader());
      return false;
    });
};

// Account recover step 01
export const verifyEmailForForgetPassword = (email) => {
  let url = baseUrl + `/forget-password/${email}`;
  store.dispatch(showLoader());
  return axios
    .get(url)
    .then((res) => {
      if (res.status === 200) {
        store.dispatch(hideLoader());
        SuccessToast("6 digit Varification code send to your Email");
        setEmail(email);
        return true;
      } else {
        ErrorToast("Email not found!");
        store.dispatch(hideLoader());
        return false;
      }
    })
    .catch((e) => {
      ErrorToast("Something went wrong");
      store.dispatch(hideLoader());
      return false;
    });
};

export const changeTaskStatus = (id, status) => {
  let url = `${baseUrl}/task-status-update/${id}/${status}`;
  store.dispatch(showLoader());

  return axios
    .get(url, AxiosHeader)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.status === 200) {
        SuccessToast("Update Status Success");
        return true;
      } else {
        store.dispatch(hideLoader());
        ErrorToast("Something went wrong");
        return false;
      }
    })
    .catch((e) => {
      ErrorToast("Something went wrong");

      return false;
    });
};

export const deleteTask = (id) => {
  let url = `${baseUrl}/delete/${id}`;
  store.dispatch(showLoader());

  return axios.get(url, AxiosHeader).then((res) => {
    store.dispatch(hideLoader());
    if (res.status === 200) {
      SuccessToast("Delete Success");
      return true;
    } else {
      store.dispatch(hideLoader());
      ErrorToast("Something went wrong");
      return false;
    }
  });
};

export const summaryTask = () => {
  let url = baseUrl + "/total-task";
  store.dispatch(showLoader());
  return axios
    .get(url, AxiosHeader)
    .then((res) => {
      store.dispatch(hideLoader());

      if (res.status === 200) {
        store.dispatch(setSummary(res.data["data"]));
      } else {
        ErrorToast("Something went wrong");
        return false;
      }
    })
    .catch((e) => {
      store.dispatch(hideLoader());
      ErrorToast("Something Went wrong");
      return false;
    });
};

export const selectTasks = (Status) => {
  let url = baseUrl + `/${Status}/task`;
  store.dispatch(showLoader());
  return axios
    .get(url, AxiosHeader)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.status === 200) {
        if (Status === "new") {
          store.dispatch(setNewTasks(res.data["data"]));
        } else if (Status === "progress") {
          store.dispatch(setProgressTasks(res.data["data"]));
        } else if (Status === "completed") {
          store.dispatch(setCompletedTasks(res.data["data"]));
        } else if (Status === "canceled") {
          store.dispatch(setCanceledTasks(res.data["data"]));
        }
      } else {
        ErrorToast("Something went wrong");
        return false;
      }
    })
    .catch((e) => {
      store.dispatch(hideLoader());
      ErrorToast("Something went wrong");
      return false;
    });
};
export const CreateTask = (title, description) => {
  let url = baseUrl + "/create";
  let reqBody = { title: title, description: description, status: "new" };
  store.dispatch(showLoader());
  return axios
    .post(url, reqBody, AxiosHeader)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.status === 200) {
        SuccessToast("Task Create success");
        return true;
      } else {
        ErrorToast("Something went wrong");
        return false;
      }
    })
    .catch((e) => {
      store.dispatch(hideLoader());
      ErrorToast("Something went wrong");
      return false;
    });
};

export const Login = (email, password) => {
  let loginUrl = baseUrl + "/login";
  let postBody = { email: email, password: password };
  store.dispatch(showLoader());
  return axios
    .post(loginUrl, postBody)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.status === 200) {
        setToken(res.data["token"]);
        setUserData(res.data["data"]);
        SuccessToast("Login Success");
        return true;
      } else {
        ErrorToast("Invalid Email or Password");
        return false;
      }
    })
    .catch((e) => {
      store.dispatch(hideLoader());
      ErrorToast("Something went wrong");
      return false;
    });
};
export const Registration = (email, firstName, lastName, mobile, password) => {
  store.dispatch(showLoader());
  const registrationUrl = baseUrl + "/registration";
  let postBody = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    password: password,
    photo:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA70lEQVR4nO3UQUrDQBSH8R8umqVdWrrWK+hJxEPYHsNuRPFAurR1ZfEAuinVlUUUXVYGJiCCdNJObCn54A8heeGbl8wbGjaUAn2M8BETrnvxWS10Mcb8j9zHmqwUC6Q/5Vk77ydIy5zmFN9VEA9zit8riENtNuYVs5aO37biH/fWtauLOKMpc9ySme4CeS0nV0krfsph3HAht/Fe9k4b/pUdHGGAGzzjK2aKa5zhMNauTAcXeKkwx2FR59hbRtjGFT6XOKfLhHcvsZsqPcDTCsLfecR+ivgho7TMOEU8rUE8SRGfYJZR+orjFHHDdvENyZP0ibBvoI8AAAAASUVORK5CYII=",
  };
  return axios
    .post(registrationUrl, postBody)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.status === 200) {
        if (res.data["status"] === "fail") {
          if (res.data["data"]["keyPattern"]["email"] === 1) {
            ErrorToast("Email already Exits");
            return false;
          } else {
            ErrorToast("Something Went Wrong!");
            return false;
          }
        } else {
          SuccessToast("Registration Success!");
          return true;
        }
      } else {
        ErrorToast("Something Went Wrong!");
        return false;
      }
    })
    .catch((e) => {
      store.dispatch(hideLoader());
      ErrorToast("Something Went Wrong!!");
      return false;
    });
};

export const getProfileInfo = () => {
  let url = baseUrl + "/profile-info";
  store.dispatch(showLoader());
  return axios
    .get(url, AxiosHeader)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.status === 200) {
        store.dispatch(setProfileValue(res.data["data"][0]));
        return true;
      } else {
        ErrorToast("Something went wrong");
        return false;
      }
    })
    .catch((e) => {
      store.dispatch(hideLoader());
      ErrorToast("Something went wrong");
      return false;
    });
};

export const profileUpdate = (
  email,
  firstName,
  lastName,
  mobile,
  password,
  photo
) => {
  store.dispatch(showLoader());

  let url = baseUrl + "/profile-update";

  let reqBody = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    password: password,
    photo: photo,
  };
  let userDetails = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    photo: photo,
  };

  return axios
    .post(url, reqBody, AxiosHeader)
    .then((res) => {
      store.dispatch(hideLoader());

      if (res.status === 200) {
        SuccessToast("Profile update success");
        setUserData(userDetails);
        return true;
      }
    })
    .catch((e) => {
      store.dispatch(hideLoader());
      ErrorToast("Something went wrong");
      return false;
    });
};
