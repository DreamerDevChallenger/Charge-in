import { createSlice } from "@reduxjs/toolkit";
import { statusReducer } from "../status";

const initialState = {
  status: "void",
  data: null,
  error: null,
  loading: false,
};

const currentUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ...statusReducer,
  },
});

const { actions, reducer } = currentUserSlice;

export const { pending, rejected, resolved } = actions;

export default reducer;
