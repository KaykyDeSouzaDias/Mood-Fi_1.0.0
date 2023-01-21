import { SimpleGrid, Stack, useMantineTheme } from "@mantine/core";
import { useTranslation } from "react-i18next";
import {
  AccordionConfiguration,
  PageContentContainerLayout,
} from "../../src/components";
import { settingOptionsDatabase } from "../../src/database/setting-options";

import classes from "./index.module.scss";

export function SettingsLivePage() {
  const theme = useMantineTheme();
  const { t } = useTranslation();

  return (
    <Stack className={[classes.root, classes[theme.colorScheme]].join(" ")}>
      <PageContentContainerLayout
        pageTitle={t("settingsPageTitle")}
        pageDescription={t("settingsDescription")}
        bigScroll={55}
        smallScroll={45}
      >
        <SimpleGrid className={classes.cardsGrid} cols={1}>
          {settingOptionsDatabase().map((config) => {
            return <AccordionConfiguration currentSetting={config} />;
          })}
        </SimpleGrid>
      </PageContentContainerLayout>
    </Stack>
  );
}
