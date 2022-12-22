import {
  Accordion,
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Group,
  Select,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";

import classes from "./index.module.scss";
import { IconMoonStars, IconPhoto, IconPrinter, IconSun } from "@tabler/icons";
import { ISettingOptions } from "../../../models";
import { MaterialIcon } from "../..";
import { useState } from "react";
import { defineCustomTheme } from "../../../theme";

export interface AccordionConfigurationProps {
  currentSetting: ISettingOptions;
}

export function AccordionConfiguration({
  currentSetting,
}: AccordionConfigurationProps) {
  const theme = useMantineTheme();
  const t = defineCustomTheme(theme);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const [isAccordionExpanded, setIsAccordionExpanded] = useState<string | null>(
    null
  );

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

  const getAccordionRightSide = () => {
    return (
      <Group noWrap className={classes.accordionStatusChevron}>
        <Badge
          className={classes.accordionStatusBadge}
          radius="sm"
          p={5}
          variant="filled"
        >
          {currentSetting.status}
        </Badge>
        <MaterialIcon iconName={"expand_more"} size={20} />
      </Group>
    );
  };

  return (
    <Box
      className={[classes.root, classes[theme.colorScheme]].join(" ")}
      sx={(theme) => ({
        backgroundColor: t.moodFiTheme.onBackground,
        textAlign: "center",
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: "pointer",
      })}
    >
      <div className={classes.iconTitleSettingContainer}>
        <div
          className={classes.settingIcon}
          style={{ backgroundColor: t.moodFiTheme.primary }}
        >
          <MaterialIcon iconName={currentSetting.icon} size={35} />
        </div>
        <div className={classes.settingTitleAndSubTitle}>
          <p>
            {currentSetting.name} <br /> {currentSetting.description}
          </p>
        </div>
      </div>
      {getAccordionContent()}
    </Box>
  );
}
