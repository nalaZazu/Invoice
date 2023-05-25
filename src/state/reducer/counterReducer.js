import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: [],
  modal: {
    isOpen: false,
    id: "",
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    userData: (state, action) => {
      state.user = [...state.user, action.payload];
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
  },
});

export const { changeName, userData, deleteUser, isModal } =
  counterSlice.actions;

export default counterSlice.reducer;
