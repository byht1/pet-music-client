import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authorization, current, logOut } from "./auth-operations";
import { TUserState } from "./type/type";
import { ErrorStatusAndMessage } from "api/axiosErrorType";

const initialState: TUserState = {
  user: { username: null, email: null },
  token: null,
  isLoader: false,
  error: false,
  errorMessage: "",
};

const isError = (action: AnyAction) => {
  return action.type.endsWith("rejected");
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Регистрація і авторизація початок загурзки
      .addCase(authorization.pending, (state) => {
        state.isLoader = true;
        state.error = false;
        state.errorMessage = "";
      })
      // Регистрація і авторизація
      .addCase(authorization.fulfilled, (state, { payload }) => {
        state.user = { username: payload.username, email: payload.username };
        state.token = payload.token;
        state.isLoader = false;
      })
      // Вихід початок загурзки
      .addCase(logOut.pending, (state) => {
        state.isLoader = true;
        state.error = false;
        state.errorMessage = "";
      })
      // Вихід
      .addCase(logOut.fulfilled, (state) => {
        state.user = { username: "", email: "" };
        state.token = "";
        state.isLoader = false;
      })
      // Автоматична авторизація початок загурзки
      .addCase(current.pending, (state) => {
        state.isLoader = true;
        state.error = false;
        state.errorMessage = "";
      })
      // Автоматична авторизація
      .addCase(current.fulfilled, (state, { payload }) => {
        state.user = { username: payload.username, email: payload.username };
        state.token = payload.token;
        state.isLoader = false;
      })
      // Помилка
      .addMatcher(
        isError,
        (state, { payload }: PayloadAction<ErrorStatusAndMessage>) => {
          if (!payload) return;
          state.error = true;
          state.isLoader = false;
          state.errorMessage = payload.message;
        }
      );
  },
});
