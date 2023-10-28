import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: [],
  modal: {
    isOpen: false,
    id: "",
  },
  selectedValue: "",
  status: "Pending",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    userData: (state, action) => {
      state.user = [...state.user, action.payload];
      console.log(action.payload, "reducer function");
    },
    deleteUser: (state, action) => {
      const itemId = action.payload;
      console.log(itemId, "this is counter delete ");
      state.user = state.user.filter((item) => item.id !== itemId);
    },
    isModal: (state, { payload }) => {
      state.modal.isOpen = payload.isOpen;
      state.modal.id = payload.id;
    },
    updateData: (state, action) => {
      const { newData } = action.payload;
      state.user[0] = newData;
    },
    filterData: (state, action) => {
      state.selectedValue = action.payload;
      console.log("action payload", action.payload);

      // const filtered = action.payload;
      // console.log(filtered, "action store");
      // state.filtered = state.user.filter((item) =>
      //   item.name.includes(filtered)
      // );
    },
    toggleStatus: (state, action) => {
      const id = action.payload;
      console.log(id, "in toggle button action");
      if (state.id === id) {
        state.status = state.status === "Pending" ? "Paid" : "Pending";
      }
    },
  },
});

export const {
  changeName,
  userData,
  deleteUser,
  isModal,
  updateData,
  filterData,
  toggleStatus,
} = counterSlice.actions;

export default counterSlice.reducer;
