import Link from "next/link";

import { BiCameraMovie } from "react-icons/bi";

import Search from "./Search";

function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 md:p-6">
      <div className="flex justify-between items-center">
        <Link href="/">
          <BiCameraMovie className="text-8xl text-white" />
        </Link>
      </div>
      <div className="flex justify-center mt-4">
        <Search />
      </div>
    </header>
  );
}

export default Header;
