type TUser = {
  username: string | null;
  email: string | null;
};

export type TUserState = {
  isAuth: boolean;
  user: TUser;
  token: string | null;
  isLoader: boolean;
  error: boolean;
  errorMessage: string;
};

export interface IUser {
  _id: string;
  username: string;
  email: string;
  token: string;
  track_list: string[];
  track_push: string[];
  createdAt: string;
  updatedAt: string;
}
