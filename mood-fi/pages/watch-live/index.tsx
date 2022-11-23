import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import {
  ColorScheme,
  ColorSchemeProvider,
  Group,
  MantineProvider,
  MantineThemeOverride,
  Stack,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

export function WatchLivePage() {
  return (
    <>
      <Group style={{ height: "100%", backgroundColor: "red" }} grow>
        <h1>homezin</h1>
      </Group>
    </>
  );
}
