import { SimpleGrid, Stack, useMantineTheme } from "@mantine/core";
import {
  AccordionConfiguration,
  PageContentContainerLayout,
} from "../../src/components";
import { settingOptionsDatabase } from "../../src/database/setting-options";

import classes from "./index.module.scss";

export function SettingsLivePage() {
  const theme = useMantineTheme();

  return (
    <Stack className={[classes.root, classes[theme.colorScheme]].join(" ")}>
      <PageContentContainerLayout
        pageTitle="SETTINGS"
        pageDescription="Choose the best Livestream that makes you get in the mood."
        bigScroll={100}
        smallScroll={80}
      >
        <SimpleGrid className={classes.cardsGrid} cols={1}>
          {settingOptionsDatabase.map((config) => {
            return <AccordionConfiguration currentSetting={config} />;
          })}
        </SimpleGrid>
      </PageContentContainerLayout>
    </Stack>
  );
}
