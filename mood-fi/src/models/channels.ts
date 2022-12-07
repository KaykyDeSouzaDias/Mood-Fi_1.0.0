export interface IChannel {
  channelId: string;
  channelName: string;
  image: IChannelImage;
  socialMedias: IChannelSocialMedias[];
}

interface IChannelImage {
  channelLogo: string;
  channelBanner: string;
}

interface IChannelSocialMedias {
  mediaName: string;
  mediaLink: string;
}
