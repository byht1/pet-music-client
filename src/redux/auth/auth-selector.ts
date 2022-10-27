import { RootState } from "redux/store";

export const getIsLoggedIn = (state: RootState) => state.auth.isLoader;
export const getUser = (state: RootState) => state.auth.user;
export const getError = (state: RootState) => state.auth.error;
export const getErrorMessage = (state: RootState) => state.auth.errorMessage;
