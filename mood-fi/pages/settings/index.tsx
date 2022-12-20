import { useState } from "react";
import {
  Grid,
  ScrollArea,
  SimpleGrid,
  Stack,
  useMantineTheme,
} from "@mantine/core";

import classes from "./index.module.scss";
import {
  AccordionConfiguration,
  LivestreamGradient,
  PageTitle,
} from "../../src/components";
import { settingOptionsDatabase } from "../../src/database/setting-options";

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
        <SimpleGrid className={classes.cardsGrid} cols={1}>
          {settingOptionsDatabase.map((config) => {
            return <AccordionConfiguration currentSetting={config} />;
          })}
        </SimpleGrid>
      </ScrollArea>
    </Stack>
  );
}
