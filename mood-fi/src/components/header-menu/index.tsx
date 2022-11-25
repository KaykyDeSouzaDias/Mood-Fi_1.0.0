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
import { MaterialIcon } from "..";
import { defineCustomTheme } from "../../theme";

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

          <Group className={classes.soundControl}>
            <MaterialIcon
              className={classes.iconSoundControl}
              iconName={"volume_up"}
              size={20}
            />
            <Slider
              className={classes.sliderSoundControl}
              size="sm"
              radius="md"
              defaultValue={50}
              min={0}
              max={100}
              styles={(theme) => ({
                thumb: {
                  transition: "opacity 150ms ease",
                  backgroundColor: t.colors.deepYellow.p80,
                  borderColor: t.colors.deepYellow.p80,
                },

                bar: {
                  backgroundColor: t.colors.deepYellow.p80,
                },

                dragging: {
                  backgroundColor: t.colors.deepYellow.p80,
                  opacity: 1,
                },
              })}
            />
          </Group>
        </Group>
      </Box>
    </Header>
  );
}
