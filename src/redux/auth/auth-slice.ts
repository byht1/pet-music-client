import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, TUserState } from "./type/type";

const initialState: TUserState = {
  isRefreshing: true,
  isLoader: false,
  isAuth: false,
  user: { username: null, email: null },
  token: null,
  error: false,
  errorMessage: "",
  picture: "",
};

// const isError = (action: AnyAction) => {
//   return action.type.endsWith("rejected");
// };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    refreshingReducer(state, { payload }: PayloadAction<boolean>) {
      state.isRefreshing = payload;
    },
    loaderReducer(state, { payload }: PayloadAction<boolean>) {
      state.isLoader = payload;
    },
    logInReducer(state, { payload }: PayloadAction<IUser>) {
      state.user = { username: payload.username, email: payload.email };
      state.token = payload.token;
      state.isAuth = true;
      state.error = false;
      state.errorMessage = "";
      state.picture = payload.picture;
    },
    logOutReducer(state) {
      state.user = { username: null, email: null };
      state.token = null;
      state.isAuth = false;
    },
    errorReducer(state, { payload }: PayloadAction<string>) {
      console.log("error");
      state.error = true;
      state.errorMessage = payload;
    },
  },
  // createReducer: (builder) => {
  //   builder
  //     // Регистрація і авторизація початок загурзки
  //     .addCase(authorization.pending, (state) => {
  //       state.isLoader = true;
  //       state.error = false;
  //       state.errorMessage = "";
  //     })
  //     // Регистрація і авторизація
  //     .addCase(authorization.fulfilled, (state, { payload }) => {
  //       state.isAuth = true;
  //       state.user = { username: payload.username, email: payload.username };
  //       state.token = payload.token;
  //       state.isLoader = false;
  //     })
  //     // Вихід початок загурзки
  //     .addCase(logOut.pending, (state) => {
  //       state.isLoader = true;
  //       state.error = false;
  //       state.errorMessage = "";
  //     })
  //     // Вихід
  //     .addCase(logOut.fulfilled, (state) => {
  //       state.user = { username: "", email: "" };
  //       state.token = "";
  //       state.isLoader = false;
  //       state.isAuth = false;
  //     })
  //     // Автоматична авторизація початок загурзки
  //     .addCase(current.pending, (state) => {
  //       state.isLoader = true;
  //       state.error = false;
  //       state.errorMessage = "";
  //       state.error = false;
  //     })
  //     // Автоматична авторизація
  //     .addCase(current.fulfilled, (state, { payload }) => {
  //       state.isAuth = true;
  //       state.user = { username: payload.username, email: payload.username };
  //       state.token = payload.token;
  //       state.isLoader = false;
  //     })
  //     // Помилка
  //     .addMatcher(
  //       isError,
  //       (state, { type, payload }: PayloadAction<ErrorStatusAndMessage>) => {
  //         state.isLoader = false;

  //         if (!payload) return;

  //         state.error = true;
  //         state.errorMessage = payload.message;

  //         if (type === "auth/refresh/rejected") {
  //           state.token = null;
  //         }
  //       }
  //     );
  // },
});

export const authSliceReducer = authSlice.reducer;

export const {
  logInReducer,
  logOutReducer,
  errorReducer,
  loaderReducer,
  refreshingReducer,
} = authSlice.actions;
