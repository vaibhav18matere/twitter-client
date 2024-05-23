import { RiTwitterXLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { IoSearch, IoNotificationsSharp } from "react-icons/io5";
import { BiMessage } from "react-icons/bi";
import { HiPencilAlt } from "react-icons/hi";
import { GoPeople } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { TwitterSidebarBtns } from "../interface";

export const sidebarMenuItems: TwitterSidebarBtns[] = [
  {
    title: "Home",
    icon: <IoMdHome />,
  },
  {
    title: "Explore",
    icon: <IoSearch />,
  },
  {
    title: "Notifications",
    icon: <IoNotificationsSharp />,
  },
  {
    title: "Messages",
    icon: <BiMessage />,
  },
  {
    title: "Grok",
    icon: <HiPencilAlt />,
  },
  {
    title: "Communities",
    icon: <GoPeople />,
  },
  {
    title: "Premium",
    icon: <RiTwitterXLine />,
  },
  {
    title: "Profile",
    icon: <CgProfile />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];
