import { useNavigate } from "react-router-dom";
import type { AlbumItemType } from "../Type/Types";

type AlbumItemPropType = AlbumItemType;
const AlbumItem = ({ image, name, desc, id }: AlbumItemPropType) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate( `/music-player/album/${id}`)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img src={image} alt="image" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default AlbumItem;
