import React, { Suspense, lazy, Fragment } from "react";
import MasterLayout from "../components/masterLayout/masterLayout";
import LazyLoader from "../components/masterLayout/lazyLoader";
import { useEffect } from "react";
import { summaryTask } from "../APIRequest/api";
import { useSelector } from "react-redux";
const Dashborard = lazy(() => import("../components/dashboard/dashboard"));

const DashboardPage = () => {
  useEffect(() => {
    summaryTask();
  }, []);

  const summary = useSelector((state) => state.summary.summary);

  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Dashborard summary={summary} />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default DashboardPage;
