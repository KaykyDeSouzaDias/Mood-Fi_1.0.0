import { Button, Paper, Title } from "@mantine/core";
import { useLivestream } from "../../../hooks";
import classes from "./index.module.scss";

const oi = {
  image:
    "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  title: "Best forests to visit in North America",
  category: "nature",
};

interface LivestreamsCardsProps {
  videoId: string;
}

export const LivestreamsCards = ({ videoId }: LivestreamsCardsProps) => {
  const { changeLivestreamVideo } = useLivestream();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${oi.image})` }}
      className={classes.card}
    >
      <div>
        <Title className={classes.category} size="xs">
          {oi.category}
        </Title>
        <Title order={3} className={classes.title}>
          {oi.title}
        </Title>
      </div>
      <Button
        onClick={() => changeLivestreamVideo(videoId)}
        variant="white"
        color="dark"
      >
        Read article
      </Button>
    </Paper>
  );
};
