import { createContext, ReactNode, useContext, useState } from "react";

export type LivestreamContextData = {
  playLivestream: boolean;
  togglePlayLivestream(value: boolean): void;

  livestreamVolume: number;
  changeLivestreamVolume(value: number): void;
};

export const LivestreamContext = createContext({} as LivestreamContextData);

interface props {
  children: ReactNode;
}

export const LivestreamProvider = ({ children }: props) => {
  const [playLivestream, setPlayLivestream] = useState(true);
  const [livestreamVolume, setLivestreamVolume] = useState(0.5);

  function togglePlayLivestream(value: boolean) {
    setPlayLivestream(value);
  }

  function changeLivestreamVolume(value: number) {
    setLivestreamVolume(value);
  }

  return (
    <LivestreamContext.Provider
      value={{
        playLivestream,
        togglePlayLivestream,
        livestreamVolume,
        changeLivestreamVolume,
      }}
    >
      {children}
    </LivestreamContext.Provider>
  );
};

export function useLivestream() {
  return useContext(LivestreamContext);
}
