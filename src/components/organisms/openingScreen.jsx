import Image from "next/image";

import garnish from "../../../public/garnish.svg";

export default function OpeningScreen({ open, name }) {
  return (
    <div className="bg-black w-full h-screen opening flex flex-col justify-center items-center gap-2 relative overflow-hidden">
      <Image
        src={garnish}
        alt="garnish"
        className="w-[300px] h-[30ppx] absolute top-[-150px] right-[-150px] md:h-[600px] md:w-[600px] md:top-[-300px] md:right-[-200px] z-10 animate-spin-slow "
      />
      <h1 className="text-2xl text-pink-500 px-2 animate__animated animate__fadeInDown">
        Undangan pernikahan
      </h1>
      <h2 className="pacifico text-pink-500 text-[3.25rem] text-center px-2 animate__animated animate__fadeInDown">
        Dayat dan Lubena
      </h2>
      <h1 className="text-2xl text-pink-500 text-center mt-9 px-2 animate__animated animate__fadeInDown">
        Kepada Yth. Bapak/Ibu/Saudara/i:
      </h1>
      <div className="capitalize satisfy text-pink-500 text-4xl text-center px-2 animate__animated animate__fadeInDown">
        {name}
      </div>

      <div className="text-center mt-4 text-xs px-2 animate__animated animate__fadeInUp">
        <p>
          Tanpa mengurangi rasa hormat, kami bermaksud mengundang Anda untuk
          menghadiri acara pernikahan kami.
        </p>
        <p>* Mohon maaf apabila ada penulisan nama atau gelar yang salah.</p>
      </div>
      <button
        className="bg-pink-600 px-6 py-3 rounded-xl text-white text-xl font-bold hover:bg-pink-800 mt-6 animate__animated animate__fadeInUp"
        onClick={() => {
          open();
        }}
      >
        Buka Undangan
      </button>

      <Image
        src={garnish}
        alt="garnish"
        className="w-[300px] h-[30ppx] absolute bottom-[-150px] left-[-150px] md:h-[600px] md:w-[600px] md:bottom-[-300px] md:left-[-200px] z-10 animate-spin-slow"
      />
    </div>
  );
}
