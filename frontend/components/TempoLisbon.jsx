import Image from 'next/image';

export default function TempoLisbon({ tempoLisbon }) {
  return (
    <>
      <div className=" bg-white opacity-90 rounded-md shadow-md w-[270px] p-4 space-y-4">
        <div>
          <h2 className=" font-thin text-4xl">{tempoLisbon['name']}</h2>
        </div>

        <div className="flex justify-evenly items-center">
          <div className="w-1/2">
            <Sol />
          </div>
          <div className="w-1/2 font-bold text-4xl">
            {/* {Math.floor(tempoLisbon['main']['temp'])}º */}
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4">
        <div className="font-light text-red-600">
          {Math.floor(tempoLisbon['main']['temp_max'])}º
          </div>
          <div className="font-light text-blue-600">
            {Math.floor(tempoLisbon['main']['temp_min'])}º
          </div>
        </div>

        <div>
          <h2 className=" font-thin text-base">{tempoLisbon['weather'][0]['description']}</h2>
        </div>

      </div>
    </>
  );
}

function Sol() {
  return (
    <div>
      <Image src="/weather/001-sun.svg" height={50} width={60} />
    </div>
  );
}
// 
