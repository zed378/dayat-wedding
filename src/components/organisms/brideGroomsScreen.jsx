import Image from "next/image";
import groom from "../../../public/groom.png";
import bride from "../../../public/bride.png";
import love from "../../../public/love1.svg";
import top from "../../../public/top.svg";

export default function BrideGroomScreen() {
  return (
    <div className="w-full h-screen px-3 py-10 md:px-[15%] relative z-10">
      <div className="w-full h-full rounded-lg flex flex-col items-center justify-center bg-[#ffffff70] md:px-10 gap-2 relative z-10">
        <Image
          src={top}
          alt="top"
          className="w-[150px] md:w-[300px] mb-10 h-auto animate__animated animate__fadeInDown"
        />
        <h1 className="text-center text-pink-500 text-3xl md:text-5xl mb-5 satisfy animate__animated animate__fadeInDown">
          The Wedding Of
        </h1>

        <div className="w-full flex justify-center gap-2 items-center relative">
          <Image
            src={groom}
            alt="groom"
            className="w-[100px] h-auto md:w-[200px] 2xl:w-[300px] animate__animated animate__fadeInLeft"
          />
          <Image
            src={love}
            alt="groom"
            className="w-[40px] h-[40px] md:h-[85px] md:w-[85px] 2xl:h-[125px] 2xl:w-[125px] relative -mx-5 md:-mx-14 2xl:-mx-20 z-10 pulsate-fwd"
          />
          <Image
            src={bride}
            alt="bride"
            className="w-[100px] h-auto md:w-[200px] 2xl:w-[300px] animate__animated animate__fadeInRight"
          />
        </div>

        <div className="w-[90%] mt-5 md:flex md:justify-around md:items-center">
          <div className="md:w-[40%] animate__animated animate__fadeInUp">
            <h1 className="text-center text-pink-500 text-3xl font-light satisfy">
              Moch. Rochmat Hidayat
            </h1>
            <p className="text-center font-light">
              Putra Bapak Mugini dan Ibu Fitriah
            </p>
          </div>

          <div className="animate__animated animate__fadeInUp">
            <div className="flex gap-1 justify-center py-2 ">
              <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
              <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
              <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
              <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
              <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
              <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
            </div>

            <h1 className="text-center text-pink-500 text-3xl satisfy">dan</h1>

            <div className="flex gap-1 justify-center py-2 ">
              <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
              <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
              <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
              <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
              <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
              <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
            </div>
          </div>

          <div className="md:w-[40%] animate__animated animate__fadeInUp">
            <h1 className="text-center text-pink-500 text-3xl font-light satisfy">
              Lubena
            </h1>
            <p className="text-center font-light">
              Putra Alm. Bapak ... dan Ibu ...
            </p>
          </div>
        </div>

        <Image
          src={top}
          alt="top"
          className="w-[150px] md:w-[300px] mt-10 h-auto rotate-180 animate__animated animate__fadeInUp"
        />
      </div>
    </div>
  );
}
