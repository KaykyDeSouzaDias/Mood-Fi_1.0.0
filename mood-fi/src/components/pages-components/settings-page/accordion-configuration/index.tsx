import {
  ActionIcon,
  Badge,
  Box,
  Group,
  Select,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";
import { MaterialIcon } from "../../..";
import { ISettingOptions } from "../../../../models";
import { defineCustomTheme } from "../../../../theme";

import classes from "./index.module.scss";

export interface AccordionConfigurationProps {
  currentSetting: ISettingOptions;
}

export function AccordionConfiguration({
  currentSetting,
}: AccordionConfigurationProps) {
  const theme = useMantineTheme();
  const t = defineCustomTheme(theme);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const getAccordionContent = () => {
    switch (currentSetting.type) {
      case "select":
        return (
          <Select
            defaultValue={"English"}
            defaultChecked={true}
            data={[
              { value: "react", label: "React" },
              { value: "ng", label: "Angular" },
              { value: "svelte", label: "Svelte" },
              { value: "vue", label: "Vue" },
            ]}
          />
        );
      case "switch":
        return (
          <Group position="center">
            <ActionIcon
              onClick={() => toggleColorScheme()}
              size="lg"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.yellow[4]
                    : theme.colors.blue[6],
              })}
            >
              {colorScheme === "dark" ? (
                <IconSun size={18} />
              ) : (
                <IconMoonStars size={18} />
              )}
            </ActionIcon>
          </Group>
        );

      default:
        break;
    }
  };

  return (
    <Box
      className={[classes.root, classes[theme.colorScheme]].join(" ")}
      sx={(theme) => ({
        backgroundColor: t.moodFiTheme.onBackground,
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
      })}
    >
      <div className={classes.iconTitleSettingContainer}>
        <div
          className={classes.settingIcon}
          style={{ backgroundColor: t.moodFiTheme.primary }}
        >
          <MaterialIcon iconName={currentSetting.icon} size={35} />
        </div>
        <div
          className={classes.settingTitleAndSubTitle}
          style={{ color: t.moodFiTheme.onBackgroundText }}
        >
          <p>
            {currentSetting.name} <br /> {currentSetting.description}
          </p>
        </div>
      </div>
      {getAccordionContent()}
    </Box>
  );
}