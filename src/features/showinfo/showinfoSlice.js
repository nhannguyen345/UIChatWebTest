import { createSlice } from "@reduxjs/toolkit";

// Tạo mới slice
export const showinfoSlice = createSlice({
  name: "showinfo",
  initialState: false,
  reducers: {
    setInfoChat: (state, action) => {
      return action.payload;
    },
  },
});

// Tạo mới dispatch
export const { setInfoChat } = showinfoSlice.actions;

// xuất configureStore
export default showinfoSlice.reducer;
