import axios, { AxiosError } from "axios";
import { authSchema } from "components/modules/form/typeSchema/authSchema";
import { AxiosErrorResponse, ErrorStatusAndMessage } from "./axiosErrorType";
import { server } from "./base";
// import { type } from "./../redux/store";
// https://firebasestorage.googleapis.com/v0/b/music-db-11801.appspot.com/o/image%2F0578a360-8d44-4c6a-be73-d5b5e85d9b38.jpg?alt=media&token=8383efd5-a7ba-4c40-9ac0-2e726968743e



export const tokenAuto = {
  local: "token",
  set(token: string) {
    server.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    server.defaults.headers.common.Authorization = "";
  },
};

const postCtrlWrapper = async (type: string, body: any) => {
  try {
    const { data } = await server.post(type, body);

    return data;
  } catch (error) {
    throw error;
  }
};

const getCtrlWrapperAbort = async (type: string, controller: AbortSignal) => {
  try {
    const { data } = await server.get(type, {
      signal: controller,
    });

    return data;
  } catch (error) {
    throw error;
  }
};

const getCtrlWrapper = async (type: string) => {
  try {
    const { data } = await server.get(type);

    return data;
  } catch (error) {
    throw error;
  }
};

export const axiosError = (error: any): ErrorStatusAndMessage => {
  const e = error as AxiosError;
  const message = (e.response?.data as AxiosErrorResponse).message;
  const status = e.response?.status;
  return { message, status };
};

export const serverAuth = async (type: string, body: authSchema) => {
  return await postCtrlWrapper(`/api/users/${type}`, body);
};

// export const serverLogIn = async (body: authSchema) => {
//   return await postCtrlWrapper("/user/login", body);
// };

export const serverLogOut = async () => {
  console.log("🚀 ~ serverLogOut");
  return await getCtrlWrapper("/api/users/logout");
};

export const serverCurrent = async (abort: AbortSignal) => {
  return await getCtrlWrapperAbort("/api/users/login", abort);
};

export const serverNewAlbum = async (body: any) => {
  return await postCtrlWrapper(`/api/album`, body);
};

export const serverAlbum = async () => {
  return await getCtrlWrapper("/api/album");
};

export const serverAlbumUser = async () => {
  return await getCtrlWrapper("/api/users/album");
};
