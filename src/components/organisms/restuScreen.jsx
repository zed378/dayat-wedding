import Image from 'next/image';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

export default function RestuScreen() {
  return (
    <div className="w-full h-screen md:px-[15%] py-10 px-3">
      <div className="w-full h-full rounded-lg flex flex-col items-center justify-center bg-[#ffffff70] px-3 md:px-10 gap-2 relative z-10">
        <Fade direction="down">
          <Image
            src="/top.svg"
            width={300}
            height={300}
            alt="top"
            className="w-[150px] md:w-[300px] mb-5 h-auto"
          />
        </Fade>

        <Zoom cascade>
          <h1 className="text-center font-light md:text-2xl">
            Atas kehadiran dan do’a restu dari Bapak/Ibu/Saudara/i sekalian,
            kami mengucapkan Terima Kasih.
          </h1>

          <h1 className="text-center md:text-2xl">Wassalamu’alaikum Wr. Wb.</h1>
        </Zoom>

        <Fade direction="up">
          <h1 className="text-center mt-10 md:text-2xl">
            Kami yang berbahagia
          </h1>

          <h1 className="text-center text-4xl md:text-6xl text-pink-500 satisfy">
            Arika & Fatchur
          </h1>
        </Fade>

        <Fade direction="up">
          <Image
            src="/bottom.svg"
            width={300}
            height={300}
            alt="bottom"
            className="w-[150px] md:w-[300px] mt-5 h-auto"
          />
        </Fade>
      </div>
    </div>
  );
}
