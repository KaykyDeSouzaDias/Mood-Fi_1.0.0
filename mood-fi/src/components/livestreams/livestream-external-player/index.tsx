import ReactPlayer from "react-player";
import { useLivestream } from "../../../hooks";

export const LivestreamExternalPlayer = () => {
  const { playLivestream, livestreamVolume, livestreamVideoId } =
    useLivestream();

  return (
    <ReactPlayer
      style={{ display: "none", visibility: "collapse" }}
      className="react-player"
      volume={livestreamVolume}
      url={`https://www.youtube.com/embed/${livestreamVideoId}`}
      playing={playLivestream}
    />
  );
};
