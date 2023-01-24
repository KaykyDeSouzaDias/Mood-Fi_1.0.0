import { emit, listen } from "@tauri-apps/api/event";
import { useEffect, useState } from "react";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  MantineThemeOverride,
  Notification,
} from "@mantine/core";
import {
  LivestreamExternalPlayer,
  MainMenuLayout,
  MaterialIcon,
} from "./components";
import { useLocalStorage } from "@mantine/hooks";
import { darkTheme, lightTheme } from "./theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  DiscoverPage,
  ReferenceLivePage,
  SettingsLivePage,
  WatchLivePage,
} from "../pages";
import { LivestreamProvider } from "./hooks";
import { livestreamDatabase } from "./database";
import { ILivestreamsItems } from "./models";
import { getLivestreams } from "./services";
import { invoke } from "@tauri-apps/api/tauri";

import "./App.scss";

function App() {
  const [colorSchemeStorage, setColorSchemeStorage] =
    useLocalStorage<ColorScheme>({
      key: "mantine-color-scheme",
      defaultValue: "dark",
    });
  const [livestreamsItems, setLivestreamsItems] = useLocalStorage<
    ILivestreamsItems[]
  >({
    key: "Livestreams",
    defaultValue: livestreamDatabase,
  });
  const [todayDate, setTodayDate] = useLocalStorage<string>({
    key: "TodayDate",
    defaultValue: "No date",
  });

  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(colorSchemeStorage);
  const [theme, setTheme] = useState<MantineThemeOverride>(
    colorScheme == "light" ? lightTheme : darkTheme
  );
  const [canShowNotification, setCanShowNotification] = useState(false);
  const [hasApiError, setHasApiError] = useState(false);

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    setColorScheme(colorSchemeStorage);
    setTheme(colorSchemeStorage == "light" ? lightTheme : darkTheme);
  }, [colorSchemeStorage]);

  useEffect(() => {
    const date = new Date().toLocaleDateString();

    if (hasApiError) {
      if (date != todayDate) {
        setTodayDate(date);
        setCanShowNotification(true);
      }
    }
  }, [hasApiError]);

  async function load() {
    const livestreams = await getLivestreams();

    if (livestreams.length) {
      setLivestreamsItems(livestreams);
    } else {
      setHasApiError(true);
    }
  }

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
          <LivestreamProvider>
            <Router>
              <MainMenuLayout>
                <Routes>
                  <Route path="/" element={<WatchLivePage />} />
                  <Route path="/discover" element={<DiscoverPage />} />
                  <Route path="/references" element={<ReferenceLivePage />} />
                  <Route path="/settings" element={<SettingsLivePage />} />
                </Routes>
                {canShowNotification ? (
                  <Notification
                    style={{
                      width: 500,
                      position: "absolute",
                      zIndex: 5,
                      bottom: 10,
                      right: 10,
                    }}
                    icon={<MaterialIcon iconName="error" color="white" />}
                    color="red"
                    title="Erro no recebimento de lives do youtube"
                    onClose={() => setCanShowNotification(false)}
                  >
                    [Cota diária excedida] Pode ser que suas lives estejam
                    desatualizadas. Fique tranquilo, pois a atualização será
                    feita automaticamente no próximo dia. Aproveite e se
                    divirta!
                  </Notification>
                ) : (
                  <></>
                )}
              </MainMenuLayout>
            </Router>
            <LivestreamExternalPlayer />
          </LivestreamProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default App;
