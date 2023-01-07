import React, { Fragment, Suspense, lazy } from "react";
import FullscreenLoader from "../components/masterLayout/fullScreenLoader";
import MasterLayout from "../components/masterLayout/masterLayout";
const NotFound = lazy(() => import("../components/notFound/notFound"));
const notFoundPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullscreenLoader />}>
          <NotFound />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default notFoundPage;
