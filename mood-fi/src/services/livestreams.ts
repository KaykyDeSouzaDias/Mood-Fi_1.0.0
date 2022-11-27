import { ILivestreams } from "../models/livestreams";

const API_KEY = "AIzaSyCUZwKhUSYfPvSRYXdh_G7ozHyDA1Nics4";

const CHANNEL_ID = "UC2fVSthyWxWSjsiEAHPzriQ";
// [
//   {
//     MrMomo: "UC2fVSthyWxWSjsiEAHPzriQ",
//   },
// ];

const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet,id&channelId=${CHANNEL_ID}&maxResults=40`;

export async function getLivestreams(): Promise<ILivestreams> {
  let livestreams: ILivestreams;

  livestreams = await fetch(url).then((data) => data.json());

  return livestreams;
}
