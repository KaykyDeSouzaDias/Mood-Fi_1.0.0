interface IChannelsThumbnailsResolutions {
  url: string;
  width: number;
  height: number;
}

interface IChannelsThumbnails {
  default: IChannelsThumbnailsResolutions;
  medium: IChannelsThumbnailsResolutions;
  high: IChannelsThumbnailsResolutions;
}

interface IChannelsSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IChannelsThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface IChannelsID {
  kind: string;
  channelId: string;
}

export interface IChannels {
  kind: string;
  etag: string;
  id: IChannelsID;
  snippet: IChannelsSnippet;
}
