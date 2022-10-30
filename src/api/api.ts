import axios, { AxiosError } from "axios";
import { authSchema } from "components/modules/form/typeSchema/authSchema";
import { AxiosErrorResponse, ErrorStatusAndMessage } from "./axiosErrorType";
// import { type } from "./../redux/store";

export const server = axios.create({
  baseURL: "http://localhost:5000",
});

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
  return await postCtrlWrapper(`/user/${type}`, body);
};

// export const serverLogIn = async (body: authSchema) => {
//   return await postCtrlWrapper("/user/login", body);
// };

export const serverLogOut = async () => {
  return await getCtrlWrapper("/user/logout");
};

export const serverCurrent = async (abort: AbortSignal) => {
  return await getCtrlWrapperAbort("/user/login", abort);
};

export const serverNewAlbum = async (body: any) => {
  return await postCtrlWrapper(`/album`, body);
};
