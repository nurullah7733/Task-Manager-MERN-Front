import React, { Fragment, lazy, Suspense } from "react";
import LazyLoader from "../components/masterLayout/lazyLoader";
import MasterLayout from "../components/masterLayout//masterLayout";
const Create = lazy(() => import("../components/create/create"));

const createPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Create />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default createPage;
