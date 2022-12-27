import { useState } from "react";
import { Grid, Stack, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ReferenceCard } from "../../src/components";
import { channelsDatabase } from "../../src/database";
import { PageContentContainerLayout } from "../../src/components/layouts/page-content-container";

import classes from "./index.module.scss";

export function ReferenceLivePage() {
  const theme = useMantineTheme();

  const CardsMediumGridResolution = useMediaQuery("(max-width: 2000px)");
  const CardsSmallGridResolution = useMediaQuery("(max-width: 1200px)");

  return (
    <Stack className={[classes.root, classes[theme.colorScheme]].join(" ")}>
      <PageContentContainerLayout
        pageTitle="REFERENCES"
        pageDescription="Choose the best Livestream that makes you get in the mood."
        bigScroll={80}
        smallScroll={60}
      >
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
      </PageContentContainerLayout>
    </Stack>
  );
}
