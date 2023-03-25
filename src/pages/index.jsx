import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// components
import OpeningScreen from "@/components/organisms/openingScreen";
import AkadScreen from "@/components/organisms/akadScreen";
import ResepsiScreen from "@/components/organisms/resepsiScreen";
import Quotes from "@/components/organisms/quranQuotes";
import OpeningThanks from "@/components/organisms/openingThanks";

// assets
import music from "../../public/audio-file.mp3";
import tr from "../../public/tr.webp";
import bl from "../../public/bl.webp";
import garnish from "../../public/garnish.svg";

export default function Home() {
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
        <OpeningScreen
          open={() => {
            setOpen(false);
            document.getElementById("music").play();
          }}
          name={name?.query?.to}
        />
      )}

      {!open && (
        <div className="w-full h-screen overflow-auto bg-slate-300 relative akad">
          <div className="flex justify-end fixed top-0 right-0 z-0">
            <Image
              src={tr}
              className="h-[250px] w-[250px] md:h-[450px] md:w-[450px] md:hidden pulsate-fwd"
              alt="garnish"
            />
          </div>

          <div className="flex justify-end fixed top-[-300px] right-[-300px] z-0">
            <Image
              src={garnish}
              className="md:h-[750px] md:w-[750px] hidden md:block animate-spin-slow"
              alt="garnish"
            />
          </div>

          {/* Place content here */}
          <OpeningThanks name={name?.query?.to} />
          <Quotes />
          <AkadScreen />
          <ResepsiScreen />
          {/* End of content */}

          <div className="flex justify-end fixed bottom-[-300px] left-[-300px] z-0">
            <Image
              src={garnish}
              className="md:h-[750px] md:w-[750px] hidden md:block animate-spin-slow"
              alt="garnish"
            />
          </div>

          <div className="flex justify-start fixed bottom-0 left-0 z-0 md:hidden">
            <Image
              src={bl}
              className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] rotate-180 pulsate-fwd"
              alt="garnish"
            />
          </div>
        </div>
      )}
    </>
  );
}
