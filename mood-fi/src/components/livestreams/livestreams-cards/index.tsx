import { Button, Card, Center, Group, Paper, Title } from "@mantine/core";
import { useLivestream } from "../../../hooks";
import { ILivestreamsItems } from "../../../models";
import classes from "./index.module.scss";

const oi = {
  image:
    "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  title: "Best forests to visit in North America",
  category: "nature",
};

interface LivestreamsCardsProps {
  livestream: ILivestreamsItems;
}

export const LivestreamsCards = ({ livestream }: LivestreamsCardsProps) => {
  const { changeLivestreamVideo, changeSelectedLivestream } = useLivestream();

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      onClick={() => {
        changeLivestreamVideo(livestream.id.videoId);
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
