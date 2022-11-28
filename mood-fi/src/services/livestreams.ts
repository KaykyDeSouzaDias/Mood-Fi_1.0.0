import { ILivestreams } from "../models/livestreams";

const API_KEY = "AIzaSyCUZwKhUSYfPvSRYXdh_G7ozHyDA1Nics4";
const API_KEY_LOCAL02 = "AIzaSyDVnpTthAtf2wVJGI8Uz8MXt3BFQOq5EgQ";

export async function getLivestreams(channelId: string): Promise<ILivestreams> {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet,id&channelId=${channelId}&maxResults=40`;
  let livestreams: ILivestreams;

  livestreams = await fetch(url).then((data) => data.json());

  return livestreams;
}
