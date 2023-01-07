import { RootState } from "redux/store";

export const getUser = (state: RootState) => state.auth.user;
export const getPicture = (state: RootState) => state.auth.picture;
export const getToken = (state: RootState) => state.auth.token;
export const getIsAuth = (state: RootState) => state.auth.isAuth;
export const getIsError = (state: RootState) => state.auth.error;
export const getErrorMessage = (state: RootState) => state.auth.errorMessage;
export const getLoader = (state: RootState) => state.auth.isLoader;
export const getRefreshing = (state: RootState) => state.auth.isRefreshing;
