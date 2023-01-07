import React, { Fragment, lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "../APIRequest/api";
import LazyLoader from "../components/masterLayout/lazyLoader";
import MasterLayout from "../components/masterLayout/masterLayout";
import { deleteProgressTasks } from "../features/selectTasks/selectTasksSlice";
import { deleteItem } from "../helper/deleteAlert";
import { updateStatusAlert } from "../helper/updateAlert";

const ProgressComponents = lazy(() =>
  import("../components/progress/progress")
);
const Progress = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    selectTasks("progress");
  }, []);
  const progress = useSelector((state) => state.tasks.progress);

  const deleteItems = (id) => {
    deleteItem(id).then((res) => {
      if (res === true) {
        dispatch(deleteProgressTasks(id));
      }
    });
  };

  const changeStatus = (id, status) => {
    updateStatusAlert(id, status).then((res) => {
      if (res === true) {
      }
    });
  };

  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <ProgressComponents
            progress={progress}
            deleteItems={deleteItems}
            changeStatus={changeStatus}
          />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Progress;
