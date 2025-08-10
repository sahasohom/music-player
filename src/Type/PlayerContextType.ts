import type { Dispatch, RefObject, SetStateAction } from "react";
import type { songsType } from "./Types";

export interface TimeType {
  currentTime: {
    minute: number;
    second: number;
  };
  totalTime: {
    minute: number;
    second: number;
  };
}

export interface PlayerContextType {
  isFirstSong: boolean;
  isLastSong: boolean;
  audioRef: RefObject<HTMLAudioElement>;
  seekBg: RefObject<HTMLDivElement>;
  seekBar: RefObject<HTMLDivElement>;

  track: songsType;
  setTrack: Dispatch<SetStateAction<songsType>>;

  playStatus: boolean;
  setPlayStatus: Dispatch<SetStateAction<boolean>>;

  time: TimeType;
  setTime: Dispatch<SetStateAction<TimeType>>;

  play: () => void;
  pause: () => void;
  playWithId: (id: number) => void;

  previous: () => void;
  next: () => void;
  loop: boolean;
  setLoop: (data: boolean) => void;
  shuffle: boolean;
  setShuffle: (data: boolean) => void;
  shuffleArray: (data: songsType) => void;
  handleSongEnd: () => void;

  seekSong: (e: { nativeEvent: { offsetX: number } }) => void;
}
