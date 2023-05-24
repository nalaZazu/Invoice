import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  name: "zazu",
  user: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    // changeName: (state, action) => {
    //   state.name = action.payload;
    // },
    userData: (state, action) => {
      state.user = [...state.user, action.payload];
    },
  },
});

export const {changeName, userData } =
  counterSlice.actions;

export default counterSlice.reducer;
