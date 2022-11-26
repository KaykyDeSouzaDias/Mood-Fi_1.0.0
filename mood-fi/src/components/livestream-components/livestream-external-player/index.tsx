import ReactPlayer from "react-player";
import { useLivestream } from "../../../hooks";

export const LivestreamExternalPlayer = () => {
  const { playLivestream } = useLivestream();

  return (
    <ReactPlayer
      style={{ display: "none", visibility: "collapse" }}
      className="react-player"
      url="https://www.youtube.com/embed/jfKfPfyJRdk"
      playing={playLivestream}
    />
  );
};
