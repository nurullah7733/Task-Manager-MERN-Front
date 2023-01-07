import Swal from "sweetalert2";
import { changeTaskStatus } from "../APIRequest/api";
import store from "../app/store";
import { setChangeStatus } from "../features/selectTasks/selectTasksSlice";

export const updateStatusAlert = (id, status) => {
  return Swal.fire({
    title: "Change Status",
    input: "select",
    inputOptions: {
      new: "new",
      completed: "completed",
      progress: "progress",
      canceled: "canceled",
    },
    inputValue: status,
    showCancelButton: true,
  }).then((r) => {
    if (r.isConfirmed) {
      return changeTaskStatus(id, r.value).then((res) => {
        store.dispatch(setChangeStatus({ id: id, status: r.value }));
        return res;
      });
    }
  });
};
