import { Box, Group, Stack, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { channelsDatabase } from "../../../database";
import { useLivestream } from "../../../hooks";
import classes from "./index.module.scss";

export function NavBarFooter() {
  const theme = useMantineTheme();
  const minWidthResolution = useMediaQuery("(max-width: 1000px)");
  const minHeightResolution = useMediaQuery("(max-height: 750px)");

  const { selectedLivestream } = useLivestream();

  return (
    <Stack className={[classes.root, classes[theme.colorScheme]].join(" ")}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img
          src={
            minWidthResolution || minHeightResolution
              ? "../../../../public/Mood-Fi mini logo.svg"
              : "../../../../public/Mood-Fi logo.svg"
          }
          width={minWidthResolution || minHeightResolution ? 70 : 80}
          height={minWidthResolution || minHeightResolution ? 60 : 70}
          alt=""
        />
      </div>
      <Stack className={classes.selectedLivestreamContainer}>
        {/* <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "20px",
          }}
        >
          <img
            className={classes.selectedLivestreamImage}
            width="100%"
            height="100%"
            src={
              channelsDatabase.filter(
                (channel) =>
                  channel.snippet.channelId ===
                  selectedLivestream.snippet.channelId
              )[0].snippet.thumbnails.high.url
            }
            alt=""
          />
        </div> */}
        {minWidthResolution || minHeightResolution ? (
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "20px",
            }}
          >
            <img
              className={classes.selectedLivestreamImage}
              width="100%"
              height="100%"
              src={
                channelsDatabase.filter(
                  (channel) =>
                    channel.snippet.channelId ===
                    selectedLivestream.snippet.channelId
                )[0].snippet.thumbnails.high.url
              }
              alt=""
            />
          </div>
        ) : (
          <img
            className={classes.selectedLivestreamImage}
            height="250px"
            src={selectedLivestream.snippet.thumbnails.medium.url}
            alt=""
          />
        )}
        <Box className={classes.gradient} />
        <Text className={classes.selectedLivestreamTitle}>
          {selectedLivestream.snippet.channelTitle}
        </Text>
      </Stack>
    </Stack>
  );
}
