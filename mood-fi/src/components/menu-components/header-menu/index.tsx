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
          // p="md"
          style={{ backgroundColor: t.moodFiTheme.appHeader }}
          className={[classes.root, classes[theme.colorScheme]].join(" ")}
        >
          <div
            style={{
              background:
                theme.colorScheme === "dark"
                  ? "linear-gradient(180deg, rgba(222, 102, 88, 0.15) 0%, rgba(222, 102, 88, 0.1) 100%)"
                  : "linear-gradient(180deg, rgba(222, 102, 88, 0.4) 0%, rgba(222, 102, 88, 0.3) 100%)",
            }}
            className={classes.container}
          >
            <Group className={classes.navBarHeader} position="right" noWrap>
              <LivestreamVolumeSlider />
            </Group>
          </div>
        </Box>
        {/* <div className={classes.gradient}></div> */}
      </div>
    </>
  );
}
