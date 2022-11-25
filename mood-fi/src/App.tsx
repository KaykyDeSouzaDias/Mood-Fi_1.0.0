import { useEffect, useState } from "react";
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
import { LiveProvider, LivestreamContext, useLivestream } from "./hooks";
import ReactPlayer from "react-player";

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

  const { playLive } = useLivestream();

  const [liveResult, setLiveResult] = useState(false);

  console.log(playLive);

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
                  <Route
                    path="/"
                    element={
                      <WatchLivePage
                        setLive={(value) => setLiveResult(value)}
                      />
                    }
                  />
                  <Route path="/discover" element={<DiscoverPage />} />
                  <Route path="/references" element={<ReferenceLivePage />} />
                  <Route path="/settings" element={<SettingsLivePage />} />
                </Routes>
              </MainMenuLayout>
            </Router>
          </LiveProvider>
        </MantineProvider>
      </ColorSchemeProvider>

      <ReactPlayer
        // style={{ display: "none", visibility: "collapse" }}
        className="react-player"
        url="https://www.youtube.com/embed/jfKfPfyJRdk"
        width="85%"
        height="75%"
        playing={playLive}
      />
      {/* <iframe
        // style={{ display: "none", visibility: "collapse" }}
        frameBorder={0}
        width="85%"
        height="75%"
        src="https://www.youtube.com/embed/jfKfPfyJRdk?controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe> */}
    </>
  );
}

export default App;
