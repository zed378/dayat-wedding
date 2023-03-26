import Image from "next/image";
import top from "../../../public/top.svg";

export default function OpeningThanks({ name }) {
  return (
    <div className="w-full h-screen md:px-[15%] py-10 px-3">
      <div className="w-full h-full rounded-lg flex flex-col items-center justify-center bg-[#ffffff70] md:px-10 gap-2 relative z-10">
        <Image
          src={top}
          alt="top"
          className="w-[150px] md:w-[300px] mb-10 h-auto animate__animated animate__fadeInDown"
        />

        <h1 className="text-center font-light md:text-2xl animate__animated animate__fadeInDown">
          Kepada Yth. <br /> Bapak/Ibu/Saudara/i:
        </h1>
        <h1 className="capitalize satisfy text-3xl md:text-[3rem] my-5 font-black text-pink-500 text-center px-4 animate__animated animate__fadeInDown">
          {name}
        </h1>

        <div className="flex gap-2 animate__animated animate__fadeInUp">
          <div className="animate-pulse bg-pink-500 h-3 w-3 rounded-full"></div>
          <div className="animate-pulse bg-pink-500 h-3 w-3 rounded-full"></div>
          <div className="animate-pulse bg-pink-500 h-3 w-3 rounded-full"></div>
        </div>

        <h1 className="text-center md:text-2xl font-light px-2 animate__animated animate__fadeInUp">
          Izinkan kami berbagi kebahagiaan dalam acara sakral pernikahan demi
          menggapai ridho Allah SWT dan menyempurnakan separuh agamaNya.
        </h1>
        <h1 className="text-center md:text-2xl font-light px-4 animate__animated animate__fadeInUp">
          Mohon do&rsquo;a dan restunya demi kelancaran hajat yang sudah kami
          tunggu.
        </h1>

        <div className="flex gap-2 animate__animated animate__fadeInUp">
          <div className="animate-pulse bg-pink-500 h-3 w-3 rounded-full"></div>
          <div className="animate-pulse bg-pink-500 h-3 w-3 rounded-full"></div>
          <div className="animate-pulse bg-pink-500 h-3 w-3 rounded-full"></div>
        </div>

        <Image
          src={top}
          alt="top"
          className="w-[150px] md:w-[300px] mt-10 h-auto rotate-180 animate__animated animate__fadeInUp"
        />
      </div>
    </div>
  );
}
