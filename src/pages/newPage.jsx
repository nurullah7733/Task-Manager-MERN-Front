import React, { Fragment, lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "../APIRequest/api";
import LazyLoader from "../components/masterLayout/lazyLoader";
import MasterLayout from "../components/masterLayout/masterLayout";
import { deleteNewTasks } from "../features/selectTasks/selectTasksSlice";
import { deleteItem } from "../helper/deleteAlert";
import { updateStatusAlert } from "../helper/updateAlert";
const NewComponent = lazy(() => import("../components/new/new"));

const NewPage = () => {
  const all = useSelector((state) => state.tasks.new);
  const dispatch = useDispatch();
  useEffect(() => {
    selectTasks("new");
  }, []);

  const deleteItems = (id) => {
    deleteItem(id).then((res) => {
      if (res === true) {
        dispatch(deleteNewTasks(id));
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
          <NewComponent
            all={all}
            deleteItems={deleteItems}
            changeStatus={changeStatus}
          />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default NewPage;
