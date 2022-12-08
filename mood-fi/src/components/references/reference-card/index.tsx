import {
  createStyles,
  Card,
  Avatar,
  Text,
  Group,
  Button,
  ActionIcon,
} from "@mantine/core";
import { IconBrandYoutube } from "@tabler/icons";
import { IChannel } from "../../../models";

const stat = {
  image:
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
  avatar:
    "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
  name: "Bill Headbanger",
  job: "Fullstack engineer",
  stats: [
    {
      value: "34K",
      label: "Followers",
    },
    {
      value: "187",
      label: "Follows",
    },
    {
      value: "1.6K",
      label: "Posts",
    },
  ],
};

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  // avatar: {
  //   border: `2px solid ${
  //     theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
  //   }`,
  // },
}));

interface ReferenceCardProps {
  actualChannel: IChannel;
}

export function ReferenceCard({ actualChannel }: ReferenceCardProps) {
  const { classes, theme } = useStyles();

  const items = stat.stats.map((stat) => (
    <div key={stat.label}>
      <Text align="center" size="lg" weight={500}>
        {stat.value}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <Card.Section
        sx={{
          backgroundImage: `url(${actualChannel.image.channelBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 140,
        }}
      />
      <Avatar
        src={actualChannel.image.channelLogo}
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        // className={classes.avatar}
      />
      <Text align="center" size="lg" weight={500} mt="sm">
        {actualChannel.channelName}
      </Text>
      <Group mt="md" position="center" spacing={30}>
        {actualChannel.socialMedias.map((media) => {
          switch (media.mediaName) {
            case "youtube":
              return (
                <ActionIcon
                  size="lg"
                  component="a"
                  href={media.mediaLink}
                  target="_blank"
                >
                  <IconBrandYoutube size={18} />
                </ActionIcon>
              );
              break;

            default:
              break;
          }
        })}
      </Group>
    </Card>
  );
}
