import Head from "next/head";
import Image from "next/image";
import Countdown from "react-countdown";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// components

// assets
import tr from "../../public/tr.webp";
import music from "../../public/audio-file.mp3";
import garnish from "../../public/garnish.svg";
import groom from "../../public/groom.svg";
import bride from "../../public/bride.svg";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-full p-2 grid gap-2 md:grid-cols-4 grid-cols-2">
          <div className="bg-pink-500 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px]">
            <h1 className="text-4xl md:text-[4rem] mb-2">{days}</h1>
            <h2 className="md:text-4xl">Hari</h2>
          </div>
          <div className="bg-pink-600 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px]">
            <h1 className="text-4xl md:text-[4rem] mb-2">{hours}</h1>
            <h2 className="md:text-4xl">Jam</h2>
          </div>
          <div className="bg-pink-600 md:bg-pink-500 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px]">
            <h1 className="text-4xl md:text-[4rem] mb-2">{minutes}</h1>
            <h2 className="md:text-4xl">Menit</h2>
          </div>
          <div className="bg-pink-500 md:bg-pink-600 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px]">
            <h1 className="text-4xl md:text-[4rem] mb-2">{seconds}</h1>
            <h2 className="md:text-4xl">Detik</h2>
          </div>
        </div>
        <div className="w-full px-2 py-3 bg-pink-500 text-center text-4xl text-white mt-2">
          Alhamdulillah sudah sah. Akad nikah telah selesai.
        </div>
      </div>
    );
  } else {
    // Render a countdown
    return (
      <div className="w-full h-auto relative z-10">
        <div className="text-center text-pink-500 mb-6">
          <h1 className="md:text-2xl 2xl:text-4xl mb-2">
            Akad nikah akan dilaksanakan pada:
          </h1>
          <h1 className="text-2xl md:text-[2rem]">Jumat, 12 Mei 2023</h1>
        </div>

        <div className="w-full p-2 md:px-[15rem] grid gap-2 md:grid-cols-4 grid-cols-2">
          <div className="bg-pink-500 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <h1 className="text-4xl md:text-[4rem] mb-2">{days}</h1>
            <h2 className="md:text-4xl">Hari</h2>
          </div>
          <div className="bg-pink-600 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <h1 className="text-4xl md:text-[4rem] mb-2">{hours}</h1>
            <h2 className="md:text-4xl">Jam</h2>
          </div>
          <div className="bg-pink-600 md:bg-pink-500 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <h1 className="text-4xl md:text-[4rem] mb-2">{minutes}</h1>
            <h2 className="md:text-4xl">Menit</h2>
          </div>
          <div className="bg-pink-500 md:bg-pink-600 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <h1 className="text-4xl md:text-[4rem] mb-2">{seconds}</h1>
            <h2 className="md:text-4xl">Detik</h2>
          </div>
        </div>
      </div>
    );
  }
};

export default function Home() {
  const d = new Date("May 12, 2023 09:00:00");
  const name = useRouter();
  const [open, setOpen] = useState(true);

  return (
    <>
      <Head>
        <title>Dayat & Lubena</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className="hidden">
        <audio src={music} autoPlay loop id="music" />
      </div>

      {open && (
        <div className="bg-black w-full h-screen opening flex flex-col justify-center items-center gap-2 relative overflow-hidden">
          <Image
            src={garnish}
            alt="garnish"
            className="w-[300px] h-[30ppx] absolute top-[-150px] right-[-150px] md:h-[600px] md:w-[600px] md:top-[-300px] md:right-[-200px] z-10 animate-spin-slow"
          />
          <h1 className="text-2xl text-pink-500 px-2">Undangan pernikahan</h1>
          <h2 className="pacifico text-pink-500 text-[3.25rem] text-center px-2">
            Dayat dan Lubena
          </h2>
          <h1 className="text-2xl text-pink-500 mt-9 px-2">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </h1>
          <div className="capitalize satisfy text-pink-500 text-4xl text-center px-2">
            {name?.query?.to}
          </div>

          <div className="text-center mt-4 text-xs px-2">
            <p>
              Tanpa mengurangi rasa hormat, kami bermaksud mengundang Anda untuk
              menghadiri acara pernikahan kami.
            </p>
            <p>
              * Mohon maaf apabila ada penulisan nama atau gelar yang salah.
            </p>
          </div>
          <button
            className="bg-pink-600 px-6 py-3 rounded-xl text-white text-xl font-bold hover:bg-pink-800 mt-6"
            onClick={() => {
              setOpen(false);
              document.getElementById("music").play();
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
      )}
      {!open && (
        <div className="w-full h-screen relative bg-slate-300 flex flex-col justify-center items-center">
          <div className="flex justify-end absolute top-0 right-0">
            <Image
              src={tr}
              className="h-[250px] w-[250px] md:h-[350px] md:w-[350px]"
              alt="garnish"
            />
          </div>

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
            <Countdown date={d} renderer={renderer} />
          </div>

          <div className="flex justify-start absolute bottom-0 left-0">
            <Image
              src={tr}
              className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] rotate-180"
              alt="garnish"
            />
          </div>
        </div>
      )}
    </>
  );
}
