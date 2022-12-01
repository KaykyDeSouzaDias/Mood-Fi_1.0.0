import { Button, Paper, Title } from "@mantine/core";
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
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${livestream.snippet.thumbnails.high.url})` }}
      className={classes.card}
    >
      <div>
        <Title className={classes.category} size="xs">
          {livestream.snippet.liveBroadcastContent}
        </Title>
        <Title order={3} className={classes.title}>
          {livestream.snippet.title}
        </Title>
      </div>
      <Button
        onClick={() => {
          changeLivestreamVideo(livestream.id.videoId);
          changeSelectedLivestream(livestream);
        }}
        variant="white"
        color="dark"
      >
        Read article
      </Button>
    </Paper>
  );
};
