import { useEffect, useState } from "react";
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
import { useLivestream } from "../../src/hooks";

export const DiscoverPage = () => {
  return (
    <>
      <div>
        <h1>descobrium</h1>
      </div>
    </>
  );
};
