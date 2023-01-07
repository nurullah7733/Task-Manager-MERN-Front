import React, { Fragment, lazy, Suspense } from "react";
import LazyLoader from "../components/masterLayout/lazyLoader";
const RegistrationComponents = lazy(() =>
  import("../components/registration/registraion")
);
const registration = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <RegistrationComponents />
      </Suspense>
    </Fragment>
  );
};

export default registration;
