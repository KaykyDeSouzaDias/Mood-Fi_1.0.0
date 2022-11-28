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

const CHANNELS_ID = {
  livestreams: [
    {
      id: "UCSJ4gkVC6NrvII8umztf0Ow",
    },
    {
      id: "UC2fVSthyWxWSjsiEAHPzriQ",
    },
    {
      id: "UCncxHd8o_VhhHAJ7QqB5azg",
    },
    {
      id: "UCxWNEhY-SNHRvF9Q2LWLK1g",
    },
    {
      id: "UCWzZ5TIGoZ6o-KtbGCyhnhg",
    },
  ],
};

export const DiscoverPage = () => {
  const [livestreams, setLivestreams] = useState<ILivestreamsItems[]>([]);

  useEffect(() => {
    // CHANNELS_ID.livestreams.map((id) => {
    //   load(id.id);
    // });
  }, []);

  async function load(id: string) {
    let livestreamsArray: ILivestreams[] = [];

    livestreamsArray.push(await getLivestreams(id));
    return getLivestreamsItems(livestreamsArray.map((l) => l.items));
  }

  function getLivestreamsItems(items: ILivestreamsItems[][]) {
    let itemsArray: ILivestreamsItems[] = [];
    items.map((i) =>
      i.map((ii) => {
        return itemsArray.push(ii);
      })
    );

    setLivestreams(itemsArray);
  }

  // console.log(livestreams.map((i) => i.snippet.liveBroadcastContent));
  // console.log(CHANNELS_ID.livestreams);
  // console.log(livestreams);

  return (
    <>
      <div>
        <h1>descobrium</h1>
      </div>
      {/* <Group>
        {livestreams.map((l) => {
          return <LivestreamsCards key={l.id.videoId} videoId={l.id.videoId} />;
        })}
      </Group> */}
    </>
  );
};
