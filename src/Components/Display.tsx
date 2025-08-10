import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { useEffect, useRef } from "react";
import { albumsData } from "../assets/assets";

const Display = () => {
  const displayRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split("/").pop() : "";
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    const el = displayRef.current;
    if (!el) return;

    if (isAlbum && bgColor) {
      el.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      el.style.background = "#121212";
    }
  }, [isAlbum, bgColor, location.pathname]);
  console.log('first')
  return (
    <div
      ref={displayRef}
      className="w-[100%] h-max-[90%] lg:w-[75%] m-2 lg:ml-0 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto"
    >
      <Routes>
        <Route path="/music-player/" element={<DisplayHome />} />
        <Route path="/music-player/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
