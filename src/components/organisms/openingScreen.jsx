import Image from "next/image";
import { Fade } from "react-awesome-reveal";

import garnish from "../../../public/garnish.svg";

export default function OpeningScreen({ open, name }) {
  return (
    <div className="bg-black w-full h-screen opening flex flex-col justify-center items-center gap-2 relative overflow-hidden">
      <Image
        src={garnish}
        alt="garnish"
        className="w-[300px] h-[30ppx] absolute top-[-150px] right-[-150px] md:h-[600px] md:w-[600px] md:top-[-300px] md:right-[-200px] z-10 animate-spin-slow "
      />
      <Fade direction="down" cascade>
        <h1 className="text-2xl text-pink-500 px-2">Undangan pernikahan</h1>
        <h2 className="pacifico text-pink-500 text-[3.25rem] text-center px-2">
          Dayat dan Lubena
        </h2>
      </Fade>

      <Fade direction="up" cascade>
        <h1 className="text-2xl text-pink-500 text-center mt-9 px-2 ">
          Kepada Yth. Bapak/Ibu/Saudara/i:
        </h1>
        <div className="capitalize satisfy text-pink-500 text-2xl text-center px-2 ">
          {name}
        </div>
        <div className="text-center mt-4 text-xs px-2 ">
          <p>
            Tanpa mengurangi rasa hormat, kami bermaksud mengundang Anda untuk
            menghadiri acara pernikahan kami.
          </p>
          <p>* Mohon maaf apabila ada penulisan nama atau gelar yang salah.</p>
        </div>
        <button
          className="bg-pink-600 px-4 py-2 rounded-xl text-white text-lg font-bold hover:bg-pink-800 mt-6 relative z-10 "
          onClick={() => {
            open();
          }}
        >
          Buka Undangan
        </button>
      </Fade>

      <Image
        src={garnish}
        alt="garnish"
        className="w-[300px] h-[30ppx] absolute bottom-[-150px] left-[-150px] md:h-[600px] md:w-[600px] md:bottom-[-300px] md:left-[-200px] z-10 animate-spin-slow"
      />
    </div>
  );
}
