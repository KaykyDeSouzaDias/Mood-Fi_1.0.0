import { Box, useMantineTheme } from "@mantine/core";

import classes from "./index.module.scss";

export function LivestreamGradient() {
  const theme = useMantineTheme();

  return (
    <Box className={[classes.root, classes[theme.colorScheme]].join(" ")} />
  );
}
