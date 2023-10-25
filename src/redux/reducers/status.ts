import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const PENDING = "pending";
export const VOID = "void";
export const RESOLVED = "resolved";
export const REJECTED = "rejected";

export interface PropsStatus {
  status: string;
  loading: boolean;
  data: any | null;
  error: void | null;
}

export const statusReducer = {
  pending: (draft: PropsStatus) => {
    switch (draft.status) {
      case VOID:
        draft.status = PENDING;
        draft.loading = true;
        return;
      case REJECTED:
        draft.error = null;
        draft.status = PENDING;
        draft.loading = true;
        return;
      case RESOLVED:
        draft.status = PENDING;
        draft.loading = true;
        return;
      default:
        return;
    }
  },

  resolved: (draft: any, action: any) => {
    switch (draft.status) {
      case PENDING:
        draft.data = action.payload;
        draft.status = RESOLVED;
        draft.loading = false;
        return;
      default:
        return;
    }
  },

  rejected: (draft: PropsStatus, action: PayloadAction) => {
    switch (draft.status) {
      case PENDING:
        draft.status = REJECTED;
        draft.error = action.payload;
        draft.data = null;
        draft.loading = false;
        return;
      default:
        return;
    }
  },
};
