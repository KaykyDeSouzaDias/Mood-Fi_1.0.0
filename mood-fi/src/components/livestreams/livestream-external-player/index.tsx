import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useLivestream } from "../../../hooks";
import { appWindow } from "@tauri-apps/api/window";
import { UnlistenFn } from "@tauri-apps/api/event";

import classes from "./index.module.scss";

var _playLivestream: boolean = false;
var _unlisten: UnlistenFn | null = null;

export const LivestreamExternalPlayer = () => {
  const theme = useMantineTheme();

  const {
    playLivestream,
    livestreamVolume,
    selectedLivestream,
    canShowExternalPlayer,
    toggleCanShowExternalPlayer,
    toggleHasPlayedLivestream,
    togglePlayLivestream,
  } = useLivestream();

  const minWidthResolution = useMediaQuery("(max-width: 1000px)");
  const minHeightResolution = useMediaQuery("(max-height: 680px)");

  useEffect(() => {
    if (!document.hidden) {
      _playLivestream = playLivestream;
    }
  }, [playLivestream]);

  useEffect(() => {
    listenOnResized();
    return () => {
      _unlisten && _unlisten();
    };
  }, []);

  async function listenOnResized() {
    _unlisten = await appWindow.onResized(() => {
      if (!document.hidden && _playLivestream && !playLivestream) {
        togglePlayLivestream(true);
      }
    });
  }

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
          playing={document.hidden ? _playLivestream : playLivestream}
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
