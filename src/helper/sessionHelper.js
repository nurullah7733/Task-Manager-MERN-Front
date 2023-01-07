class SessionHelper {
  setToken(token) {
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  setUserData(userData) {
    localStorage.setItem("userData", JSON.stringify(userData));
  }
  getUserData() {
    return JSON.parse(localStorage.getItem("userData"));
  }

  removeSession() {
    localStorage.clear();
    window.location.href = "/login";
  }
  setEmail(email) {
    localStorage.setItem("email", email);
  }
  getEmail() {
    return localStorage.getItem("email");
  }
  setOTP(otp) {
    localStorage.setItem("otp", otp);
  }
  getOTP() {
    return localStorage.getItem("otp");
  }
}

export const {
  getToken,
  getUserData,
  setToken,
  setUserData,
  removeSession,
  getEmail,
  getOTP,
  setEmail,
  setOTP,
} = new SessionHelper();
