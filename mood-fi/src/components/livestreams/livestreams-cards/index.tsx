import { Card, useMantineTheme } from "@mantine/core";
import { useLivestream } from "../../../hooks";
import { ILivestreamsItems } from "../../../models";

import classes from "./index.module.scss";

interface LivestreamsCardsProps {
  livestream: ILivestreamsItems;
}

export const LivestreamsCards = ({ livestream }: LivestreamsCardsProps) => {
  const theme = useMantineTheme();

  const { changeSelectedLivestream } = useLivestream();

  return (
    <Card
      className={[classes.root, classes[theme.colorScheme]].join(" ")}
      p="lg"
      shadow="lg"
      radius="md"
      component="a"
      onClick={() => {
        changeSelectedLivestream(livestream);
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
