import { Box, Stack, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { channelsDatabase } from "../../../../database";
import { useLivestream } from "../../../../hooks";

import classes from "./index.module.scss";

export function NavBarFooter() {
  const theme = useMantineTheme();

  const minWidthResolution = useMediaQuery("(max-width: 1000px)");
  const minHeightResolution = useMediaQuery("(max-height: 680px)");

  const { selectedLivestream } = useLivestream();

  const [channelLogoUrl, setChannelLogoUrl] = useState("");

  useEffect(() => {
    setChannelLogoUrl(
      channelsDatabase
        .filter(
          (channel) =>
            channel.channelId === selectedLivestream.snippet.channelId
        )
        .map((ch) => ch.image.channelLogo)[0]
    );
  }, [selectedLivestream]);

  return (
    <Stack className={[classes.root, classes[theme.colorScheme]].join(" ")}>
      <div className={classes.personalLogoContainer}>
        <img
          src={
            theme.colorScheme === "dark"
              ? "KaykyDias_miniLogo.png"
              : "KaykyDias_miniLogo_lightMode.png"
          }
          width={minWidthResolution || minHeightResolution ? 40 : 80}
          height={minWidthResolution || minHeightResolution ? 40 : 70}
          alt=""
        />
      </div>
      <Stack className={classes.selectedLivestreamContainer}>
        {minWidthResolution || minHeightResolution ? (
          <div className={classes.channelLogoContainer}>
            <div className={classes.channelLogoSubContainer}>
              <img
                className={classes.selectedLivestreamImage}
                width={50}
                height={50}
                src={channelLogoUrl}
                alt=""
              />
            </div>
          </div>
        ) : (
          <>
            <img
              className={classes.selectedLivestreamImage}
              height={250}
              src={selectedLivestream.snippet.thumbnails.medium.url}
              alt=""
            />
            <Box className={classes.gradient} />
            <Text className={classes.selectedLivestreamTitle}>
              {selectedLivestream.snippet.channelTitle}
            </Text>
          </>
        )}
      </Stack>
    </Stack>
  );
}
