import { Accordion, useMantineTheme } from "@mantine/core";

import classes from "./index.module.scss";
import { IconPhoto, IconPrinter } from "@tabler/icons";

export function AccordionConfiguration() {
  const theme = useMantineTheme();

  const getColor = (color: string) =>
    theme.colors[color][theme.colorScheme === "dark" ? 5 : 7];

  return (
    <Accordion variant="separated">
      <Accordion.Item value="photos">
        <Accordion.Control
          icon={<IconPhoto size={20} color={getColor("red")} />}
        >
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control
          icon={<IconPrinter size={20} color={getColor("blue")} />}
        >
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
