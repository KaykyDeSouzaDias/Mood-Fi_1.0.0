import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  Grid,
  Group,
  MantineProvider,
  MantineThemeOverride,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useLocalStorage, useMediaQuery } from "@mantine/hooks";
import { useLivestream } from "../../src/hooks";
import { getLivestreams } from "../../src/services";
import { ILivestreams, ILivestreamsItems } from "../../src/models";
import { LivestreamsCards } from "../../src/components";
import { livestreamDatabase } from "../../src/database";

import classes from "./index.module.scss";
import { defineCustomTheme } from "../../src/theme";

export const DiscoverPage = () => {
  const theme = useMantineTheme();
  const t = defineCustomTheme(theme);

  const CardsMediumGridResolution = useMediaQuery("(max-width: 2000px)");
  const CardsSmallGridResolution = useMediaQuery("(max-width: 1200px)");

  const [livestreams, setLivestreams] = useLocalStorage<ILivestreamsItems[]>({
    key: "Livestreams",
    defaultValue: livestreamDatabase,
  });

  return (
    <Stack className={[classes.root, classes[theme.colorScheme]].join(" ")}>
      <Box className={classes.gradient} />
      <div className={classes.titleContainer}>
        <Title className={classes.title}>DISCOVER</Title>
        <Title className={classes.subTitle}>
          Choose the best livestream that make you be mood.
        </Title>
      </div>
      <Group></Group>

      <Grid
        className={classes.cardsGrid}
        columns={
          CardsSmallGridResolution ? 4 : CardsMediumGridResolution ? 8 : 12
        }
        gutter="lg"
      >
        {livestreams.map((l) => {
          return (
            <Grid.Col xs={4}>
              <LivestreamsCards key={l.id.videoId} livestream={l} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Stack>
  );
};
