import React, { lazy, Suspense } from "react";
import LazyLoader from "../../components/masterLayout/lazyLoader";
const CreatePassword = lazy(() =>
  import("../../components/accountRecover/createPassword")
);

const CreateNewPasswordPage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <CreatePassword />
      </Suspense>
    </>
  );
};

export default CreateNewPasswordPage;
