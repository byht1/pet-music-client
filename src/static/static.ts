import Photo from "./staticPhoto.png";

const audioLink =
  "https://firebasestorage.googleapis.com/v0/b/music-db-11801.appspot.com/o/audio%2Fbbbe5fbe-3b7f-450b-9259-277f2f745a01.mp3?alt=media&token=21cc8aea-eb91-4fa9-8e6f-8535b23ac54d";

// {Audio as AudioTest }

type TStaticData = {
  id: number;
  group: string;
  track_name: string;
  picture: string;
  link_track: string;
};

export const staticTest = [
  {
    id: 1,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
    link_track: audioLink,
  },
  {
    id: 2,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
    link_track: audioLink,
  },
  {
    id: 3,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
    link_track: audioLink,
  },
  {
    id: 4,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
    link_track: audioLink,
  },
  {
    id: 5,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
    link_track: audioLink,
  },
  {
    id: 6,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
    link_track: audioLink,
  },
  {
    id: 7,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
    link_track: audioLink,
  },
  {
    id: 8,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
    link_track: audioLink,
  },
  {
    id: 9,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
    link_track: audioLink,
  },
  {
    id: 10,
    group: "Linkin Park",
    track_name: "Powerless",
    picture: Photo,
    link_track: audioLink,
  },
];

const staticJSON = JSON.stringify(staticTest);

export const static1: TStaticData[] = JSON.parse(staticJSON);
export const static2: TStaticData[] = JSON.parse(staticJSON);
export const static3: TStaticData[] = JSON.parse(staticJSON);
