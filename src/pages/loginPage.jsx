import React, { Fragment, lazy, Suspense } from "react";
import LazyLoader from "../components/masterLayout/lazyLoader";
const Login = lazy(() => import("../components/login/login"));

const loginPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <Login />
      </Suspense>
    </Fragment>
  );
};

export default loginPage;
