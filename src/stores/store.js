import { configureStore } from "@reduxjs/toolkit";
import showchatSlice from "../features/showchat/showchatSlice";

export default configureStore({
  reducer: {
    showchat: showchatSlice,
  },
});
