import {
  createStyles,
  Card,
  Avatar,
  Text,
  Group,
  Button,
  ActionIcon,
  useMantineTheme,
  Tooltip,
} from "@mantine/core";
import {
  IconBrandAmazon,
  IconBrandApple,
  IconBrandBandcamp,
  IconBrandDiscord,
  IconBrandInstagram,
  IconBrandPatreon,
  IconBrandSpotify,
  IconBrandTwitter,
  IconBrandVk,
  IconBrandYoutube,
  IconBuildingStore,
  IconCoffee,
  IconDeviceDesktop,
  IconPlaylist,
} from "@tabler/icons";
import { IChannel, IChannelSocialMedias } from "../../../models";
import { defineCustomTheme } from "../../../theme";

import classes from "./index.module.scss";

interface ReferenceCardProps {
  actualChannel: IChannel;
}

export function ReferenceCard({ actualChannel }: ReferenceCardProps) {
  const theme = useMantineTheme();
  const t = defineCustomTheme(theme);

  function getMediaIcon(media: IChannelSocialMedias, iconSize: number) {
    switch (media.mediaName) {
      case "Youtube":
        return <IconBrandYoutube size={iconSize} />;
      case "Discord":
        return <IconBrandDiscord size={iconSize} />;
      case "Spotify":
        return <IconBrandSpotify size={iconSize} />;
      case "Apple music":
        return <IconBrandApple size={iconSize} />;
      case "Official store":
        return <IconBuildingStore size={iconSize} />;
      case "Official playlist":
        return <IconPlaylist size={iconSize} />;
      case "Instagram":
        return <IconBrandInstagram size={iconSize} />;
      case "Official website":
        return <IconDeviceDesktop size={iconSize} />;
      case "Patreon":
        return <IconBrandPatreon size={iconSize} />;
      case "Coffee":
        return <IconCoffee size={iconSize} />;
      case "Amazon music":
        return <IconBrandAmazon size={iconSize} />;
      case "Bandcamp":
        return <IconBrandBandcamp size={iconSize} />;
      case "Twitter":
        return <IconBrandTwitter size={iconSize} />;
      case "VK":
        return <IconBrandVk size={iconSize} />;

      default:
        break;
    }
  }

  return (
    <Card
      withBorder={false}
      p="xl"
      radius="md"
      style={{
        color: t.moodFiTheme.onBackgroundText,
        backgroundColor: t.moodFiTheme.onBackground,
      }}
      className={[classes.root, classes[theme.colorScheme]].join(" ")}
    >
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
      />
      <Text align="center" size="lg" weight={500} mt="sm">
        {actualChannel.channelName}
      </Text>
      <Group mt="md" position="center" spacing={30}>
        {actualChannel.socialMedias.map((media) => {
          return (
            <Tooltip label={media.mediaName}>
              <ActionIcon
                size="lg"
                component="a"
                href={media.mediaLink}
                target="_blank"
              >
                {getMediaIcon(media, 18)}
              </ActionIcon>
            </Tooltip>
          );
        })}
      </Group>
    </Card>
  );
}
