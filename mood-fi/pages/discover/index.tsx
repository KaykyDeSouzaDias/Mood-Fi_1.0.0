import { Grid, Stack, useMantineTheme } from "@mantine/core";
import { useLocalStorage, useMediaQuery } from "@mantine/hooks";
import { ILivestreamsItems } from "../../src/models";
import {
  LivestreamsCards,
  PageContentContainerLayout,
} from "../../src/components";
import { livestreamDatabase } from "../../src/database";
import { useTranslation } from "react-i18next";

import classes from "./index.module.scss";

export const DiscoverPage = () => {
  const theme = useMantineTheme();
  const { t } = useTranslation();

  const CardsMediumGridResolution = useMediaQuery("(max-width: 2000px)");
  const CardsSmallGridResolution = useMediaQuery("(max-width: 1200px)");

  const [livestreams, setLivestreams] = useLocalStorage<ILivestreamsItems[]>({
    key: "Livestreams",
    defaultValue: livestreamDatabase,
  });

  return (
    <Stack className={[classes.root, classes[theme.colorScheme]].join(" ")}>
      <PageContentContainerLayout
        pageTitle={t("discoverPageTitle")}
        pageDescription={t("discoverDescription")}
        bigScroll={100}
        smallScroll={80}
      >
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
      </PageContentContainerLayout>
    </Stack>
  );
};
