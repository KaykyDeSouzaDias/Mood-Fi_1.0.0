import { ReactNode } from "react";
import { useMantineTheme, AppShell } from "@mantine/core";

import classes from "./index.module.scss";
import { useMediaQuery } from "@mantine/hooks";
import { HeaderMenu, NavBarMenu } from "../..";

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
      padding={0}
    >
      <HeaderMenu />
      {children}
    </AppShell>
  );
}
