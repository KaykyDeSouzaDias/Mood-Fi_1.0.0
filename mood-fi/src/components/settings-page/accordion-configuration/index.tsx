import {
  Accordion,
  Avatar,
  Badge,
  Group,
  useMantineTheme,
} from "@mantine/core";

import classes from "./index.module.scss";
import { IconPhoto, IconPrinter } from "@tabler/icons";
import { ISettingOptions } from "../../../models";
import { MaterialIcon } from "../..";

export interface AccordionConfigurationProps {
  currentSetting: ISettingOptions;
}

export function AccordionConfiguration({
  currentSetting,
}: AccordionConfigurationProps) {
  const theme = useMantineTheme();

  const getAccordionRightSide = () => {
    return (
      <Group noWrap className={classes.accordionStatusChevron}>
        <Badge color="yellow" radius="sm" variant="filled">
          {currentSetting.status}
        </Badge>
        <MaterialIcon iconName={"expand_more"} size={20} />
      </Group>
    );
  };

  return (
    <Accordion
      variant="separated"
      disableChevronRotation
      chevron={getAccordionRightSide()}
      styles={{
        chevron: {
          marginRight: "60px",
        },
      }}
      className={[classes.root, classes[theme.colorScheme]].join(" ")}
    >
      <Accordion.Item value="photos">
        <Accordion.Control
          icon={<MaterialIcon iconName={currentSetting.icon} size={20} />}
        >
          <div>
            <p>{currentSetting.name}</p>
            <p color="dimmed">{currentSetting.description}</p>
          </div>
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
