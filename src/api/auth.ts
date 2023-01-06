import { authSchema } from "components/modules/form/typeSchema/authSchema";
import { IUser } from "redux/auth/type/type";
import { server, tokenAuto } from "./base";

export enum AuthUtl {
  GoogleAuth = "/users/google/auth",
  SingUp = "/users/sing-up",
  LogIn = "/users/login", // Вінже tokenLogIn
  LogOut = "/users/logout",
  Forgotten = "/users/forgotten-password",
  Password = "/users/new-password",
}

export const googleAuth = async (body: authSchema) => {
  try {
    if (!body.token) throw new Error();

    const { data } = await server.post<IUser>(AuthUtl.GoogleAuth, {
      token: body.token,
    });

    tokenAuto.set(data.token);

    return data;
  } catch (error) {
    throw error;
  }
};

export const singUp = async (body: authSchema) => {
  try {
    const { data } = await server.post<IUser>(AuthUtl.SingUp, body);

    tokenAuto.set(data.token);

    return data;
  } catch (error) {
    throw error;
  }
};

export const logIn = async (body: authSchema) => {
  try {
    const { data } = await server.post<IUser>(AuthUtl.LogIn, body);

    tokenAuto.set(data.token);

    return data;
  } catch (error) {
    throw error;
  }
};

export const logOut = async () => {
  try {
    await server.get(AuthUtl.LogOut);
    tokenAuto.unset();
  } catch (error) {
    throw error;
  }
};

export const tokenLogIn = async (token: string | null) => {
  try {
    if (!token) throw new Error();

    tokenAuto.set(token);

    const { data } = await server.get<IUser>(AuthUtl.LogIn);

    tokenAuto.set(data.token);

    return data;
  } catch (error) {
    throw error;
  }
};

export const forgottenPassword = async (body: { email: string }) => {
  await server.patch(AuthUtl.Forgotten, body);
};

export const newPasswordServer = async (
  body: { password: string },
  linkId: string
) => {
  await server.patch(`${AuthUtl.Password}/${linkId}`, body);
};
