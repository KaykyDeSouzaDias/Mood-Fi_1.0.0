import { Box, Group, Stack, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { useLivestream } from "../../../hooks";
import classes from "./index.module.scss";

export function NavBarFooter() {
  const theme = useMantineTheme();
  const minResolution = useMediaQuery("(max-width: 1000px)");

  const { selectedLivestream } = useLivestream();

  return (
    <Stack className={[classes.root, classes[theme.colorScheme]].join(" ")}>
      <Stack className={classes.selectedLivestreamContainer}>
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
      </Stack>
    </Stack>
  );
}
