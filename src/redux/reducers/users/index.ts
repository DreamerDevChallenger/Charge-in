import { createSlice } from "@reduxjs/toolkit";
import { statusReducer } from "../status";
import data_user from "@/mocks/data.json";

const initialState = {
  status: "void",
  data: data_user,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ...statusReducer,
  },
});

const { actions, reducer } = userSlice;

export const { pending, rejected, resolved } = actions;

export default reducer;
