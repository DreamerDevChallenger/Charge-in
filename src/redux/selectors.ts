import { RootState } from "./store";

export const selectToggleNavbar = (state: RootState) => state.toggleNavbar;
export const selectUser = (state: RootState) => state.user;
export const selectCurrentUser = (state: RootState) => state.currentUser;
export const selectOverlay = (state: RootState) => state.overlay;
export const selectNotification = (state: RootState) => state.notification;
