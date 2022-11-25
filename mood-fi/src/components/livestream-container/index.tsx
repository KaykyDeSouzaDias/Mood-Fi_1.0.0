import {
  forwardRef,
  MutableRefObject,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { LivestreamContext, useLivestream } from "../../hooks";

import ReactPlayer from "react-player/youtube";

interface LivestreamContainerProps {
  setLive(playLive: boolean): void;
}

export const LivestreamContainer = ({ setLive }: LivestreamContainerProps) => {
  const [playL, setPlayL] = useState(false);
  const { live, setL } = useLivestream();
  const audioRef = useRef(null);

  useEffect(() => {
    setLive(playL);
    setL(playL);
  }, [playL]);

  console.log("without context: " + playL);
  console.log("with context: " + live.playLive);

  return (
    <>
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/embed/jfKfPfyJRdk"
        width="85%"
        height="75%"
        playing={true}
        onPlay={() => setPlayL(true)}
        onPause={() => setPlayL(false)}
        muted={true}
      />
      {/* <iframe
        ref={audioRef}
        // onClick={() => setPlayLive(true)}
        frameBorder={0}
        width="85%"
        height="75%"
        src="https://www.youtube.com/embed/jfKfPfyJRdk?controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe> */}
    </>
  );
};
