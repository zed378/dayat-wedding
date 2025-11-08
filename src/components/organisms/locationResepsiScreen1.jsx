import { Fade, Slide, Zoom } from 'react-awesome-reveal';

export default function LocationResepsiScreen1() {
  return (
    <div className="w-full h-screen relative z-10 p-4">
      <Zoom className="w-full flex flex-col items-center justify-center">
        <div className="bg-[#f25cb960] p-4 mb-3 rounded-lg md:w-[60%]">
          <Fade direction="up" cascade>
            <h1 className="text-center text-white text-lg font-light md:text-3xl">
              Insya&rsquo;allah Unduh mantu akan dilaksanakan di:
            </h1>

            <h1 className="text-center text-white font-black md:text-3xl">
              Jl. Makam RT. 13 RW. 03 Damarsi Buduran Sidoarjo
            </h1>
          </Fade>
        </div>
        <div className="w-full md:h-[60%] h-[300px] md:px-[20%] flex justify-center items-center rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d294.0651699810702!2d112.75976813519829!3d-7.41494971655673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e433b4eba3cd%3A0x5e5441ab994797e9!2sJl.%20Makam%2C%20Area%20Sawah%2C%20Damarsi%2C%20Kec.%20Buduran%2C%20Kabupaten%20Sidoarjo%2C%20Jawa%20Timur%2061252!5e0!3m2!1sid!2sid!4v1762602858712!5m2!1sid!2sid"
            className="w-[1600px] h-[300px] md:h-[55vh]"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <h1 className="mt-3 md:text-2xl text-center">
          Jika ingin membuka di google maps silakan pencet tulisan{' '}
          <b>View larger map</b>
        </h1>
      </Zoom>
    </div>
  );
}
