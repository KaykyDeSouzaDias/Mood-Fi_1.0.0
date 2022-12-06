export interface IChannel {
  channelId: string;
  channelName: string;
  image: IChannelImage;
}

export interface IChannelImage {
  channelLogo: string;
  channelBanner: string;
}
