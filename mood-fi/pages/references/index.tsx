import { useState } from "react";
import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  Grid,
  Group,
  MantineProvider,
  MantineThemeOverride,
  ScrollArea,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { useLocalStorage, useMediaQuery } from "@mantine/hooks";
import {
  LivestreamGradient,
  PageTitle,
  ReferenceCard,
} from "../../src/components";

import classes from "./index.module.scss";
import { channelsDatabase } from "../../src/database";

export function ReferenceLivePage() {
  const theme = useMantineTheme();

  const CardsMediumGridResolution = useMediaQuery("(max-width: 2000px)");
  const CardsSmallGridResolution = useMediaQuery("(max-width: 1200px)");

  const [onScroll, setOnScroll] = useState(0);

  return (
    <Stack className={[classes.root, classes[theme.colorScheme]].join(" ")}>
      <LivestreamGradient />

      <ScrollArea
        onScrollPositionChange={(value) => setOnScroll(value.y)}
        type="scroll"
        offsetScrollbars
        style={{
          position: "sticky",
          zIndex: 2,
        }}
      >
        <PageTitle
          pageName="REFERENCES"
          pageDescription="Choose the best Livestream that makes you get in the mood."
          bigScrollSize={80}
          smallScrollSize={60}
          onScroll={onScroll}
        />

        <Grid
          className={classes.cardsGrid}
          columns={
            CardsSmallGridResolution ? 8 : CardsMediumGridResolution ? 12 : 16
          }
          gutter="lg"
        >
          {channelsDatabase.map((channel) => {
            return (
              <Grid.Col xs={4}>
                <ReferenceCard actualChannel={channel} />
              </Grid.Col>
            );
          })}
        </Grid>
      </ScrollArea>
    </Stack>
  );
}
