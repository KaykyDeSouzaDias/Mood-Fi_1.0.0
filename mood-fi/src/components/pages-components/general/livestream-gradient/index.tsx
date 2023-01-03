import { Box, useMantineTheme } from "@mantine/core";
import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { channelsDatabase } from "../../../../database";
import { useLivestream } from "../../../../hooks";

import classes from "./index.module.scss";

export function LivestreamGradient() {
  const theme = useMantineTheme();

  const average = new FastAverageColor();
  const im = useRef<HTMLImageElement>(null);

  const { selectedLivestream, changeSelectedLivestreamColor } = useLivestream();

  const [averageColor, setAverageColor] = useState("");
  const [channelLogoImage, setChannelLogoImage] = useState("");

  useEffect(() => {
    setChannelLogoImage(
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
        const avgColor = color.rgb.substring(4, color.rgb.length - 1);

        setAverageColor(avgColor);
        changeSelectedLivestreamColor(avgColor);
      });
  }, [channelLogoImage]);

  return (
    <>
      <Box
        className={[classes.root, classes[theme.colorScheme]].join(" ")}
        style={{
          background: `radial-gradient(
            rgba(${averageColor}, 0.4) 0%,
            rgba(${averageColor}, 0.2) 50%,
            rgba(${averageColor}, 0) 100%
          )`,
        }}
      />
      <img
        crossOrigin="anonymous"
        ref={im}
        width={50}
        height={50}
        src={channelLogoImage}
        style={{ display: "none", visibility: "collapse" }}
        alt=""
      />
    </>
  );
}
