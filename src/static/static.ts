import Photo from "./staticPhoto.png";

type TStaticData = {
  id: number;
  group: string;
  track_name: string;
  picture: string;
};

export const staticTest = [
  {
    id: 1,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
  },
  {
    id: 2,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
  },
  {
    id: 3,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
  },
  {
    id: 4,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
  },
  {
    id: 5,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
  },
  {
    id: 6,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
  },
  {
    id: 7,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
  },
  {
    id: 8,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
  },
  {
    id: 9,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
  },
  {
    id: 10,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
  },
];

const staticJSON = JSON.stringify(staticTest);

export const static1: TStaticData[] = JSON.parse(staticJSON);
export const static2: TStaticData[] = JSON.parse(staticJSON);
