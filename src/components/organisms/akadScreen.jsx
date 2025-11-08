import Countdown from 'react-countdown';
import Image from 'next/image';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

import { AkadCountdown } from '../atoms/countDown';

export default function AkadScreen() {
  const akad = new Date('Jan 16, 2026 09:00:00');

  return (
    <div className="w-full min-h-screen relative flex flex-col justify-center items-center">
      <div className="w-full z-10">
        <div className="w-full flex justify-center gap-2 items-center relative">
          <Slide direction="left">
            <Image
              src="/groom.webp"
              width={300}
              height={300}
              alt="groom"
              className="w-[125px] h-auto md:w-[200px] 2xl:w-[300px] animate__animated animate__fadeInLeft"
            />
          </Slide>
          <Image
            src="/love1.svg"
            width={300}
            height={300}
            alt="groom"
            className="w-[50px] h-[50px] md:h-[85px] md:w-[85px] 2xl:h-[125px] 2xl:w-[125px] relative -mx-8 md:-mx-14 2xl:-mx-20 z-10 pulsate-fwd"
          />
          <Slide direction="right">
            <Image
              src="/bride.webp"
              width={300}
              height={300}
              alt="bride"
              className="w-[125px] h-auto md:w-[200px] 2xl:w-[300px] animate__animated animate__fadeInRight"
            />
          </Slide>
        </div>

        <div className="text-center text-pink-500 mb-6">
          <Fade direction="up" cascade>
            <p className="md:text-2xl 2xl:text-4xl mb-2">
              Akad nikah akan dilaksanakan pada:
            </p>
            <p className="text-xl md:text-[2rem] font-bold mb-2">
              Jumat, 16 Januari 2026
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
