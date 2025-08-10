import { useContext } from "react";
import type { songsType } from "../Type/Types";
import { PlayerContext } from "../Context/PlayerContext";

type SongItemPropType = songsType;
const SongItem = ({ name, image, desc, id }: SongItemPropType) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="image" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;
