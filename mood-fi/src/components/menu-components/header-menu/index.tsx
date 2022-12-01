import {
  Box,
  Button,
  CloseButton,
  Code,
  Group,
  Header,
  Slider,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useHover, useMediaQuery } from "@mantine/hooks";
import { MaterialIcon } from "../..";
import { defineCustomTheme } from "../../../theme";
import { LivestreamVolumeSlider } from "../../user-controls";

import classes from "./index.module.scss";

export function HeaderMenu() {
  const theme = useMantineTheme();
  const t = defineCustomTheme(theme);
  const minResolution = useMediaQuery("(max-width: 1000px)");

  return (
    <>
      <div style={{ width: "100%" }}>
        <Box
          p="md"
          className={[classes.root, classes[theme.colorScheme]].join(" ")}
        >
          <Group className={classes.navBarHeader} position="right" noWrap>
            <LivestreamVolumeSlider />
          </Group>
        </Box>
        <div className={classes.gradient}></div>
      </div>
    </>
  );
}
