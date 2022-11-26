import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type LivestreamContextData = {
  playLivestream: boolean;
  togglePlayLivestream(value: boolean): void;
};

export const LivestreamContext = createContext({} as LivestreamContextData);

interface props {
  children: ReactNode;
}

export const LivestreamProvider = ({ children }: props) => {
  const [playLivestream, setPlayLivestream] = useState(true);

  function togglePlayLivestream(value: boolean) {
    setPlayLivestream(value);
  }

  return (
    <LivestreamContext.Provider
      value={{ playLivestream, togglePlayLivestream }}
    >
      {children}
    </LivestreamContext.Provider>
  );
};

export function useLivestream() {
  return useContext(LivestreamContext);
}
