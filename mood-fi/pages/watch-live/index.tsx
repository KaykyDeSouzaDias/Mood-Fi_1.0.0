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
      <Group position="center" spacing={0} grow>
        <LateralMenu />

        <Stack
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
            height: 300,
          })}
        >
          <TopHeader />
        </Stack>
      </Group>
    </>
  );
}
