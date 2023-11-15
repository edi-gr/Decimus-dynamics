import MissionControl from "@/components/MissionControl";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import LevelSelect from "@/components/LevelSelect";
import pwr from "../public/assets/pwrupbut.svg";
import Abilities from "@/components/Abilities";
import background from "../public/assets/background.svg";
export default function Home() {
  return (
    // <div className="relative">
    //   <Image
    //     src={background}
    //     alt="background"
    //     width={1920}
    //     height={1920}
    //     layout="responsive"
    //   />
    // </div>
    //  <div>
    //   <div className="absolute top-0 z-10 bottom-0 left-0 right-0 m-auto">
    //     <Navbar />

    //     <LevelSelect />
    //   </div>
    // </div>

    <div className="relative">
      {/* <Image
        src={background}
        alt="background"
        width={1920}
        height={1920}
        layout="responsive"
      /> */}
      <div className="absolute top-0 z-10 bottom-0 left-0 right-0 m-auto mt-[-500px]">
        <Navbar />
        <div className="mt-[-9px]">
          <LevelSelect />
        </div>
        <MissionControl />
      </div>
    </div>
  );
}
