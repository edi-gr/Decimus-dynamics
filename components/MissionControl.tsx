import Image from "next/image";
import pattern from "../assets/pattern.png";
import star from "../assets/star.png";
import ranger from "../assets/ranger-decimus.png";
import ice from "../assets/ice-decimus.png";
import green from "../assets/green-decimus.png";
import night from "../assets/night-decimus.png";
import medieval from "../assets/medieval-decimus.png";
import longPattern from "../assets/long-pattern.svg";
import shortPattern from "../assets/short-pattern.svg";
import nextLevel from "../assets/nextLevel.svg";
import prepareExpedtion from "../assets/prepare-expedition.svg";
import selectLevel from "../assets/select-button.svg";
import endEarly from "../assets/end-early.svg";
import starLeft from "../assets/star-left.svg";
import bg from "../assets/bg.svg";
import localFont from "next/font/local";

const fsForest = localFont({
  src: "../static-fonts/fs-gravity.ttf",
  display: "swap",
});

const MissionControl = () => {
  return (
    <div className={fsForest.className}>
      <div className="absolute -z-10 w-full">
        <Image
          src={bg}
          alt="background"
          className="w-full"
          width={1000}
          height={1000}
        />
      </div>
      <div className="translate-y-120">
        <section className="max-container padding-container flex flex-row relative p-4 justify-between items-center">
          <Image
            src={pattern}
            alt="pattern"
            width={150}
            height={150}
            className="mt-16 flex-shrink-0"
          />
          <Image
            src={starLeft}
            alt="star"
            width={120}
            height={120}
            className="flex-shrink-0 z-20 -translate-x-2 ml-2"
          />
          <div className="flex flex-col items-center -translate-y-2">
            <h1 className="text-[#5CE3EB] text-5xl">
              Mission Control - Level 8
            </h1>
          </div>
          <Image
            src={star}
            alt="star"
            width={120}
            height={120}
            className="flex-shrink-0 z-20 translate-x-2 mr-2"
          />
          <Image
            src={pattern}
            alt="pattern"
            width={150}
            height={150}
            className="mt-16 flex-shrink-0"
          />
        </section>
        <div className="flex flex-row justify-center custom-translate">
          <button className="z-30 relative">
            <Image
              src={nextLevel}
              alt="nextLevel"
              height={10}
              width={140}
              className="z-30 relative"
            />
          </button>
          <button className="z-30">
            <Image
              src={selectLevel}
              alt="nextLevel"
              height={10}
              width={140}
              className="z-30"
            />
          </button>
          <button className="z-30">
            <Image
              src={prepareExpedtion}
              alt="nextLevel"
              height={50}
              width={250}
              className="z-30"
            />
          </button>
        </div>
        <section className="max-container padding-container flex flex-row relative p-4 justify-between items-center -translate-y-20">
          <div className="flex justify-between w-full gap-5">
            <div className=" p-1 flex flex-col items-center justify-center">
              <div className="w-full single-dot-line mb-2"></div>
              <div className="text-white flex justify-between w-full p-1">
                <h3 className="text-[#5CE3EB] text-lg">Decimus #3456</h3>
                <h3 className="text-[#5CE3EB] text-lg">Level 8</h3>
              </div>
              <div className="relative border-2 border-[#5CE3EB] p-2">
                <Image
                  src={ranger}
                  alt="Ranger Decimus"
                  width={500}
                  height={300}
                />
                <div className="absolute bottom-2 left-2 right-2 p-1 bg-[#FAA7C6] text-[#2B0610] text-center text-lg">
                  On Expedition
                </div>
              </div>
              <div className="text-white flex justify-between w-full p-1">
                <h3 className="text-[#5CE3EB] text-lg">Level 8-1</h3>
                <h3 className="text-[#5CE3EB] text-lg">XP: 248</h3>
              </div>
              <div className="text-center text-[#5CE3EB] mt-2 text-lg">
                Expedition Time Remaining
              </div>
              <div className="text-center text-[#5CE3EB] text-lg">
                119:51:13 Left
              </div>
              <button className="z-30">
                <Image
                  src={endEarly}
                  alt="nextLevel"
                  height={50}
                  width={150}
                  className="z-30"
                />
              </button>
              <div className="w-full single-dot-line mt-3"></div>
            </div>
            <div className=" p-1 flex flex-col items-center justify-center">
              <div className="w-full single-dot-line mb-2"></div>
              <div className="text-white flex justify-between w-full p-1">
                <h3 className="text-[#5CE3EB] text-lg">Decimus #3456</h3>
                <h3 className="text-[#5CE3EB] text-lg">Level 8</h3>
              </div>
              <div className="relative border-2 border-[#5CE3EB] p-2">
                <Image
                  src={night}
                  alt="Night Decimus"
                  width={500}
                  height={300}
                />
                <div className="absolute bottom-2 left-2 right-2 p-1 bg-[#FAA7C6] text-[#2B0610] text-center text-lg">
                  On Expedition
                </div>
              </div>
              <div className="text-white flex justify-between w-full p-1">
                <h3 className="text-[#5CE3EB] text-lg">Level 8-1</h3>
                <h3 className="text-[#5CE3EB] text-lg">XP: 248</h3>
              </div>
              <div className="text-center text-[#5CE3EB] mt-2 text-lg">
                Expedition Time Remaining
              </div>
              <div className="text-center text-[#5CE3EB] text-lg">
                119:51:13 Left
              </div>
              <button className="z-30">
                <Image
                  src={endEarly}
                  alt="nextLevel"
                  height={50}
                  width={150}
                  className="z-30"
                />
              </button>
              <div className="w-full single-dot-line mt-3"></div>
            </div>
            <div className=" p-1 flex flex-col items-center justify-center">
              <div className="w-full single-dot-line mb-2"></div>
              <div className="text-white flex justify-between w-full p-1">
                <h3 className="text-[#5CE3EB] text-lg">Decimus #3456</h3>
                <h3 className="text-[#5CE3EB] text-lg">Level 8</h3>
              </div>
              <div className="relative border-2 border-[#5CE3EB] p-2">
                <Image src={ice} alt="Ice Decimus" width={500} height={300} />
                <div className="absolute bottom-2 left-2 right-2 p-1 bg-[#FAA7C6] text-[#2B0610] text-center text-lg">
                  On Expedition
                </div>
              </div>
              <div className="text-white flex justify-between w-full p-1">
                <h3 className="text-[#5CE3EB] text-lg">Level 8-1</h3>
                <h3 className="text-[#5CE3EB] text-lg">XP: 248</h3>
              </div>
              <div className="text-center text-[#5CE3EB] mt-2 text-lg">
                Expedition Time Remaining
              </div>
              <div className="text-center text-[#5CE3EB] text-lg">
                119:51:13 Left
              </div>
              <button className="z-30">
                <Image
                  src={endEarly}
                  alt="nextLevel"
                  height={50}
                  width={150}
                  className="z-30"
                />
              </button>
              <div className="w-full single-dot-line mt-3"></div>
            </div>
            <div className=" p-1 flex flex-col items-center justify-center">
              <div className="w-full single-dot-line-pink mb-2"></div>
              <div className="text-white flex justify-between w-full p-1">
                <h3 className="text-[#FAA7C6] text-lg">Decimus #3456</h3>
                <h3 className="text-[#FAA7C6] text-lg">Level 8</h3>
              </div>
              <div className="relative border-2 border-[#FAA7C6] p-2">
                <Image
                  src={green}
                  alt="Green Decimus"
                  width={500}
                  height={300}
                />
              </div>
              <div className="text-white flex justify-between w-full p-1">
                <h3 className="text-[#FAA7C6] text-lg">Level 8-1</h3>
                <h3 className="text-[#FAA7C6] text-lg">XP: 248</h3>
              </div>
              <h1 className="text-center text-[#FAA7C6] text-2xl mt-8 mb-7">
                Not On Expedition
              </h1>

              <div className="w-full single-dot-line-pink mt-4"></div>
            </div>
            <div className="p-1 flex flex-col items-center justify-center">
              <div className="w-full single-dot-line mb-2"></div>
              <div className="text-white flex justify-between w-full p-1">
                <h3 className="text-[#5CE3EB] text-lg">Decimus #3456</h3>
                <h3 className="text-[#5CE3EB] text-lg">Level 8</h3>
              </div>
              <div className="relative border-2 border-[#5CE3EB] p-2">
                <Image
                  src={medieval}
                  alt="Medieval Decimus"
                  width={500}
                  height={300}
                />
              </div>
              <div className="text-white flex justify-between w-full p-1">
                <h3 className="text-[#5CE3EB] text-lg">Level 8-1</h3>
                <h3 className="text-[#5CE3EB] text-lg">XP: 248</h3>
              </div>
              <h1 className="text-center text-[#5CE3EB] text-2xl mt-8 mb-7">
                Not On Expedition
              </h1>

              <div className="w-full single-dot-line mt-4"></div>
            </div>
          </div>
        </section>
        <section className="max-container padding-container flex flex-row w-full relative p-4 justify-between items-center translate-y-56">
          <div className="flex flex-col items-center flex-grow justify-center space-y-0.5">
            <div className="single-circular-line w-full"></div>
            <div className="single-circular-line w-full"></div>
            <div className="single-circular-line w-full"></div>
            <div className="single-circular-line w-full"></div>
            <div className="single-circular-line w-full"></div>
            <div className="single-circular-line w-full"></div>
          </div>
          <button className="z-30">
            <Image
              src={prepareExpedtion}
              alt="nextLevel"
              height={50}
              width={290}
              className="z-30 ml-5 mr-5"
            />
          </button>
          <div className="flex flex-col items-center flex-1 justify-center space-y-0.5">
            <div className="single-circular-line w-full"></div>
            <div className="single-circular-line w-full"></div>
            <div className="single-circular-line w-full"></div>
            <div className="single-circular-line w-full"></div>
            <div className="single-circular-line w-full"></div>
            <div className="single-circular-line w-full"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MissionControl;
