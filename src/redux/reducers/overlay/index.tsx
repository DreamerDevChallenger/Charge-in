import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

const overlaySlice = createSlice({
  name: "overlay",
  initialState,
  reducers: {
    toggleOverlay: (state, action: PayloadAction) => {
      state.isOpen = !state.isOpen;
    },
  },
});

const { actions, reducer } = overlaySlice;

export const { toggleOverlay } = actions;

export default reducer;
