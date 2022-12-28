import ReactPlayer from "react-player";
import { useLivestream } from "../../../hooks";

export const LivestreamExternalPlayer = () => {
  const { playLivestream, livestreamVolume, selectedLivestream } =
    useLivestream();

  return (
    <ReactPlayer
      style={{ display: "none", visibility: "collapse" }}
      className="react-player"
      volume={livestreamVolume}
      url={`https://www.youtube.com/embed/${selectedLivestream.id.videoId}`}
      playing={playLivestream}
    />
  );
};
