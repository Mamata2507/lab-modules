import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./reducers/studentSlice";

export default configureStore({
  reducer: {
    student: studentReducer,
  },
});
