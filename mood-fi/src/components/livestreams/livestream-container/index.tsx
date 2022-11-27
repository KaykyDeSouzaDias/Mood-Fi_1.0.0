import ReactPlayer from "react-player/youtube";
import { useLivestream } from "../../../hooks";

export const LivestreamContainer = () => {
  const { togglePlayLivestream, livestreamVideoId } = useLivestream();

  return (
    <>
      <ReactPlayer
        className="react-player"
        url={`https://www.youtube.com/embed/${livestreamVideoId}`}
        width="85%"
        height="75%"
        playing={true}
        muted={true}
        onPlay={() => togglePlayLivestream(true)}
        onPause={() => togglePlayLivestream(false)}
      />
    </>
  );
};
