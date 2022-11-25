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
import { Menu } from "../..";

type MainMenuPageProps = {
  children: ReactNode;
};

export function MainMenuLayout(props: MainMenuPageProps) {
  return (
    <>
      <Menu children={props.children} />
    </>
  );
}
