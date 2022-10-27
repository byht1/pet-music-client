import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  axiosError,
  serverCurrent,
  serverLogOut,
  serverSingUp,
  tokenAuto,
} from "api/api";
import { ErrorStatusAndMessage } from "api/axiosErrorType";
import { authSchema } from "components/modules/form/typeSchema/authSchema";
import { IUser, TUserState } from "./type/type";

export const authorization = createAsyncThunk<
  IUser,
  authSchema,
  { rejectValue: ErrorStatusAndMessage }
>("auth/authorization", async (body, { rejectWithValue }) => {
  try {
    const { data } = await serverSingUp(body);

    tokenAuto.set(data.token);
    return data;
  } catch (error) {
    throw rejectWithValue(axiosError(error));
  }
});

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await serverLogOut();
      tokenAuto.unset();
    } catch (error) {
      return rejectWithValue(axiosError(error));
    }
  }
);

export const current = createAsyncThunk<
  IUser,
  void,
  { rejectValue: ErrorStatusAndMessage | string; state: { auth: TUserState } }
>("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("Токена нет, уходим из fetchCurrentUser");
  }

  tokenAuto.set(persistedToken);
  try {
    const { data } = await serverCurrent();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(axiosError(error));
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
