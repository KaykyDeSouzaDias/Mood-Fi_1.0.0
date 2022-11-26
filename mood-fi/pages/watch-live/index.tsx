import { Box, Stack, useMantineTheme } from "@mantine/core";
import { LivestreamContainer } from "../../src/components";

import classes from "./index.module.scss";

export function WatchLivePage() {
  const theme = useMantineTheme();

  return (
    <>
      <Stack className={[classes.root, classes[theme.colorScheme]].join(" ")}>
        <Box className={classes.gradient} />
        <Box className={classes.video}>
          <LivestreamContainer />
        </Box>
      </Stack>
    </>
  );
}
