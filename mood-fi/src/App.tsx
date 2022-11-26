import { useState } from "react";
import "./App.scss";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  MantineThemeOverride,
} from "@mantine/core";
import { MainMenuLayout } from "./components";
import { useLocalStorage } from "@mantine/hooks";
import { darkTheme, lightTheme } from "./theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  DiscoverPage,
  ReferenceLivePage,
  SettingsLivePage,
  WatchLivePage,
} from "../pages";
import { LiveProvider } from "./hooks";
import { LivestreamExternalPlayer } from "./components/livestream-external-player";

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
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
          <LiveProvider>
            <Router>
              <MainMenuLayout>
                <Routes>
                  <Route path="/" element={<WatchLivePage />} />
                  <Route path="/discover" element={<DiscoverPage />} />
                  <Route path="/references" element={<ReferenceLivePage />} />
                  <Route path="/settings" element={<SettingsLivePage />} />
                </Routes>
              </MainMenuLayout>
            </Router>
            <LivestreamExternalPlayer />
          </LiveProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default App;
