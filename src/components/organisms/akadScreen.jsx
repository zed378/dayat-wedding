import Countdown from "react-countdown";
import Image from "next/image";
import groom from "../../../public/groom.svg";
import bride from "../../../public/bride.svg";
import Count from "../atoms/countDown";

export default function AkadScreen() {
  const akad = new Date("May 12, 2023 09:00:00");

  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full absolute top-[43%] -translate-y-1/2 z-10">
        <div className="w-full flex justify-center items-center">
          <Image
            src={groom}
            alt="groom"
            className="w-[100px] h-[100px] md:h-[200px] md:w-[200px] 2xl:h-[300px] 2xl:w-[300px]"
          />
          <Image
            src={bride}
            alt="bride"
            className="w-[100px] h-[100px] md:h-[200px] md:w-[200px] 2xl:h-[300px] 2xl:w-[300px]"
          />
        </div>

        <div className="text-center text-pink-500 mb-6">
          <p className="md:text-2xl 2xl:text-4xl mb-2">
            Akad nikah akan dilaksanakan pada:
          </p>
          <p className="text-2xl md:text-[2rem]">Jumat, 12 Mei 2023</p>
        </div>

        <Countdown date={akad} renderer={Count} />
      </div>
    </div>
  );
}
