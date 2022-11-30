import { createContext, ReactNode, useContext, useState } from "react";

export type LivestreamContextData = {
  playLivestream: boolean;
  togglePlayLivestream(value: boolean): void;

  livestreamVolume: number;
  changeLivestreamVolume(value: number): void;

  livestreamVideoId: string;
  changeLivestreamVideo(value: string): void;
};

export const LivestreamContext = createContext({} as LivestreamContextData);

interface props {
  children: ReactNode;
}

export const LivestreamProvider = ({ children }: props) => {
  const [playLivestream, setPlayLivestream] = useState(true);
  const [livestreamVolume, setLivestreamVolume] = useState(0.2);
  const [livestreamVideoId, setLivestreamVideoId] = useState("jfKfPfyJRdk");

  function togglePlayLivestream(value: boolean) {
    setPlayLivestream(value);
  }

  function changeLivestreamVolume(value: number) {
    setLivestreamVolume(value);
  }

  function changeLivestreamVideo(value: string) {
    setLivestreamVideoId(value);
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
      }}
    >
      {children}
    </LivestreamContext.Provider>
  );
};

export function useLivestream() {
  return useContext(LivestreamContext);
}
