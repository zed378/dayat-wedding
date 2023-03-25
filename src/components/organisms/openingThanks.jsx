export default function OpeningThanks({ name }) {
  return (
    <div className="w-full h-screen md:px-20 py-10 px-3">
      <div className="w-full h-full rounded-lg flex flex-col items-center justify-center bg-[#80808080] gap-2 relative z-10">
        <h1 className="text-center md:text-2xl">
          Kepada Yth. <br /> Bapak/Ibu/Saudara/i:
        </h1>
        <h1 className="capitalize satisfy text-2xl md:text-4xl font-black text-pink-500 text-center px-4">
          {name}
        </h1>

        <div className="flex gap-2">
          <div className="animate-pulse bg-pink-500 h-3 w-3 rounded-full"></div>
          <div className="animate-pulse bg-pink-500 h-3 w-3 rounded-full"></div>
          <div className="animate-pulse bg-pink-500 h-3 w-3 rounded-full"></div>
        </div>

        <h1 className="text-center px-2">
          Izinkan kami berbagi kebahagiaan dalam acara sakral pernikahan demi
          menggapai ridho Allah SWT dan menyempurnakan separuh agamaNya.
        </h1>
        <h1 className="text-center px-4">
          Mohon do&rsquo;a dan restunya demi kelancaran hajat yang sudah kami
          tunggu.
        </h1>
      </div>
    </div>
  );
}
