import { configureStore } from "@reduxjs/toolkit";
import showchatSlice from "../features/showchat/showchatSlice";
import menuSlice from "../features/menu/menuSlice";
import showinfoSlice from "../features/showinfo/showinfoSlice";
import modalSlice from "../features/modal/modalSlice";

export default configureStore({
  reducer: {
    showchat: showchatSlice,
    menu: menuSlice,
    showinfo: showinfoSlice,
    modal: modalSlice,
  },
});
