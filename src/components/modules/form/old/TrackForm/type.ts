import { EFormName } from "helper";

export interface ITrackForm {
  [EFormName.TRACK]: string;
  [EFormName.PICTURE]: string;
  [EFormName.NAME]: string;
  [EFormName.GENRES]: string[];
  [EFormName.TAGS]: string;
  [EFormName.DESCRIPTION]: string;
  [EFormName.TOALL]: boolean;
}
