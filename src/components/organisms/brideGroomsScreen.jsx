import Image from "next/image";
import { Zoom, Slide } from "react-awesome-reveal";

import groom from "../../../public/groom.png";
import bride from "../../../public/bride.png";
import love from "../../../public/love1.svg";
import top from "../../../public/top.svg";
import bottom from "../../../public/bottom.svg";

export default function BrideGroomScreen() {
  return (
    <div className="w-full h-screen px-3 py-10 md:px-[15%] relative z-10">
      <div className="w-full h-full rounded-lg flex flex-col items-center justify-center bg-[#ffffff70] md:px-10 gap-2 relative z-10">
        <Zoom>
          <Image
            src={top}
            alt="top"
            className="w-[150px] md:w-[300px] mb-10 h-auto animate__animated animate__fadeInDown"
          />
          <h1 className="text-center text-pink-500 text-3xl md:text-5xl mb-5 satisfy animate__animated animate__fadeInDown">
            The Wedding Of
          </h1>
        </Zoom>

        <div className="w-full flex justify-center gap-2 items-center relative">
          <Slide direction="left">
            <Image
              src={groom}
              alt="groom"
              className="w-[100px] h-auto md:w-[200px] 2xl:w-[300px] animate__animated animate__fadeInLeft"
            />
          </Slide>
          <Image
            src={love}
            alt="groom"
            className="w-[40px] h-[40px] md:h-[85px] md:w-[85px] 2xl:h-[125px] 2xl:w-[125px] relative -mx-5 md:-mx-14 2xl:-mx-20 z-10 pulsate-fwd"
          />
          <Slide direction="right">
            <Image
              src={bride}
              alt="bride"
              className="w-[100px] h-auto md:w-[200px] 2xl:w-[300px] animate__animated animate__fadeInRight"
            />
          </Slide>
        </div>

        <div className="w-[90%] mt-5 md:flex md:justify-around md:items-center">
          <Slide direction="down">
            <div className="md:w-[40%] ">
              <h1 className="text-center text-pink-500 text-3xl font-light satisfy">
                Moch. Rochmat Hidayat
              </h1>
              <p className="text-center font-light">
                Putra Bapak Mugini Prayogo dan Ibu Fitriah
              </p>
            </div>
          </Slide>

          <Zoom>
            <div className="w-full">
              <div className="flex gap-1 justify-center py-2 ">
                <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
                <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
                <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
                <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
                <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
                <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
              </div>

              <h1 className="text-center text-pink-500 text-3xl satisfy">
                dan
              </h1>

              <div className="flex gap-1 justify-center py-2 ">
                <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
                <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
                <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
                <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
                <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
                <div className="animate-pulse bg-pink-500 h-2 w-2 md:h-3 md:w-3 rounded-full"></div>
              </div>
            </div>
          </Zoom>

          <Slide direction="up">
            <div className="md:w-[40%] ">
              <h1 className="text-center text-pink-500 text-3xl font-light satisfy">
                Lubena
              </h1>
              <p className="text-center font-light">
                Putri Alm. Bapak Ibrahim dan Ibu Farida Saleh
              </p>
            </div>
          </Slide>
        </div>

        <Slide direction="up">
          {" "}
          <Image
            src={bottom}
            alt="bottom"
            className="w-[150px] md:w-[300px] mt-10 h-auto "
          />
        </Slide>
      </div>
    </div>
  );
}
