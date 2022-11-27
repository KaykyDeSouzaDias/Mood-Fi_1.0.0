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
    <Header
      height={{ base: 70 }}
      p="md"
      withBorder={false}
      className={[classes.root, classes[theme.colorScheme]].join(" ")}
    >
      <Box>
        <Group className={classes.navBarHeader} position="apart" noWrap>
          <Group
            style={{
              width: minResolution ? "45px" : "250px",
              display: "flex",
              justifyContent: minResolution ? "center" : "space-between",
            }}
            position={"apart"}
          >
            <MaterialIcon iconName={"sunny"} size={40} />
            {minResolution ? (
              <></>
            ) : (
              <Text className={classes.version}>v3.1.2</Text>
            )}
          </Group>

          <LivestreamVolumeSlider />
        </Group>
      </Box>
    </Header>
  );
}
