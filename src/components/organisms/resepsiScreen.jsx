import Countdown from "react-countdown";
import Image from "next/image";
import groom from "../../../public/groom.svg";
import bride from "../../../public/bride.svg";
import Count from "../atoms/countDown";

export default function ResepsiScreen() {
  const resepsi = new Date("May 14, 2023 09:00");

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
            Resepsi akan dilaksanakan pada:
          </p>
          <p className="text-xl md:text-[2rem] font-bold mb-2">
            Minggu, 14 Mei 2023
          </p>
          <p className="text-xl md:text-[2rem]">Pukul 09.00 WIB</p>
        </div>

        <Countdown date={resepsi} renderer={Count} />
      </div>
    </div>
  );
}
