import { Card, useMantineTheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { defaultSelectedLivestream, useLivestream } from "../../../hooks";
import { ILivestreamsItems } from "../../../models";

import classes from "./index.module.scss";

interface LivestreamsCardsProps {
  livestream: ILivestreamsItems;
}

export const LivestreamsCards = ({ livestream }: LivestreamsCardsProps) => {
  const theme = useMantineTheme();

  const {
    changeSelectedLivestream,
    toggleCanShowExternalPlayer,
    toggleHasPlayedLivestream,
    togglePlayLivestream,
  } = useLivestream();
  const [chosenLivestreamStorage, setChosenLivestreamStorage] =
    useLocalStorage<ILivestreamsItems>({
      key: "ChosenLivestream",
      defaultValue: defaultSelectedLivestream,
    });

  return (
    <Card
      className={[classes.root, classes[theme.colorScheme]].join(" ")}
      p="lg"
      shadow="lg"
      radius="md"
      component="a"
      onClick={() => {
        togglePlayLivestream(false);
        toggleHasPlayedLivestream(false);
        toggleCanShowExternalPlayer(true);
        changeSelectedLivestream(livestream);
        setChosenLivestreamStorage(livestream);
      }}
      target="_blank"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${livestream.snippet.thumbnails.high.url})`,
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <h1 className={classes.title}>{livestream.snippet.title}</h1>

          <h5 className={classes.author}>{livestream.snippet.channelTitle}</h5>
        </div>
      </div>
    </Card>
  );
};
