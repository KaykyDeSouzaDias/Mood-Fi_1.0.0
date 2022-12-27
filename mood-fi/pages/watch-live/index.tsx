import { Box, Stack, useMantineTheme } from "@mantine/core";
import { LivestreamContainer, LivestreamGradient } from "../../src/components";

import classes from "./index.module.scss";

export function WatchLivePage() {
  const theme = useMantineTheme();

  return (
    <>
      <Stack className={[classes.root, classes[theme.colorScheme]].join(" ")}>
        <LivestreamGradient />
        <Box className={classes.video}>
          <LivestreamContainer />
        </Box>
      </Stack>
    </>
  );
}
