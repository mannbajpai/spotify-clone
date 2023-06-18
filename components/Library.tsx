"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

const Library: React.FC = () => {
  const onClick = () => {
    // Handle Upload Later;
  };
  return (
    <div className="flex flex-col">
      <div
        className="
                flex
                items-center
                justify-between
                px-5
                pt-4"
      >
        <div
          className="
                inline-flex
                items-center
                gap-x-2"
        >
          <TbPlaylist className="text-neutral-400" size={30} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
          <AiOutlinePlus
            onClick={onClick}
            size={24}
            className="
          text-neutral-400
          cursor-pointer
          hover:text-white
          transition"
          />
        </div>
      </div>
    </div>
  );
};

export default Library;
