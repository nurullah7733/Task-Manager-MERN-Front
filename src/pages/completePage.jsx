import React, { Fragment, lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "../APIRequest/api";
import MasterLayout from "../components/masterLayout//masterLayout";
import LazyLoader from "../components/masterLayout/lazyLoader";
import { deleteCompletedTasks } from "../features/selectTasks/selectTasksSlice";
import { deleteItem } from "../helper/deleteAlert";
import { updateStatusAlert } from "../helper/updateAlert";
const Complete = lazy(() => import("../components/complete/complete"));

const CompletePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    selectTasks("completed");
  }, []);
  const completed = useSelector((state) => state.tasks.completed);
  const deleteItems = (id) => {
    deleteItem(id).then((res) => {
      if (res === true) {
        dispatch(deleteCompletedTasks(id));
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
          <Complete
            completed={completed}
            deleteItems={deleteItems}
            changeStatus={changeStatus}
          />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default CompletePage;
