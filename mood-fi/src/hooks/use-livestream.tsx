import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface LivestreamContextProps {
  playLive: boolean;
}

export type LivestreamContextType = {
  live: LivestreamContextProps;
  setL(value: LivestreamContextProps): void;
};

export const LivestreamContext = createContext<LivestreamContextType>(
  {} as LivestreamContextType
);

interface props {
  children: ReactNode;
}

export const LiveProvider = ({ children }: props) => {
  const [live, setL] = useState<LivestreamContextProps>({
    playLive: false,
  });

  return (
    <LivestreamContext.Provider value={{ live, setL }}>
      {children}
    </LivestreamContext.Provider>
  );
};

export function useLivestream() {
  return useContext(LivestreamContext) as LivestreamContextType;
}
