import ReactPlayer from "react-player/youtube";
import { useLivestream } from "../../../hooks";

import classes from "./index.module.scss";

export const LivestreamContainer = () => {
  const { togglePlayLivestream, livestreamVideoId } = useLivestream();

  return (
    <>
      <div className={classes.player}>
        <ReactPlayer
          url={`https://www.youtube.com/embed/${livestreamVideoId}`}
          width="100%"
          height="100%"
          playing={true}
          muted={true}
          onReady={() => togglePlayLivestream(true)}
          onPlay={() => togglePlayLivestream(true)}
          onPause={() => togglePlayLivestream(false)}
        />
      </div>
    </>
  );
};
