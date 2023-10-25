import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { statusReducer } from "../status";
import data_notfiaction from "@/mocks/dataNotifcation.json";

const initialState = {
  status: "void",
  data: data_notfiaction,
  error: null,
  loading: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    ...statusReducer,
    clear: (draft, action: PayloadAction) => {
      draft.data = [];
    },
  },
});

const { actions, reducer } = notificationSlice;

export const { pending, rejected, resolved, clear } = actions;

export default reducer;
