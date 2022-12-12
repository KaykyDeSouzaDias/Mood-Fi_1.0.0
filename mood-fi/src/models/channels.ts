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

export interface IChannelSocialMedias {
  mediaName: string;
  mediaLink: string;
}
