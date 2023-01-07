import React, { Fragment, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import MasterLayout from "../components/masterLayout/masterLayout";
import LazyLoader from "../components/masterLayout/lazyLoader";
import { useEffect } from "react";
import { selectTasks } from "../APIRequest/api";
import { deleteItem } from "../helper/deleteAlert";
import { useDispatch } from "react-redux";
import { deleteCanceledTasks } from "../features/selectTasks/selectTasksSlice";
import { updateStatusAlert } from "../helper/updateAlert";
const Cancel = lazy(() => import("../components/cancel/cancel"));
const CancelPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    selectTasks("canceled");
  }, []);
  const canceled = useSelector((state) => state.tasks.canceled);

  const deleteItems = (id) => {
    deleteItem(id).then((res) => {
      if (res === true) {
        dispatch(deleteCanceledTasks(id));
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
          <Cancel
            canceled={canceled}
            deleteItems={deleteItems}
            changeStatus={changeStatus}
          />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default CancelPage;
