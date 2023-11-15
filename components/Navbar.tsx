import React from "react";
import logo from "../public/assets/logo.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <main className="flex justify-between items-center mt-0 ml-0 translate-y-130">
      <div className="translate-x-3 translate-y-2">
        <Image
          src={logo}
          alt="Description of the image"
          width={100}
          height={300}
        />
      </div>
      <div className="flex flex-end justify-end space-x-10 w-full">
        <div className="flex space-x-8 my-4 font-oswald text-xl">
          <h2 className="text-white">Website</h2>
          <h2 className="text-white">Barracks</h2>
          <h2 className="text-white">Expeditions</h2>
          <h2 className="text-white">Leaderboard</h2>
          <h2 className="text-white">Luxurion Loot Crate Royale</h2>
          <h2 className="text-white">Token swap</h2>
        </div>
        <button
          type="button"
          className="text-white bg-gradient-to-b from-[#5CE3EB] via-[#0C3B3B] to-[#5CE3EB] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-cyan-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-2xl text-sm px-5 py-2.5 text-center"
        >
          Connect Wallet
        </button>
      </div>
          
    </main>
  );
};

export default Navbar;
