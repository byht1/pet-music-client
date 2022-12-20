import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  track_link: FileList | null;
  picture_link: string;
  name: string;
  link: string;
  genre: string[] | string;
  tag: string;
  description: string;
  toAll: boolean;

  // albom
  artist: string;
  album_name: string;
  label: string;
  date: string;
};

const initialState: TInitialState = {
  track_link: null,
  picture_link: "",
  name: "",
  link: "",
  genre: [],
  tag: "",
  description: "",
  toAll: true,

  album_name: "",
  artist: "",
  label: "",
  date: "",
};

export const newTrack = createSlice({
  name: "newTrack",
  initialState,
  reducers: {
    change(state, { payload }) {
      state = { ...state, ...payload };
    },
    newTrackChange(state, { payload }) {
      state.track_link = payload;
    },
  },
});

export const newTrackReducers = newTrack.reducer;

export const { change, newTrackChange } = newTrack.actions;
