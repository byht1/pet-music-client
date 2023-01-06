import axios from "axios";

// const URL = "https://pet-music-server.herokuapp.com/api";
const URL = "http://localhost:5000/api";

export const server = axios.create({
  baseURL: URL,
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

export const asyncWrapper = async <T>(fn: any): Promise<T> => {
  let step = 3;

  const callback = async (): Promise<any> => {
    try {
      const { data } = await fn();

      return data;
    } catch (error) {
      if (step === 0) {
        throw error;
      }

      step -= 1;

      return await callback();
    }
  };

  return await callback();
};
