import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

export default function UcapanScreen() {
  const [messages, setMessages] = useState([]);
  const [addMessage, setAddMessage] = useState({
    name: '',
    messages: '',
  });
  const [loading, setLoading] = useState(false);

  const getMessages = async () => {
    try {
      const data = await axios.get(
        'https://be.rizkyandfatchur.my.id/api/v1/message'
      );

      setMessages(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitMessage = async () => {
    setLoading(true);
    await axios
      .post('https://be.rizkyandfatchur.my.id/api/v1/add', {
        name: addMessage.name,
        messages: addMessage.messages,
      })
      .then(() => {
        setAddMessage({
          name: '',
          messages: '',
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        getMessages();
        setLoading(false);
      });
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="w-full h-auto md:px-[15%] py-10 px-3">
      <div className="w-full h-full rounded-lg flex flex-col items-center justify-center bg-[#ffffff70] px-3 py-5 md:px-10 gap-2 relative z-10">
        <Fade direction="down">
          <Image
            src="/top.svg"
            width={300}
            height={300}
            alt="top"
            className="w-[150px] md:w-[300px] mb-5 h-auto"
          />
        </Fade>

        <Zoom>
          <h1 className="text-center font-medium text-pink-500 text-2xl">
            Kirim Ucapan dan Doa
          </h1>
        </Zoom>

        <Zoom cascade>
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <input
              type="text"
              value={addMessage.name}
              placeholder="Masukkan Nama Anda"
              onChange={(e) =>
                setAddMessage({ ...addMessage, name: e.target.value })
              }
              className="w-[80vw] md:w-[60vw] text-white bg-[#ec489980] h-10 focus:border-none outline-none px-3 rounded-lg placeholder-gray-600"
            />
            <textarea
              value={addMessage.messages}
              placeholder="Masukkan Ucapan atau Doa Anda"
              onChange={(e) => {
                setAddMessage({ ...addMessage, messages: e.target.value });
              }}
              className="w-[80vw] md:w-[60vw] text-white bg-[#ec489980] h-[10rem] focus:border-none outline-none px-3 py-2 rounded-lg resize-none placeholder-gray-600"
            />
          </div>

          <button
            className="w-[80vw] md:w-[60vw] bg-pink-400 text-white flex  items-center justify-center rounded-lg py-2 font-light text-xl mb-5"
            onClick={submitMessage}
          >
            {loading && (
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            Kirim
          </button>
        </Zoom>

        <div className="w-full max-h-[350px] overflow-auto flex flex-col items-center overflow-y-scroll bg-scroll">
          <Fade direction="left" duration={500}>
            {messages.map((item, index) => (
              <div
                key={index}
                className="w-[80vw] md:w-[60vw] flex gap-3 items-start mb-2"
              >
                <Image src="/avatar.svg" className="h-10 w-10" alt="avatar" />
                <div className="w-[100%] bg-white relative px-3 py-2 rounded-lg">
                  <div class="left-0 top-1 z-[-1] absolute bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white "></div>
                  <h1 className="text-md">{item.name}</h1>
                  <h1 className="text-sm font-light">{item.messages}</h1>
                </div>
              </div>
            ))}
          </Fade>
        </div>

        <Fade direction="up">
          <Image
            src="/bottom.svg"
            width={300}
            height={300}
            alt="bottom"
            className="w-[150px] md:w-[300px] mt-5 h-auto"
          />
        </Fade>
      </div>
    </div>
  );
}
