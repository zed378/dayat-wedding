import Head from "next/head";
import Image from "next/image";
import Countdown from "react-countdown";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <div>Completed</div>;
  } else {
    // Render a countdown
    return (
      <span>
        {days} Days : {hours} Hours : {minutes} Minutes : {seconds} Seconds
      </span>
    );
  }
};

// let comp = <Countdown date={d} renderer={renderer} />;

export default function Home() {
  // const d = new Date("May 12, 2023 09:00:00");
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
          <h1 className="text-2xl text-pink-500">Undangan pernikahan</h1>
          <h2 className="pacifico text-pink-500 text-[3.5rem]">
            Dayat dan Lubena
          </h2>
          <h1 className="text-2xl text-pink-500 mt-9">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </h1>
          <div className="capitalize satisfy text-pink-500 text-4xl text-center">
            {name?.query?.to}
          </div>

          <div className="text-center mt-4 text-sm">
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
    </>
  );
}
