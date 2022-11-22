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
import { LateralMenu, MainMenuLayout, TopHeader } from "./components";
import { useLocalStorage } from "@mantine/hooks";
import { darkTheme, lightTheme } from "./theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  DiscoverPage,
  ReferenceLivePage,
  SettingsLivePage,
  WatchLivePage,
} from "../pages";

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
        <Router>
          <MainMenuLayout>
            <Routes>
              <Route path="/" element={WatchLivePage()} />
              <Route path="/discover" element={DiscoverPage()} />
              <Route path="/references" element={ReferenceLivePage()} />
              <Route path="/settings" element={SettingsLivePage()} />
            </Routes>
          </MainMenuLayout>
        </Router>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
