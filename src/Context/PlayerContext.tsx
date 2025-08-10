import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";
import type { songsType } from "../Type/Types";
import type { PlayerContextType } from "../Type/PlayerContextType";

export const PlayerContext = createContext<PlayerContextType | null>(null);

const PlayerContextProvider = (props: PlayerContextType) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const seekBg = useRef(null);
  const seekBar = useRef(null);

  const [track, setTrack] = useState<songsType>(songsData[0]);
  const [playStatus, setPlayStatus] = useState<boolean>(false);

  const [loop, setLoop] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState<boolean>(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const totalSongs = songsData.length;
  const isFirstSong = track === songsData[0];
  const isLastSong = track === songsData[songsData.length - 1];

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  const playWithId = async (id: number) => {
    await setTrack(songsData[id]);
    audioRef.current && (await audioRef.current.play());
    setPlayStatus(true);
  };

  const previous = async () => {
    if (track.id > 0 && audioRef.current) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
    }
    if (audioRef.current) {
      await audioRef.current.play();
    }
    setPlayStatus(true);
  };
  const shuffleArray = async () => {
    const randomIndex = Math.floor(Math.random() * totalSongs);
    console.log("randomIndex", randomIndex);

    await setTrack(songsData[randomIndex]);

    if (audioRef.current) {
      await audioRef.current.play();
    }

    setPlayStatus(true);
  };

  const handleSongEnd = async () => {
    if (loop && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setPlayStatus(true);
    } else if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      audioRef.current && (await audioRef.current.play());
      setPlayStatus(true);
    } else {
      setPlayStatus(false);
    }
  };

  const seekSong = (e: { nativeEvent: { offsetX: number } }) => {
    if (audioRef.current) {
      audioRef.current.currentTime =
        (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
        audioRef.current?.duration;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.ontimeupdate = () => {
          if (!audioRef.current) return;

          const current = audioRef.current.currentTime;
          const duration = audioRef.current.duration || 0;

          seekBar.current.style.width =
            Math.floor((current / duration) * 100) + "%";

          setTime({
            currentTime: {
              minute: Math.floor(current / 60),
              second: Math.floor(current % 60),
            },
            totalTime: {
              minute: Math.floor(duration / 60),
              second: Math.floor(duration % 60),
            },
          });
        };
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const contextValue = {
    isFirstSong,
    isLastSong,
    totalSongs,
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
    loop,
    setLoop,
    handleSongEnd,
    shuffle,
    setShuffle,
    shuffleArray,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
