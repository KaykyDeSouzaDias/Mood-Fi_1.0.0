import { ReactNode, useState } from "react";
import { useMantineTheme, AppShell, Box } from "@mantine/core";

import classes from "./index.module.scss";
import { useMediaQuery } from "@mantine/hooks";
import { HeaderMenu, MaterialIcon, NavBarMenu } from "..";

interface MenuProps {
  children: ReactNode;
}

export function Menu({ children }: MenuProps) {
  const theme = useMantineTheme();
  const minResolution = useMediaQuery("(max-width: 1000px)");

  return (
    <AppShell
      className={[classes.root, classes[theme.colorScheme]].join(" ")}
      navbar={<NavBarMenu />}
      header={<HeaderMenu />}
    >
      {children}
    </AppShell>
  );
}
