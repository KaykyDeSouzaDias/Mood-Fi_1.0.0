import { useLocalStorage } from "@mantine/hooks";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ILivestreamsItems } from "../models";

export const defaultSelectedLivestream = {
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

  selectedLivestream: ILivestreamsItems;
  changeSelectedLivestream(value: ILivestreamsItems): void;

  selectedLivestreamColor: string;
  changeSelectedLivestreamColor(value: string): void;
};

export const LivestreamContext = createContext({} as LivestreamContextData);

interface props {
  children: ReactNode;
}

export const LivestreamProvider = ({ children }: props) => {
  const [chosenLivestreamStorage, setChosenLivestreamStorage] =
    useLocalStorage<ILivestreamsItems>({
      key: "ChosenLivestream",
      defaultValue: defaultSelectedLivestream,
    });

  const [playLivestream, setPlayLivestream] = useState(true);
  const [livestreamVolume, setLivestreamVolume] = useState(0.2);
  const [selectedLivestream, setSelectedLivestream] =
    useState<ILivestreamsItems>(defaultSelectedLivestream);
  const [selectedLivestreamColor, setSelectedLivestreamColor] =
    useState("24,24,24");

  useEffect(() => {
    const livestreamStorage = window.localStorage.getItem("ChosenLivestream");
    const volumeStorage = window.localStorage.getItem("LivestreamVolume");

    setSelectedLivestream(
      JSON.parse(livestreamStorage!) ?? defaultSelectedLivestream
    );
    setLivestreamVolume(JSON.parse(volumeStorage!) ?? 0.2);
  }, []);

  function togglePlayLivestream(value: boolean) {
    setPlayLivestream(value);
  }
  function changeLivestreamVolume(value: number) {
    setLivestreamVolume(value);
  }
  function changeSelectedLivestream(value: ILivestreamsItems) {
    setSelectedLivestream(value);
  }
  function changeSelectedLivestreamColor(value: string) {
    setSelectedLivestreamColor(value);
  }

  return (
    <LivestreamContext.Provider
      value={{
        playLivestream,
        togglePlayLivestream,
        livestreamVolume,
        changeLivestreamVolume,
        selectedLivestream,
        changeSelectedLivestream,
        selectedLivestreamColor,
        changeSelectedLivestreamColor,
      }}
    >
      {children}
    </LivestreamContext.Provider>
  );
};

export function useLivestream() {
  return useContext(LivestreamContext);
}
