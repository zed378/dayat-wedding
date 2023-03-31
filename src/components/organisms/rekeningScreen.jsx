import { useState } from "react";
import Image from "next/image";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import copy from "copy-to-clipboard";

import top from "../../../public/top.svg";
import bottom from "../../../public/bottom.svg";
import gift from "../../../public/gift.svg";
import bank from "../../../public/bank.svg";
import copas from "../../../public/copas.svg";

export default function RekeningScreen() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [alamat, setAlamat] = useState(false);

  return (
    <div className="w-full h-auto md:px-[15%] py-5 px-3">
      <div className="w-full h-auto py-5 rounded-lg flex flex-col items-center justify-center bg-[#ffffff70] md:px-10 gap-2 relative z-10 px-3">
        <Fade direction="down">
          <Image
            src={top}
            alt="top"
            className="w-[150px] md:w-[300px] mb-5 h-auto"
          />
        </Fade>

        <Fade direction="down">
          <h1 className="text-center md:text-2xl font-light">
            Bagi rekan-rekan / saudara/i yang berhalangan hadir, kami tambahkan
            fitur di bawah ini:
          </h1>
        </Fade>

        <Zoom>
          <button
            className="px-4 py-2 bg-pink-300 rounded-lg flex gap-2 items-center text-white text-xl my-4"
            onClick={() => setOpen(!open)}
          >
            <Image src={gift} alt="gift" className="w-10 h-auto" /> Kirim Hadiah
          </button>
        </Zoom>

        {open && (
          <Zoom cascade>
            <div className="w-[80vw] md:w-[40vw] p-5 rounded-lg bg-[#ec489950] flex flex-col gap-2 items-center">
              <Image
                src={bank}
                alt="bank"
                className="w-[150px] md:w-[300px] h-auto"
              />

              <h1 className="font-light md:text-2x text-centerl">
                Bank Jatim a.n. Fitriah:
              </h1>
              <h1 className="md:text-2xl text-center">0386099197</h1>

              <button
                className="flex items-center gap-2 bg-pink-500 text-white px-5 py-2 rounded-lg"
                onClick={() => {
                  copy("0386099197");
                  setCopied(true);
                }}
              >
                {copied ? (
                  <span className="font-light">&#10003; Tersalin</span>
                ) : (
                  <>
                    <Image src={copas} alt="copas" className="w-5 h-auto" />{" "}
                    Salin No. Rekening
                  </>
                )}
              </button>
            </div>

            <div className="w-[80vw] md:w-[40vw] p-5 rounded-lg bg-[#ec489950] flex flex-col gap-2 items-center">
              <h1 className="text-2xl md:text-3xl font-light">Kirim Kado</h1>

              <p className="md:text-2xl font-light text-center text-sm">
                Alamat: Simomulyo Baru 05-E/17, Kelurahan Simomulyo Baru,
                Kecamatan Sukomanunggal, Surabaya, 60281
              </p>
              <p className="md:text-2xl font-light text-center">
                Penerima: Dayat
              </p>

              <button
                className="flex items-center gap-2 bg-pink-500 text-white px-5 py-2 rounded-lg"
                onClick={() => {
                  copy(
                    " Simomulyo Baru 05-E/17, Kelurahan Simomulyo Baru, Kecamatan Sukomanunggal, Surabaya, 60281"
                  );
                  setAlamat(true);
                }}
              >
                {alamat ? (
                  <span className="font-light">&#10003; Tersalin</span>
                ) : (
                  <>
                    <Image src={copas} alt="copas" className="w-5 h-auto" />{" "}
                    Salin Alamat
                  </>
                )}
              </button>
            </div>
          </Zoom>
        )}

        <Fade direction="up">
          <Image
            src={bottom}
            alt="bottom"
            className="w-[150px] md:w-[300px] mt-5 h-auto"
          />
        </Fade>
      </div>
    </div>
  );
}
