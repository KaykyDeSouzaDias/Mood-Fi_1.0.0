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
import { getLivestreams } from "../../src/services";
import { ILivestreams, ILivestreamsItems } from "../../src/models";
import { LivestreamsCards } from "../../src/components";
import { livestreamDatabase } from "../../src/database";

export const DiscoverPage = () => {
  const [livestreams, setLivestreams] = useLocalStorage<ILivestreamsItems[]>({
    key: "Livestreams",
    defaultValue: livestreamDatabase,
  });

  return (
    <>
      <div>
        <h1>descobrium</h1>
      </div>
      <Group>
        {livestreams.map((l) => {
          return <LivestreamsCards key={l.id.videoId} videoId={l.id.videoId} />;
        })}
      </Group>
    </>
  );
};
