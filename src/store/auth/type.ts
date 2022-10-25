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

type TRegistrationData = {
  username: string;
  email?: string;
  password: string;
};

export interface IUserStore {
  username: string;
  email: string;
  token: string;
  track_list: string[];
  track_push: string[];
  // registration: (body: TRegistrationData) => void;
  logIn: (body: IUser) => void;
}
