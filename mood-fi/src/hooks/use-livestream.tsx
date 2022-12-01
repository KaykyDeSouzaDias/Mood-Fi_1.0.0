import { createContext, ReactNode, useContext, useState } from "react";
import { ILivestreamsItems } from "../models";

const defaultSelectedLivestream = {
  kind: "youtube#searchResult",
  etag: "_C0QPUJrKMdMEJv8rz8WdLHzzh4",
  id: {
    kind: "youtube#video",
    videoId: "jfKfPfyJRdk",
  },
  snippet: {
    publishedAt: "2022-07-12T12:12:29Z",
    channelId: "UCSJ4gkVC6NrvII8umztf0Ow",
    title: "lofi hip hop radio - beats to relax/study to",
    description:
      "Thank you for listening, I hope you will have a good time here | Get the latest vinyl (limited edition) ...",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/jfKfPfyJRdk/default_live.jpg",
        width: 120,
        height: 90,
      },
      medium: {
        url: "https://i.ytimg.com/vi/jfKfPfyJRdk/mqdefault_live.jpg",
        width: 320,
        height: 180,
      },
      high: {
        url: "https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault_live.jpg",
        width: 480,
        height: 360,
      },
    },
    channelTitle: "Lofi Girl",
    liveBroadcastContent: "live",
    publishTime: "2022-07-12T12:12:29Z",
  },
};

export type LivestreamContextData = {
  playLivestream: boolean;
  togglePlayLivestream(value: boolean): void;

  livestreamVolume: number;
  changeLivestreamVolume(value: number): void;

  livestreamVideoId: string;
  changeLivestreamVideo(value: string): void;

  selectedLivestream: ILivestreamsItems;
  changeSelectedLivestream(value: ILivestreamsItems): void;
};

export const LivestreamContext = createContext({} as LivestreamContextData);

interface props {
  children: ReactNode;
}

export const LivestreamProvider = ({ children }: props) => {
  const [playLivestream, setPlayLivestream] = useState(true);
  const [livestreamVolume, setLivestreamVolume] = useState(0.2);
  const [livestreamVideoId, setLivestreamVideoId] = useState("jfKfPfyJRdk");
  const [selectedLivestream, setSelectedLivestream] =
    useState<ILivestreamsItems>(defaultSelectedLivestream);

  function togglePlayLivestream(value: boolean) {
    setPlayLivestream(value);
  }
  function changeLivestreamVolume(value: number) {
    setLivestreamVolume(value);
  }
  function changeLivestreamVideo(value: string) {
    setLivestreamVideoId(value);
  }
  function changeSelectedLivestream(value: ILivestreamsItems) {
    setSelectedLivestream(value);
  }

  return (
    <LivestreamContext.Provider
      value={{
        playLivestream,
        togglePlayLivestream,
        livestreamVolume,
        changeLivestreamVolume,
        livestreamVideoId,
        changeLivestreamVideo,
        selectedLivestream,
        changeSelectedLivestream,
      }}
    >
      {children}
    </LivestreamContext.Provider>
  );
};

export function useLivestream() {
  return useContext(LivestreamContext);
}
