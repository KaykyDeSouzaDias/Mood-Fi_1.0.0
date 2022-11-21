import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import {
  ColorScheme,
  ColorSchemeProvider,
  Group,
  MantineProvider,
  MantineThemeOverride,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { LateralMenu, TopHeader } from "..";

export function MainPage() {
  return (
    <>
      <Group position="center" spacing={0} grow>
        <LateralMenu />
        <TopHeader />
      </Group>
    </>
  );
}
