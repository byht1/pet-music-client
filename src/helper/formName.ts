export enum EFormName {
  TRACK = "track_link",
  PICTURE = "picture_link",
  NAME = "name",
  PERMALINK = "permalink",
  GENRES = "genres",
  TAGS = "tags",
  DESCRIPTION = "description",
  TOALL = "text_track",
  ARTIST = "artist",
  ALBUM_NAME = "album_name",
  LABEL = "label",
  DATE = "release_date",
}

export const defaultFormTrack = {
  [EFormName.TRACK]: undefined,
  [EFormName.PICTURE]: undefined,
  [EFormName.NAME]: "",
  [EFormName.PERMALINK]: undefined,
  [EFormName.GENRES]: "",
  [EFormName.TAGS]: "",
  [EFormName.DESCRIPTION]: "",
  [EFormName.TOALL]: "",
  [EFormName.ARTIST]: "",
  [EFormName.ALBUM_NAME]: "",
  [EFormName.LABEL]: "",
  [EFormName.DATE]: "",
};
