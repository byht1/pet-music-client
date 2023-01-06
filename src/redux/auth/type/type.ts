type TUser = {
  username: string | null;
  email: string | null;
};

export type TUserState = {
  isAuth: boolean;
  user: TUser;
  token: string | null;
  error: boolean;
  errorMessage: string;
  picture: string;
};

export interface IUser {
  _id: string;
  username: string;
  email: string;
  token: string;
  picture: string;
  track_list: string[];
  track_push: string[];
  createdAt: string;
  updatedAt: string;
}
