import { server } from "./base";

export enum AlbumUtl {
  New = "album",
}

export const newAlbum = async (body: any) => {
  try {
    const { data } = await server.post(AlbumUtl.New, body);

    return data;
  } catch (error) {
    throw error;
  }
};
