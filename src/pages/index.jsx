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
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const guestName = router?.query?.to || '';

  useEffect(() => {
    // Preload music for smoother playback
    const audio = document.getElementById('music');
    if (audio) {
      audio.load();
    }
  }, []);

  const handleOpen = () => {
    setOpen(false);
    const audio = document.getElementById('music');
    if (audio) {
      audio.play().catch(() => {
        console.warn('Autoplay prevented by browser');
      });
    }
  };

  return (
    <>
      <Head>
        <title>Arika & Fatchur</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      {/* Background music */}
      <audio id="music" src="/audio-file.mp3" loop className="hidden" />

      {open ? (
        <OpeningScreen open={handleOpen} name={guestName} />
      ) : (
        <div className="relative w-full h-screen overflow-auto bg-slate-300 akad">
          {/* Top right garnish */}
          <div className="fixed top-0 right-0 z-0 flex">
            <Image
              src="/tr.webp"
              width={300}
              height={300}
              className="h-[250px] w-[250px] md:hidden md:h-[450px] md:w-[450px] pulsate-fwd"
              alt="garnish"
              priority
            />
          </div>

          {/* Large rotating garnish */}
          <div className="fixed top-[-300px] right-[-300px] z-0 hidden md:flex">
            <Image
              src="/garnish.svg"
              width={750}
              height={750}
              className="animate-spin-slow"
              alt="garnish"
            />
          </div>

          {/* Content */}
          <main className="relative z-10">
            <OpeningThanks name={guestName} />
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
          </main>

          {/* Bottom left garnish */}
          <div className="fixed bottom-[-300px] left-[-300px] z-0 hidden md:flex">
            <Image
              src="/garnish.svg"
              width={750}
              height={750}
              className="animate-spin-slow"
              alt="garnish"
            />
          </div>

          {/* Mobile bottom-left garnish */}
          <div className="fixed bottom-0 left-0 z-0 flex md:hidden">
            <Image
              src="/bl.webp"
              width={250}
              height={250}
              className="rotate-180 pulsate-fwd"
              alt="garnish"
            />
          </div>
        </div>
      )}
    </>
  );
}
