import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { MdMoreVert } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import { sidebarMenuItems } from "@/library/data/leftSideIcons";

const LeftSidenav = () => {
  return (
    <div className="col-span-3 px-28">
      <RiTwitterXLine className="text-4xl p-1 rounded-full hover:bg-gray-600 transition-all cursor-pointer" />
      <div className="mt-4 text-xl">
        <ul>
          {sidebarMenuItems.map((item, index) => (
            <li
              className="flex flex-row gap-4 justify-start items-center rounded-full py-2 transition-all cursor-pointer"
              key={index}
            >
              <span className="">{item.icon}</span>
              <span className="text-white">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-2">
        <button className="bg-[#1d9bf0] text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200 w-full">
          Post
        </button>
      </div>

      <div className="flex items-center p-4 bg-black text-white">
        {/* <Image
              src={profilePhoto}  
              alt="profile-picture"
              width={12}
              height={12}
              className="rounded-full"
            /> */}
        <FaUser className="text-4xl p-1 rounded-full hover:bg-gray-600 transition-all cursor-pointer" />
        <div className="ml-4">
          <div className="font-bold">Vaibhav Matere</div>
          <div className="text-gray-500">@vaibhav_matere</div>
        </div>
        <button className="ml-auto text-gray-500 hover:text-gray-400 transition">
          <MdMoreVert className="text-4xl p-1 rounded-full hover:bg-gray-600 transition-all cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default LeftSidenav;
