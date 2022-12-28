import { useMantineTheme } from "@mantine/core";
import ReactPlayer from "react-player/youtube";
import { useLivestream } from "../../../hooks";

import classes from "./index.module.scss";

export const LivestreamContainer = () => {
  const theme = useMantineTheme();

  const { togglePlayLivestream, selectedLivestream } = useLivestream();

  return (
    <>
      <div className={[classes.root, classes[theme.colorScheme]].join(" ")}>
        <ReactPlayer
          url={`https://www.youtube.com/embed/${selectedLivestream.id.videoId}`}
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
