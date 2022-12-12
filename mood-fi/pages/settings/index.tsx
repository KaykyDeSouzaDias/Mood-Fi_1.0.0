import { useState } from "react";
import { Grid, ScrollArea, Stack, useMantineTheme } from "@mantine/core";

import classes from "./index.module.scss";
import {
  AccordionConfiguration,
  LivestreamGradient,
  PageTitle,
} from "../../src/components";

export function SettingsLivePage() {
  const theme = useMantineTheme();

  const [onScroll, setOnScroll] = useState(0);

  return (
    <Stack className={[classes.root, classes[theme.colorScheme]].join(" ")}>
      <LivestreamGradient />

      <ScrollArea
        onScrollPositionChange={(value) => setOnScroll(value.y)}
        type="scroll"
        offsetScrollbars
      >
        <PageTitle
          pageName="SETTINGS"
          pageDescription="Choose the best Livestream that makes you get in the mood."
          bigScrollSize={100}
          smallScrollSize={80}
          onScroll={onScroll}
        />

        <Grid className={classes.cardsGrid}>
          <Grid.Col span="auto">
            <AccordionConfiguration />
          </Grid.Col>
        </Grid>
      </ScrollArea>
    </Stack>
  );
}
