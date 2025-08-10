import { useContext, useEffect } from "react";
import Display from "./Components/Display";
import Player from "./Components/Player";
import Sidebar from "./Components/Sidebar";
import { PlayerContext } from "./Context/PlayerContext";

const App = () => {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("PlayerContext is not available");
  }
  const { audioRef, track, handleSongEnd, playStatus, shuffle, shuffleArray } =
    context;

  useEffect(() => {
    if (playStatus && audioRef.current) {
      audioRef.current.play();
    }
  }, [track]);
  return (
    <div className="h-screen bg-black">
      <div className="flex h-[90%]">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio
        ref={audioRef}
        src={track.file}
        preload="auto"
        onEnded={shuffle ? shuffleArray : handleSongEnd}
      ></audio>
    </div>
  );
};

export default App;
