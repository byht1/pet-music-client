import { createAsyncThunk } from "@reduxjs/toolkit";
import { ErrorStatusAndMessage } from "api/axiosErrorType";
import { authSchema } from "components/modules/form/typeSchema/authSchema";
import { IUser, TUserState } from "./type/type";
import {
  axiosError,
  serverCurrent,
  serverLogOut,
  serverAuth,
  tokenAuto,
} from "api/api";

export const authorization = createAsyncThunk<
  IUser,
  { type: string; body: authSchema },
  { rejectValue: ErrorStatusAndMessage }
>("auth/authorization", async ({ type, body }, { rejectWithValue }) => {
  try {
    const data = await serverAuth(type, body);

    tokenAuto.set(data.token);

    return data;
  } catch (error) {
    throw rejectWithValue(axiosError(error));
  }
});

export const logOut2 = createAsyncThunk<
  void,
  void,
  { rejectValue: ErrorStatusAndMessage }
>("auth/logout", async (_, { rejectWithValue }) => {
  try {
    await serverLogOut();
    tokenAuto.unset();
  } catch (error) {
    throw rejectWithValue(axiosError(error));
  }
});

export const current = createAsyncThunk<
  IUser,
  AbortSignal,
  { rejectValue: ErrorStatusAndMessage | string; state: { auth: TUserState } }
>("auth/refresh", async (abort, { getState, rejectWithValue }) => {
  const state = getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return rejectWithValue("Токена нет, уходим из fetchCurrentUser");
  }

  tokenAuto.set(persistedToken);
  try {
    const data = await serverCurrent(abort);

    return data;
  } catch (error) {
    throw rejectWithValue(axiosError(error));
  }
});

// function rejectWithValue(
//   arg0: ErrorStatusAndMessage
// ):
//   | IUser
//   | RejectWithValue<ErrorStatusAndMessage, unknown>
//   | PromiseLike<IUser | RejectWithValue<ErrorStatusAndMessage, unknown>> {
//   throw new Error("Function not implemented.");
// }
