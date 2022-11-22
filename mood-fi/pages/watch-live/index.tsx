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
import { LateralMenu, TopHeader } from "../../src/components";

export function WatchLivePage() {
  return (
    <>
      <div>
        <h1>homezin</h1>
      </div>
    </>
  );
}
