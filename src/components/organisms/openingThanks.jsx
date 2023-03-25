export default function OpeningThanks({ name }) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-center">
        Kepada Yth. <br /> Bapak/Ibu/Saudara/i:
      </h1>
      <h1 className="capitalize satisfy text-2xl font-black">{name}</h1>

      <div className="animate-pulse bg-pink-500 h-3 w-3 rounded-full"></div>
    </div>
  );
}
