import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackLink: "",
  active: false,
  currentTime: 0,
  rewind: 0,
};

export const activeTrack = createSlice({
  name: "activeTrack",
  initialState,
  reducers: {
    playTrack(state) {
      state.active = true;
    },
    pauseTrack(state) {
      state.active = false;
    },
    newActionTrack(state, { payload }) {
      state.trackLink = payload;
      state.active = true;
    },
    changeCurrentTime(state, { payload }) {
      state.currentTime = payload;
    },
    changeRewind(state, { payload }) {
      state.rewind = payload;
    },
  },
});

export const activeTrackReducers = activeTrack.reducer;

export const {
  playTrack,
  pauseTrack,
  newActionTrack,
  changeCurrentTime,
  changeRewind,
} = activeTrack.actions;
