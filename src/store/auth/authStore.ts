import { server } from "api/api";
import create from "zustand";
import { IUserStore, IUser } from "./type";

export const useApiUser = create<IUserStore>((set) => ({
  username: "",
  email: "",
  token: "",
  track_list: [],
  track_push: [],

  logIn: (body) => {
    set({
      username: body.username,
      email: body.email,
      token: body.token,
      track_list: body.track_list,
      track_push: body.track_push,
    });
  },

  // registration: async (body) => {
  //   const { data } = await server.post<IUser>("/user/signup", body);

  //   set({
  //     username: data.username,
  //     email: data.email,
  //     token: data.token,
  //     track_list: data.track_list,
  //     track_push: data.track_push,
  //   });
  // },

  // logIn: async (body) => {
  //   const { data } = await server.post<IUser>("/user/login", body);

  //   console.log(data.token);

  //   set({
  //     username: data.username,
  //     email: data.email,
  //     token: data.token,
  //     track_list: data.track_list,
  //     track_push: data.track_push,
  //   });
  // },
}));
