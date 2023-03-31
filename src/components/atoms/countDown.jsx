export function AkadCountdown({ days, hours, minutes, seconds, completed }) {
  if (completed) {
    // Render a completed state
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-full p-2 md:px-[15rem] grid gap-2 md:grid-cols-4 grid-cols-2">
          <div className="bg-pink-500 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <p className="text-4xl md:text-[4rem] mb-2">{days}</p>
            <p className="md:text-4xl">Hari</p>
          </div>
          <div className="bg-pink-600 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <p className="text-4xl md:text-[4rem] mb-2">{hours}</p>
            <p className="md:text-4xl">Jam</p>
          </div>
          <div className="bg-pink-600 md:bg-pink-500 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <p className="text-4xl md:text-[4rem] mb-2">{minutes}</p>
            <p className="md:text-4xl">Menit</p>
          </div>
          <div className="bg-pink-500 md:bg-pink-600 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <p className="text-4xl md:text-[4rem] mb-2">{seconds}</p>
            <p className="md:text-4xl">Detik</p>
          </div>
        </div>
        <div className="w-full flex justify-center py-3 mt-2">
          <p className="text-center text-4xl mx-15 px-10 py-4 text-white rounded-md bg-pink-500">
            Alhamdulillah sudah sah. Akad nikah telah selesai.
          </p>
        </div>
      </div>
    );
  } else {
    // Render a countdown
    return (
      <div className="w-full h-auto relative z-10">
        <div className="w-full p-2 md:px-[15rem] grid gap-2 md:grid-cols-4 grid-cols-2">
          <div className="bg-pink-500 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <p className="text-4xl md:text-[4rem] mb-2">{days}</p>
            <p className="md:text-4xl">Hari</p>
          </div>
          <div className="bg-pink-600 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <p className="text-4xl md:text-[4rem] mb-2">{hours}</p>
            <p className="md:text-4xl">Jam</p>
          </div>
          <div className="bg-pink-600 md:bg-pink-500 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <p className="text-4xl md:text-[4rem] mb-2">{minutes}</p>
            <p className="md:text-4xl">Menit</p>
          </div>
          <div className="bg-pink-500 md:bg-pink-600 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <p className="text-4xl md:text-[4rem] mb-2">{seconds}</p>
            <p className="md:text-4xl">Detik</p>
          </div>
        </div>
      </div>
    );
  }
}

export function ResepsiCountDown({ days, hours, minutes, seconds, completed }) {
  if (completed) {
    // Render a completed state
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-full p-2 md:px-[15rem] grid gap-2 md:grid-cols-4 grid-cols-2">
          <div className="bg-pink-500 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <p className="text-4xl md:text-[4rem] mb-2">{days}</p>
            <p className="md:text-4xl">Hari</p>
          </div>
          <div className="bg-pink-600 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <p className="text-4xl md:text-[4rem] mb-2">{hours}</p>
            <p className="md:text-4xl">Jam</p>
          </div>
          <div className="bg-pink-600 md:bg-pink-500 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <p className="text-4xl md:text-[4rem] mb-2">{minutes}</p>
            <p className="md:text-4xl">Menit</p>
          </div>
          <div className="bg-pink-500 md:bg-pink-600 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <p className="text-4xl md:text-[4rem] mb-2">{seconds}</p>
            <p className="md:text-4xl">Detik</p>
          </div>
        </div>
      </div>
    );
  } else {
    // Render a countdown
    return (
      <div className="w-full h-auto relative z-10">
        <div className="w-full p-2 md:px-[15rem] grid gap-2 md:grid-cols-4 grid-cols-2">
          <div className="bg-pink-500 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <p className="text-4xl md:text-[4rem] mb-2">{days}</p>
            <p className="md:text-4xl">Hari</p>
          </div>
          <div className="bg-pink-600 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <p className="text-4xl md:text-[4rem] mb-2">{hours}</p>
            <p className="md:text-4xl">Jam</p>
          </div>
          <div className="bg-pink-600 md:bg-pink-500 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <p className="text-4xl md:text-[4rem] mb-2">{minutes}</p>
            <p className="md:text-4xl">Menit</p>
          </div>
          <div className="bg-pink-500 md:bg-pink-600 text-white flex flex-col justify-center items-center h-[100px] md:h-[200px] rounded-md">
            <p className="text-4xl md:text-[4rem] mb-2">{seconds}</p>
            <p className="md:text-4xl">Detik</p>
          </div>
        </div>
      </div>
    );
  }
}
