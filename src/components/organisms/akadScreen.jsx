import Countdown from "react-countdown";
import Image from "next/image";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

import groom from "../../../public/groom.png";
import bride from "../../../public/bride.png";
import love from "../../../public/love1.svg";
import { AkadCountdown } from "../atoms/countDown";

export default function AkadScreen() {
  const akad = new Date("May 12, 2023 09:00:00");

  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full absolute top-[43%] -translate-y-1/2 z-10">
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

        <div className="text-center text-pink-500 mb-6">
          <Fade direction="up" cascade>
            <p className="md:text-2xl 2xl:text-4xl mb-2">
              Akad nikah akan dilaksanakan pada:
            </p>
            <p className="text-xl md:text-[2rem] font-bold mb-2">
              Jumat, 12 Mei 2023
            </p>
            <p className="text-xl md:text-[2rem]">Pukul 09.00 WIB</p>
          </Fade>
        </div>

        <Zoom>
          <Countdown date={akad} renderer={AkadCountdown} />
        </Zoom>
      </div>
    </div>
  );
}
