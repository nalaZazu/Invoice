// import { combineReducers, createStore } from "redux";

import { configureStore, createReducer } from "@reduxjs/toolkit";
import counterReducer from "../reducer/reducer";
import { userReducer } from "../reducer/reducer";
// const init = {
//   invoice: [],
// };
// export const userSection = (state = init, action) => {
//   console.log(state.invoice, "store name");
//   if (action.type === "INVOICE_DATA") {
//     state.invoice.push(action.payload);
//     console.log(action.payload);
//   }
//   return {
//     ...state,
//     // console.log([...state.invoice]),
//     invoice: [...state.invoice],
//   };
// };

// const allSection = combineReducers({ userSection });
// const mainStore = createStore(
//   allSection,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default mainStore;

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // user: userReducer,
  },
});
