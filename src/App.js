import { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FullscreenLoader from "./components/masterLayout/fullScreenLoader";
import Dashboard from "./pages/dashboardPage";
import NewPage from "./pages/newPage";
import Complete from "./pages/completePage";
import Cancel from "./pages/cancelPage";
import Create from "./pages/createPage";
import Login from "./pages/loginPage";
import Registration from "./pages/registrationPage";
import NotFound from "./components/notFound/notFound";
import Progress from "./pages/progressPage";
import ForgetPage from "./pages/accoundRecoverPage/sendOTPPage";
import VerifyOTPPage from "./pages/accoundRecoverPage/verifyOTPPage";
import CreateNewPage from "./pages/accoundRecoverPage/createNewPasswordPage";
import Profile from "./pages/profilePage";
import { getToken } from "./helper/sessionHelper";

function App() {
  if (getToken()) {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/all" element={<NewPage />} />
            <Route exact path="/complete" element={<Complete />} />
            <Route exact path="/cancel" element={<Cancel />} />
            <Route exact path="/create" element={<Create />} />
            <Route path="*" element={<NotFound />} />
            <Route exact path="/progress" element={<Progress />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
        <FullscreenLoader />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="*" element={<NotFound />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/forget-password" element={<ForgetPage />} />
            <Route exact path="/verify-otp" element={<VerifyOTPPage />} />
            <Route
              exact
              path="/create-new-password"
              element={<CreateNewPage />}
            />
          </Routes>
        </BrowserRouter>
        <FullscreenLoader />
      </Fragment>
    );
  }
}

export default App;
