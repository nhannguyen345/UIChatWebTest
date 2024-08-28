import { createSlice } from "@reduxjs/toolkit";

// Tạo mới slice
export const showchatSlice = createSlice({
  name: "showchat",
  initialState: false,
  reducers: {
    setShowChat: (state, action) => {
      return action.payload;
    },
  },
});

// Tạo mới dispatch
export const { setShowChat } = showchatSlice.actions;

// xuất configureStore
export default showchatSlice.reducer;
