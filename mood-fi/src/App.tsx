import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.scss";
import {
  ColorScheme,
  ColorSchemeProvider,
  Group,
  MantineProvider,
  MantineThemeOverride,
} from "@mantine/core";
import { LateralMenu, TopHeader } from "./components";
import { useLocalStorage } from "@mantine/hooks";
import { darkTheme, lightTheme } from "./theme";
import { MainPage } from "./components/main-page";

function App() {
  const [colorSchemeStorage, setColorSchemeStorage] =
    useLocalStorage<ColorScheme>({
      key: "mantine-color-scheme",
      defaultValue: "light",
      getInitialValueInEffect: true,
    });

  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(colorSchemeStorage);

  const currentTheme = colorScheme == "light" ? lightTheme : darkTheme;
  // currentTheme.fontFamily = "Silka";

  const [theme, setTheme] = useState<MantineThemeOverride>(currentTheme);

  function toggleColorScheme(value?: ColorScheme) {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    const newTheme = nextColorScheme == "light" ? lightTheme : darkTheme;
    setTheme(newTheme);
    setColorScheme(nextColorScheme);
    setColorSchemeStorage(value || (colorScheme === "dark" ? "light" : "dark"));
  }

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <MainPage />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
