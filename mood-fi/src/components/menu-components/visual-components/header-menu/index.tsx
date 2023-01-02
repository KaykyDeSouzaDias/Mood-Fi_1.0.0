import { Box, Group, useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { useLivestream } from "../../../../hooks";
import { defineCustomTheme } from "../../../../theme";
import { LivestreamVolumeSlider } from "../../user-controls";

import classes from "./index.module.scss";

export function HeaderMenu() {
  const theme = useMantineTheme();
  const t = defineCustomTheme(theme);

  const { selectedLivestreamColor } = useLivestream();

  const [averageColor, setAverageColor] = useState("");

  useEffect(() => {
    setAverageColor(selectedLivestreamColor);
  }, [selectedLivestreamColor]);

  return (
    <>
      <div className={[classes.root, classes[theme.colorScheme]].join(" ")}>
        <Box
          className={classes.headerContainer}
          style={{ backgroundColor: t.moodFiTheme.menuBackground }}
        >
          <div
            className={classes.container}
            // style={{
            //   background:
            //     theme.colorScheme === "dark"
            //       ? `linear-gradient(180deg, rgba(${averageColor}, 0.15) 0%, rgba(${averageColor}, 0.1) 100%)`
            //       : `linear-gradient(180deg, rgba(${averageColor}, 0.4) 0%, rgba(${averageColor}, 0.3) 100%)`,
            // }}
          >
            <Group className={classes.navBarHeader} position="right" noWrap>
              <LivestreamVolumeSlider />
            </Group>
          </div>
        </Box>
      </div>
    </>
  );
}
