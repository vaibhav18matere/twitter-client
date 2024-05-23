import React from "react";
import { FaUser } from "react-icons/fa";
// import Image from "next/image";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart, FaRegBookmark } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { FiShare } from "react-icons/fi";

const TweetCard: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto p-4 text-white rounded-lg shadow-lg grid grid-cols-12">
      <div className="col-span-1 space-x-4 mb-4">
        <FaUser className="text-4xl p-1 rounded-full hover:bg-gray-600 transition-all cursor-pointer" />
        {/* <Image
          src="https://avatars.githubusercontent.com/u/59862355?v=4"
          alt="profile-photo"
          height={50}
          width={50}
        /> */}
      </div>
      <div className="mb-4 col-span-11">
        <h2 className="text-lg font-bold">Vaibhav Matere</h2>
        <span className="text-blue-400">@vaibhav_matere</span>
        <p className="mt-1">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa
          libero, viverra et elementum viverra, sagittis eget tortor. Maecenas
          sed laoreet mauris, ac laoreet urna. Proin volutpat diam et enim
          volutpat consectetur. Donec maximus dui nec elit imperdiet
          sollicitudin. Donec eu dui vulputate, tristique quam nec, vehicula
          nisl. Sed malesuada orci nisl, non egestas augue tincidunt nec. Donec
          ac justo eu justo gravida sodales id at ipsum.
          {/* here add logic for "show more..." if character count is more than 240 */}
        </p>

        <div className="flex flex-row justify-between mt-2 text-slate-500 text-lg p-2  ">
          <BiMessageRounded />
          <FaRetweet />
          <FaRegHeart />
          <MdOutlineSignalCellularAlt />
          <FaRegBookmark />
          <FiShare />
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
