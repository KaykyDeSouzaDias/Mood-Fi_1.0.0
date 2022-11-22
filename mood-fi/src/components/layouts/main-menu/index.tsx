import { ReactNode, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  Group,
  MantineProvider,
  MantineThemeOverride,
  Stack,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import React from "react";
import { LateralMenu, TopHeader } from "../..";

type MainMenuPageProps = {
  children: ReactNode;
};

export function MainMenuLayout(props: MainMenuPageProps) {
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
            height: "100%",
          })}
        >
          <TopHeader />
          <Box sx={{ width: "100%", zIndex: 1 }}>
            {props.children}
            <Box sx={{ height: 20 }}></Box>
          </Box>
        </Stack>
      </Group>
    </>
  );
}
