interface ILivestreamsThumbnailsResolutions {
  url: string;
  width: number;
  height: number;
}

interface ILivestreamsThumbnails {
  default: ILivestreamsThumbnailsResolutions;
  medium: ILivestreamsThumbnailsResolutions;
  high: ILivestreamsThumbnailsResolutions;
}

interface ILivestreamsSnippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ILivestreamsThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: Date;
}

interface ILivestreamsID {
  kind: string;
  videoId: string;
}

export interface ILivestreamsItems {
  kind: string;
  etag: string;
  id: ILivestreamsID;
  snippet: ILivestreamsSnippet;
}

export interface ILivestreams {
  items: ILivestreamsItems[];
}
