import { createSlice } from "@reduxjs/toolkit";
import { statusReducer } from "../status";
import data_comment from "@/mocks/dataComment.json";

const initialState = {
  status: "void",
  data: data_comment,
  error: null,
  loading: false,
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    ...statusReducer,
  },
});

const { actions, reducer } = commentSlice;

export const { pending, rejected, resolved } = actions;

export default reducer;
