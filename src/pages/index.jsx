import Head from "next/head";
import Image from "next/image";
import Countdown from "react-countdown";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// components
import tr from "../../public/tr.webp";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return (
      <div className="w-full">
        <div className="w-full p-2 grid gap-2 md:grid-cols-4 grid-cols-2">
          <div className="bg-pink-500 text-white flex flex-col justify-center items-center h-[100px]">
            <h1 className="text-4xl">{days}</h1>
            <h2>Days</h2>
          </div>
          <div className="bg-pink-500 text-white flex flex-col justify-center items-center h-[100px]">
            <h1 className="text-4xl">{hours}</h1>
            <h2>Hours</h2>
          </div>
          <div className="bg-pink-500 text-white flex flex-col justify-center items-center h-[100px]">
            <h1 className="text-4xl">{minutes}</h1>
            <h2>Minutes</h2>
          </div>
          <div className="bg-pink-500 text-white flex flex-col justify-center items-center h-[100px]">
            <h1 className="text-4xl">{seconds}</h1>
            <h2>Seconds</h2>
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
      <div className="w-full h-screen">
        <div className="w-full h-screen relative">
          <div className="flex justify-end">
            <Image src={tr} width={250} height={250} alt="garnish" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-3 z-10">
            <div className="text-center text-pink-500 mb-3">
              <h1>Akad nikah akan dilaksanakan pada:</h1>
              <h1 className="text-2xl">Jum'at, 12 Mei 2023</h1>
            </div>

            <div className="w-full p-2 grid gap-2 md:grid-cols-4 grid-cols-2">
              <div className="bg-pink-500 text-white flex flex-col justify-center items-center h-[100px]">
                <h1 className="text-4xl">{days}</h1>
                <h2>Days</h2>
              </div>
              <div className="bg-pink-500 text-white flex flex-col justify-center items-center h-[100px]">
                <h1 className="text-4xl">{hours}</h1>
                <h2>Hours</h2>
              </div>
              <div className="bg-pink-500 text-white flex flex-col justify-center items-center h-[100px]">
                <h1 className="text-4xl">{minutes}</h1>
                <h2>Minutes</h2>
              </div>
              <div className="bg-pink-500 text-white flex flex-col justify-center items-center h-[100px]">
                <h1 className="text-4xl">{seconds}</h1>
                <h2>Seconds</h2>
              </div>
            </div>
          </div>

          <div className="flex justify-start absolute bottom-0">
            <Image
              src={tr}
              width={250}
              height={250}
              alt="garnish"
              className="rotate-180"
            />
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

      {open && (
        <div className="bg-black w-full h-screen opening flex flex-col justify-center items-center gap-2">
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
            onClick={() => setOpen(false)}
          >
            Buka Undangan
          </button>
        </div>
      )}

      {!open && (
        <div className="w-full">
          <Countdown date={d} renderer={renderer} />
        </div>
      )}
    </>
  );
}
