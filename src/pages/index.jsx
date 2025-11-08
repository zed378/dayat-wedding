import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// components
import OpeningScreen from '@/components/organisms/openingScreen';
import OpeningThanks from '@/components/organisms/openingThanks';
import BrideGroomScreen from '@/components/organisms/brideGroomsScreen';
import Quotes from '@/components/organisms/quranQuotes';
import AkadScreen from '@/components/organisms/akadScreen';
import LocationAkadScreen from '@/components/organisms/locationAkadScreen';
import ResepsiScreen from '@/components/organisms/resepsiScreen';
import LocationResepsiScreen from '@/components/organisms/locationResepsiScreen';
import ResepsiScreen1 from '@/components/organisms/resepsiScreen1';
import LocationResepsiScreen1 from '@/components/organisms/locationResepsiScreen1';
import RekeningScreen from '@/components/organisms/rekeningScreen';
import UcapanScreen from '@/components/organisms/ucapanScreen';
import RestuScreen from '@/components/organisms/restuScreen';

export default function Home() {
  const name = useRouter();
  const [open, setOpen] = useState(true);

  return (
    <>
      <Head>
        <title>Arika & Fatchur</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className="hidden">
        <audio src="/audio-file.mp3" autoPlay loop id="music" />
      </div>

      {open && (
        <OpeningScreen
          open={() => {
            setOpen(false);
            document.getElementById('music').play();
          }}
          name={name?.query?.to}
        />
      )}

      {!open && (
        <div className="w-full h-screen overflow-auto bg-slate-300 relative akad">
          <div className="flex justify-end fixed top-0 right-0 z-0">
            <Image
              src="/tr.webp"
              width={300}
              height={300}
              className="h-[250px] w-[250px] md:h-[450px] md:w-[450px] md:hidden pulsate-fwd"
              alt="garnish"
            />
          </div>

          <div className="flex justify-end fixed top-[-300px] right-[-300px] z-0">
            <Image
              src="/garnish.svg"
              width={300}
              height={300}
              className="md:h-[750px] md:w-[750px] hidden md:block animate-spin-slow"
              alt="garnish"
            />
          </div>

          {/* Place content here */}
          <OpeningThanks name={name?.query?.to} />
          <BrideGroomScreen />
          <Quotes />
          <AkadScreen />
          <LocationAkadScreen />
          <ResepsiScreen />
          <LocationResepsiScreen />
          <ResepsiScreen1 />
          <LocationResepsiScreen1 />
          <UcapanScreen />
          <RekeningScreen />
          <RestuScreen />
          {/* End of content */}

          <div className="flex justify-end fixed bottom-[-300px] left-[-300px] z-0">
            <Image
              src="/garnish.svg"
              width={300}
              height={300}
              className="md:h-[750px] md:w-[750px] hidden md:block animate-spin-slow"
              alt="garnish"
            />
          </div>

          <div className="flex justify-start fixed bottom-0 left-0 z-0 md:hidden">
            <Image
              src="/bl.webp"
              width={300}
              height={300}
              className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] rotate-180 pulsate-fwd"
              alt="garnish"
            />
          </div>
        </div>
      )}
    </>
  );
}
