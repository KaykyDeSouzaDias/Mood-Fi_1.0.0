import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  Container,
  Group,
  Header,
  MantineProvider,
  MantineThemeOverride,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { HeaderMenu, LivestreamContainer } from "../../src/components";

import classes from "./index.module.scss";
import { useLivestream } from "../../src/hooks";

interface WatchLivePageProps {
  setLive(playLive: boolean): void;
}

export function WatchLivePage({ setLive }: WatchLivePageProps) {
  const theme = useMantineTheme();

  return (
    <>
      <Stack className={[classes.root, classes[theme.colorScheme]].join(" ")}>
        <Box className={classes.gradient} />
        <Box className={classes.video}>
          <LivestreamContainer setLive={(value) => setLive(value)} />
        </Box>
      </Stack>
    </>
  );
}
