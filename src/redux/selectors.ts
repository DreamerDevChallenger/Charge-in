import { RootState } from "./store";

export const selectToggleNavbar = (state: RootState) => state.toggleNavbar;
export const selectUser = (state: RootState) => state.user;
export const selectOverlay = (state: RootState) => state.overlay;
export const selectNotification = (state: RootState) => state.notification;
export const selectComment = (state: RootState) => state.comment;
