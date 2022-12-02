import { Box, Group, Stack, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { channelsProfilePictureDatabase } from "../../../database";
import { useLivestream } from "../../../hooks";
import classes from "./index.module.scss";

export function NavBarFooter() {
  const theme = useMantineTheme();
  const minWidthResolution = useMediaQuery("(max-width: 1000px)");
  const minHeightResolution = useMediaQuery("(max-height: 750px)");

  const { selectedLivestream } = useLivestream();

  const [channelUrl, setChannelUrl] = useState("");

  useEffect(() => {
    setChannelUrl(
      channelsProfilePictureDatabase
        .filter(
          (channel) => channel.id === selectedLivestream.snippet.channelId
        )
        .map((ch) => ch.url)[0]
    );
  }, [selectedLivestream]);

  return (
    <Stack className={[classes.root, classes[theme.colorScheme]].join(" ")}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img
          src={
            minWidthResolution || minHeightResolution
              ? "../../../../public/Mood-Fi mini logo.svg"
              : "../../../../public/Mood-Fi logo.svg"
          }
          width={minWidthResolution || minHeightResolution ? 50 : 80}
          height={minWidthResolution || minHeightResolution ? 40 : 70}
          alt=""
        />
      </div>
      <Stack className={classes.selectedLivestreamContainer}>
        {minWidthResolution || minHeightResolution ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",

              marginBottom: "30px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",

                overflow: "hidden",

                borderRadius: "50px",
              }}
            >
              <img
                className={classes.selectedLivestreamImage}
                width="50px"
                height="50px"
                src={channelUrl}
                alt=""
              />
            </div>
          </div>
        ) : (
          <>
            <img
              className={classes.selectedLivestreamImage}
              height="250px"
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
