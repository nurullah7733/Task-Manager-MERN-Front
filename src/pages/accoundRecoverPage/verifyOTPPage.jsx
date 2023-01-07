import React, { lazy, Suspense } from "react";
import LazyLoader from "../../components/masterLayout/lazyLoader";
const VerifyOTP = lazy(() =>
  import("../../components/accountRecover/verifyOTP")
);

const VerifyOTPPage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <VerifyOTP />
      </Suspense>
    </>
  );
};

export default VerifyOTPPage;
