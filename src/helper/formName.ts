export enum EFormName {
  TRACK = "track_link",
  PICTURE = "picture_link",
  NAME = "name",
  PERMALINK = "permalink",
  GENRES = "genres",
  TAGS = "tags",
  DESCRIPTION = "description",
  TOALL = "toAllTrack",
}

export const defaultFormTrack = {
  [EFormName.TRACK]: "",
  [EFormName.PICTURE]: "",
  [EFormName.NAME]: "",
  [EFormName.PERMALINK]: undefined,
  [EFormName.GENRES]: "",
  [EFormName.TAGS]: "",
  [EFormName.DESCRIPTION]: "",
  [EFormName.TOALL]: "",
};
