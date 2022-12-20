import { RootState } from "redux/store";

export const getNewTrack = (state: RootState) => ({
  picture_link: state.newTrack.picture_link,
  name: state.newTrack.name,
  link: state.newTrack.link,
  genre: state.newTrack.genre,
  tag: state.newTrack.tag,
  description: state.newTrack.description,
  toAll: state.newTrack.toAll,
});
export const getNewAlbum = (state: RootState) => ({
  album_name: state.newTrack.album_name,
  artist: state.newTrack.artist,
  label: state.newTrack.label,
  date: state.newTrack.date,
});

export const getNewTrackLink = (state: RootState) => state.newTrack.track_link;
export const getNewAll = (state: RootState) => state.newTrack;
