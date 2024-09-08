import { configureStore } from "@reduxjs/toolkit";
import showchatSlice from "../features/showchat/showchatSlice";
import menuSlice from "../features/menu/menuSlice";
import showinfoSlice from "../features/showinfo/showinfoSlice";

export default configureStore({
  reducer: {
    showchat: showchatSlice,
    menu: menuSlice,
    showinfo: showinfoSlice,
  },
});
