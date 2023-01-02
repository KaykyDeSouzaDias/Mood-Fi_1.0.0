import { ReactNode } from "react";
import { useMantineTheme, AppShell } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { defineCustomTheme } from "../../../../theme";
import { HeaderMenu, NavBarMenu } from "../../..";

import classes from "./index.module.scss";

interface MenuProps {
  children: ReactNode;
}

export function Menu({ children }: MenuProps) {
  const theme = useMantineTheme();
  const t = defineCustomTheme(theme);

  return (
    <AppShell
      className={[classes.root, classes[theme.colorScheme]].join(" ")}
      navbar={<NavBarMenu />}
      padding={0}
      styles={{
        main: {
          backgroundColor: t.moodFiTheme.pageBackground,
        },
      }}
    >
      <HeaderMenu />
      {children}
    </AppShell>
  );
}
