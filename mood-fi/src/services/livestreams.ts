import { ILivestreams, ILivestreamsItems } from "../models/livestreams";
import { emit } from "@tauri-apps/api/event";

import { LIVESTREAM_API_KEY } from "../../env";

// const API_KEY_LOCAL02 = "AIzaSyDVnpTthAtf2wVJGI8Uz8MXt3BFQOq5EgQ";

const CHANNEL_IDS = [
  "UC2fVSthyWxWSjsiEAHPzriQ",
  "UCSJ4gkVC6NrvII8umztf0Ow",
  "UCxWNEhY-SNHRvF9Q2LWLK1g",
  "UC7tdoGx0eQfRJm9Qj6GCs0A",
  "UCKdURsjh1xT1vInYBy82n6g",
  "UCz9_4daWw-uWuqeB6_IkhMg",
  "UCOxqgCwgOqC2lMqC5PYz_Dg",
  "UCWzZ5TIGoZ6o-KtbGCyhnhg",
  "UCyD59CI7beJDU493glZpxgA",
  "UCsIg9WMfxjZZvwROleiVsQg",
  "UCJIOFQLGwB3GH9K9waxwynQ",
  "UC9rvsIHgzuiwTQ-yi0Qj2Mw",
  "UC9OIZ77MhlVoi4IxLFXl-nQ",
  "UCkFeoNSqYTa7trn75WM9tsg",
  "UCoQ_Hu6PvpK0jDKrYoSgQrw",
  "UCwVQIkAtyZzQSA-OY1rsGig",
  "UCnV2UaGCuZzepjpQNVGXHAA",
  "UCwkTfp14Sj7o6q9_8ADJpnA",
  "UC1aI76iuDafjZ15hZsQGI-Q",
];

export async function getLivestreams(): Promise<ILivestreamsItems[]> {
  let livestreams: ILivestreamsItems[] = [];

  for (const channel of CHANNEL_IDS) {
    try {
      const url = `https://www.googleapis.com/youtube/v3/search?key=${LIVESTREAM_API_KEY}&part=snippet,id&channelId=${channel}&maxResults=50&q=live`;

      livestreams.push(
        ...(
          (await fetch(url).then((data) => data.json())) as ILivestreams
        ).items.filter(
          (i) => i.snippet.liveBroadcastContent === "live" && i.id.videoId
        )
      );
    } catch {
      console.log("api error");
      if (CHANNEL_IDS.indexOf(channel) === CHANNEL_IDS.lastIndexOf(channel)) {
        livestreams = [];
      }
    } finally {
      emit(
        "getLivestreamsProgress",
        Math.floor(
          ((CHANNEL_IDS.indexOf(channel) + 1) / CHANNEL_IDS.length) * 100
        )
      );
    }
  }

  return livestreams;
}
