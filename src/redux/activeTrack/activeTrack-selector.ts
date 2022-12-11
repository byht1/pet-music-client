import { RootState } from "redux/store";

export const getTrackLink = (state: RootState) => state.activeTrack.trackLink;
// export const getVolume = (state: RootState) => state.activeTrack.volume;
// export const getDuration = (state: RootState) => state.activeTrack.duration;
export const getCurrentTime = (state: RootState) =>
  state.activeTrack.currentTime;
export const getActive = (state: RootState) => state.activeTrack.active;
export const getRewind = (state: RootState) => state.activeTrack.rewind;
