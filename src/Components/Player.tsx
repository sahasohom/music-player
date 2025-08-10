import { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../Context/PlayerContext";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Player = () => {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("PlayerContext is not available");
  }

  const {
    isFirstSong,
    isLastSong,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    track,
    previous,
    next,
    seekSong,
    loop,
    setLoop,
    shuffle,
    setShuffle,
  } = context;

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4 w-[33%]">
        <img className="w-12 rounded-sm" src={track.image} alt="songsData" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto w-[33%]">
        <div className="flex gap-4">
          <Tooltip id="shuffle_element" place="top" />
          <Tooltip id="previous_element" place="top" />
          <Tooltip id="media-control-tooltip" place="top" />
          <Tooltip id="next_element" place="top" />
          <Tooltip id="loop_element" place="top" />
          <img
            onClick={() => setShuffle(!shuffle)}
            className="w-4 cursor-pointer "
            src={shuffle ? assets.shuffleOn : assets.shuffle_icon}
            alt="shuffle_icon"
            data-tooltip-id="shuffle_element"
            data-tooltip-content={
              shuffle ? "Disable Shuffle" : "Enable Shuffle"
            }
          />
          <img
            onClick={() => !isFirstSong && previous()}
            className={`w-4  ${
              isFirstSong ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            src={assets.prev_icon}
            alt="prev_icon"
            data-tooltip-id="previous_element"
            data-tooltip-content="Previous"
          />
          <img
            onClick={playStatus ? pause : play}
            className="w-4 cursor-pointer"
            src={playStatus ? assets.pause_icon : assets.play_icon}
            alt={playStatus ? "pause_icon" : "play_icon"}
            data-tooltip-id="media-control-tooltip"
            data-tooltip-content={playStatus ? "Pause" : "Play"}
          />
          <img
            onClick={() => !isLastSong && next()}
            className={`w-4 ${
              isLastSong ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            src={assets.next_icon}
            alt="next_icon"
            data-tooltip-id="next_element"
            data-tooltip-content="Next"
          />
          <img
            onClick={() => setLoop(!loop)}
            className={`w-4 cursor-pointer`}
            src={loop ? assets.repeatone : assets.loop_icon}
            alt="loop_icon"
            data-tooltip-id="loop_element"
            data-tooltip-content="Loop"
          />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute}:
            {time.currentTime.second < 10
              ? `0${time.currentTime.second}`
              : time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-[#DCDCDC] rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-10 bg-green-800 rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minute}:
            {time.totalTime.second < 10
              ? `0${time.totalTime.second}`
              : time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75 w-[33%] justify-end">
        <img className="w-4" src={assets.plays_icon} alt="plays_icon" />
        <img className="w-4" src={assets.mic_icon} alt="mic_icon" />
        <img className="w-4" src={assets.queue_icon} alt="queue_icon" />
        <img className="w-4" src={assets.speaker_icon} alt="speaker_icon" />
        <img className="w-4" src={assets.volume_icon} alt="volume_icon" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img
          className="w-4"
          src={assets.mini_player_icon}
          alt="mini_player_icon"
        />
        <img className="w-4" src={assets.zoom_icon} alt="zoom_icon" />
      </div>
    </div>
  );
};

export default Player;
