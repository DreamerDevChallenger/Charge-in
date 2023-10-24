import { RootState } from "./store";

export const selectToggleNavbar = (state: RootState) => state.toggleNavbar;
export const selectUser = (state: RootState) => state.user;
