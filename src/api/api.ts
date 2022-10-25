import axios from "axios";

export const server = axios.create({
  baseURL: "http://localhost:5000",
});

export const token = {
  set(token: string) {
    server.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    server.defaults.headers.common.Authorization = "";
  },
};
