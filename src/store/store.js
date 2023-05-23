import { combineReducers, createStore } from "redux";

const init = {
  invoice: [],
};
const userSection = (state = init, action) => {
  console.log(state.invoice, "store name");
  if (action.type === "INVOICE_DATA") {
    state.invoice.push(action.payload);
    console.log(action.payload);
  }
  return {
    ...state,
    // console.log([...state.invoice]),
    invoice: [...state.invoice],
  };
};

const allSection = combineReducers({ userSection });
const mainStore = createStore(
  allSection,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default mainStore;
