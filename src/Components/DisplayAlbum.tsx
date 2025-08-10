import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { albumsData, assets, songsData } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../Context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const albumData = !isNaN(numericId) ? albumsData[numericId] : undefined;

  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("PlayerContext is not available");
  }
  const { playWithId } = context;
  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img
          src={albumData?.image}
          alt="albumData?.image"
          className="rounded-sm h-[220px]"
        />
        <div className="flex flex-col">
          <p>Public Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-6xl">
            {albumData?.name}
          </h2>
          <h4 className="text-[#CDCDCDFF] text-sm">{albumData?.desc}</h4>
          <p className="mt-1 text-[#CDCDCDFF] text-sm">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt="spotify_logo"
            />
            <b className="hover:cursor-pointer hover:underline mx-1">Sohom</b>
            86,820 saves • 74 songs, about 5 hr
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="clock_icon" />
      </div>
      <hr />
      {songsData.map((song, index) => {
        return (
          <div
            key={index}
            onClick={() => playWithId(song.id)}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center rounded-sm text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
          >
            <p className="text-white">
              <b className="">{index + 1}</b>
              <img
                className="inline w-10 mx-5 rounded-sm"
                src={song.image}
                alt=""
              />
              {song.name}
            </p>
            <p className="text-[15px]">{albumData?.name}</p>
            <p className="text-[15px] hidden sm:block">5 days ago</p>
            <p className="text-[15px] text-center">{song.duration}</p>
          </div>
        );
      })}
    </>
  );
};

export default DisplayAlbum;
