import { Fade, Slide, Zoom } from "react-awesome-reveal";

export default function LocationResepsiScreen() {
  return (
    <div className="w-full h-screen relative z-10 p-4">
      <Zoom className="w-full flex flex-col items-center justify-center">
        <div className="bg-[#f25cb960] p-4 mb-3 rounded-lg md:w-[60%]">
          <Fade direction="up" cascade>
            <h1 className="text-center text-white text-lg font-light md:text-3xl">
              Insya&rsquo;allah resepsi nikah akan dilaksanakan di:
            </h1>

            <h1 className="text-center text-white font-black md:text-3xl">
              Jalan Simomulyo Baru 05-E/17, Surabaya
            </h1>
          </Fade>
        </div>
        <div className="w-full md:h-[60%] h-[300px] md:px-[20%] flex justify-center items-center rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d989.4303515112948!2d112.70276222921468!3d-7.272509369355847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTYnMjEuMCJTIDExMsKwNDInMTEuOSJF!5e0!3m2!1sen!2sid!4v1679753954954!5m2!1sen!2sid"
            className="w-[1600px] h-[300px] md:h-[55vh]"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <h1 className="mt-3 md:text-2xl text-center">
          Jika ingin membuka di google maps silakan pencet tulisan{" "}
          <b>View larger map</b>
        </h1>
      </Zoom>
    </div>
  );
}
