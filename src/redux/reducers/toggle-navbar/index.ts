import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

const ToggleNavbarSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleNavbar: (state, action: PayloadAction) => {
      state.isOpen = !state.isOpen;
    },
  },
});

const { actions, reducer } = ToggleNavbarSlice;

export const { toggleNavbar } = actions;

export default reducer;
