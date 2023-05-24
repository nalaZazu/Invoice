// const init = {
//   name: "zazu",
// };

import { createReducer, createSlice } from "@reduxjs/toolkit";
import { defer } from "react-router-dom";

// const reducer = (state = init, action) => {
//     console.log(state)
//   return state;
// };

// const initialState = {
//   name: "zazu",
//   age: 20,
// };

// export default createReducer(initialState, (builder) => {
//   builder.addCase("UPDAET_AGE", (state, action) => {
//     state.age = action.payload;
//   });
// });
// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
// increment: (state) => {
//   state.value += 1;
// },
// decrement: (state) => {
//   state.value -= 1;
// },
// incrementByAmount: (state, action) => {
//   state.value += action.payload;
// },
// nameShow: (state) => {
//   state.name = "zazu";
// },
//   },
//   extraReducers: (builder) => {
//     builder.addCase("UPDAET_AGE",(state, action) => {
//   state.age = action.payload;
//     });
//   },
// });
// export const {extraReducers } =counterSlice.actions;
// export default counterSlice.reducer;

// const initialState = {
//   invoice: [],
// };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INVOICE_DATA":
//       return {
//         ...state,
//         invoice: action.payload,
//         // state.invoice.push(action.payload),
//       };

//     default:
//       return {
//         ...state,
//         invoice: [...state.invoice],
//       };
//   }
// };
// export default counterReducer;





