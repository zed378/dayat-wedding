import Image from 'next/image';
import { Zoom, Slide } from 'react-awesome-reveal';

export default function BrideGroomScreen() {
  return (
    <div className="w-full h-screen px-3 py-10 md:px-[15%] relative z-10">
      <div className="w-full h-full rounded-lg flex flex-col items-center justify-center bg-[#ffffff70] md:px-10 gap-2 relative z-10">
        <Zoom>
          <Image
            src="/top.svg"
            width={300}
            height={300}
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

        <div className="w-[90%] mt-5 md:flex md:justify-around md:items-center">
          <Slide direction="down" className="md:w-[40%] ">
            <div>
              <h1 className="text-center text-pink-500 text-3xl font-light satisfy">
                Fatchur Rochman
              </h1>
              <p className="text-center font-light">
                Putra Bapak Maghfir (alm) & Ibu Chalimatus Sya&apos;diyah (almh)
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

          <Slide direction="up" className="md:w-[40%] ">
            <div>
              <h1 className="text-center text-pink-500 text-3xl font-light satisfy">
                Rizky Arika Rahmadhani
              </h1>
              <p className="text-center font-light">
                Putri Bapak Moch. Imam Hanafi (alm) & Ibu Suma&apos;asih
              </p>
            </div>
          </Slide>
        </div>

        <Slide direction="up">
          <Image
            src="/bottom.svg"
            width={300}
            height={300}
            alt="bottom"
            className="w-[150px] md:w-[300px] mt-10 h-auto "
          />
        </Slide>
      </div>
    </div>
  );
}
