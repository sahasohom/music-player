import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="arrow_left"
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="arrow_right"
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="text-[#9F9F9F] hover:text-white text-[15px] px-3 py-1 rounded-2xl cursor-pointer font-bold">
            Install App
          </p>
          <div className="bg-[#242424] h-10 w-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-[0.3s] ease-[ease-in-out] hover:scale-125">
            <p className="bg-[rgb(80,155,245)] text-black h-7 w-7 rounded-full flex items-center justify-center">
              S
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="bg-[#404040] px-4 py-1 rounded-2xl cursor-pointer">
          Music
        </p>
        <p className="bg-[#404040] px-4 py-1 rounded-2xl cursor-pointer">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;
