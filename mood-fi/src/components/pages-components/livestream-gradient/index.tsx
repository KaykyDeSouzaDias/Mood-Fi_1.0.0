import { Box, useMantineTheme } from "@mantine/core";
import { FastAverageColor } from "fast-average-color";
import React, { createElement, useEffect, useState } from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";
import { channelsDatabase } from "../../../database";
import { useLivestream } from "../../../hooks";

import classes from "./index.module.scss";

export function LivestreamGradient() {
  const theme = useMantineTheme();

  const [avgColor, setAvgColor] = useState("");
  const average = new FastAverageColor();
  const im = useRef<HTMLImageElement>(null);

  const { selectedLivestream, changeSelectedLivestreamColor } = useLivestream();

  const [channelUrl, setChannelUrl] = useState("");

  useEffect(() => {
    setChannelUrl(
      channelsDatabase
        .filter(
          (channel) =>
            channel.channelId === selectedLivestream.snippet.channelId
        )
        .map((ch) => ch.image.channelLogo)[0]
    );
  }, [selectedLivestream]);

  useEffect(() => {
    average
      .getColorAsync(im.current, {
        algorithm: "dominant",
      })
      .then((color) => {
        setAvgColor(color.rgb.substring(4, color.rgb.length - 1));
        changeSelectedLivestreamColor(
          color.rgb.substring(4, color.rgb.length - 1)
        );
      });
  }, [channelUrl]);

  console.log(avgColor);

  return (
    <>
      <Box
        style={{
          background: `linear-gradient(
            180deg,
            rgba(${avgColor}, 0.4) 0%,
            rgba(${avgColor}, 0.2) 50%,
            rgba(${avgColor}, 0) 100%
          )`,
        }}
        className={[classes.root, classes[theme.colorScheme]].join(" ")}
      />
      <img
        crossOrigin="anonymous"
        ref={im}
        width={50}
        height={50}
        src={channelUrl}
        style={{ display: "none", visibility: "collapse" }}
        alt=""
      />
    </>
  );
}
