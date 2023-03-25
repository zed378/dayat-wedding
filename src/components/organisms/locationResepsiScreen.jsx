export default function LocationResepsiScreen() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative z-10 p-4">
      <div className="bg-[#80808050] p-2 mb-3 rounded-lg md:w-[60%] ">
        <h1 className="text-center text-white text-lg md:text-3xl">
          Insya&rsquo;allah resepsi akan dilaksanakan di:
        </h1>

        <h1 className="text-center font-black md:text-3xl">
          Jalan Simomulyo Baru 05-E/17, Surabaya
        </h1>
      </div>

      <div className="w-full md:h-[60%] h-[300px] md:px-[20%] flex justify-center items-center rounded-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d989.4303515112948!2d112.70276222921468!3d-7.272509369355847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTYnMjEuMCJTIDExMsKwNDInMTEuOSJF!5e0!3m2!1sen!2sid!4v1679753954954!5m2!1sen!2sid"
          width={"100%"}
          height={"100%"}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <h1 className="mt-3 md:text-2xl text-center">
        Jika ingin membuka di google maps silakan pencet tulisan{" "}
        <b>View larger map</b>
      </h1>
    </div>
  );
}
