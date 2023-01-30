import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useLivestream } from "../../../hooks";

import classes from "./index.module.scss";

export const LivestreamExternalPlayer = () => {
  const theme = useMantineTheme();

  const {
    playLivestream,
    livestreamVolume,
    selectedLivestream,
    canShowExternalPlayer,
    toggleCanShowExternalPlayer,
    toggleHasPlayedLivestream,
  } = useLivestream();

  const minWidthResolution = useMediaQuery("(max-width: 1000px)");
  const minHeightResolution = useMediaQuery("(max-height: 680px)");

  return (
    <div className={[classes.root, classes[theme.colorScheme]].join(" ")}>
      <div
        className={
          canShowExternalPlayer
            ? classes.visiblePlayer
            : classes.invisiblePlayer
        }
        style={{
          width: minWidthResolution || minHeightResolution ? 300 : 500,
          height: minWidthResolution || minHeightResolution ? 190 : 290,
        }}
      >
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          volume={livestreamVolume}
          url={`https://www.youtube.com/embed/${selectedLivestream.id.videoId}`}
          playing={playLivestream}
          onPlay={() => {
            setTimeout(() => {
              toggleHasPlayedLivestream(true);
              toggleCanShowExternalPlayer(false);
            }, 100);
          }}
        />
      </div>
    </div>
  );
};
