import LeftSidenav from "./pages/Sidenavigation";
import Feed from "@/components/Feed";
import RightSideNav from "./pages/RightSideNav";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 h-screen w-screen text-white py-6">
        <LeftSidenav />
        <Feed />
        <RightSideNav />
      </div>
    </>
  );
}
