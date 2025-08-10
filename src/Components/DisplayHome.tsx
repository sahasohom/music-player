import { albumsData, songsData } from "../assets/assets";
import type { AlbumItemType, songsType } from "../Type/Types";
import AlbumItem from "./AlbumItem";
import Navbar from "./Navbar";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-x-auto">
          {albumsData.map((album: AlbumItemType) => {
            return (
              <AlbumItem
                key={album.id}
                id={album.id}
                name={album.name}
                image={album.image}
                desc={album.desc}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-x-auto">
          {songsData.map((song: songsType) => {
            return (
              <SongItem
                key={song.id}
                id={song.id}
                name={song.name}
                image={song.image}
                desc={song.desc}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
