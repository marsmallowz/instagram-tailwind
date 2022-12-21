export default function Stories() {
  return (
    /// relative mb-5
    // w-4/5 mx-auto
    <div className=" bg-white ">
      <ul className="sm:border rounded-md border-slate-200 p-2 flex space-x-2 overflow-x-auto">
        {/* <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
            <a className=" block bg-white p-0.5 rounded-full cursor-pointer">
              <img
                className="rounded-full w-16 h-16"
                src="/assets/1.jpg"
                alt="my"
              />
            </a>
          </div>
          <a className="cursor-pointer">
            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
              Your story
            </div>
          </a>
        </li> */}
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
            <a className=" block bg-white p-0.5 rounded-full cursor-pointer">
              <img
                className="rounded-full w-16 h-16"
                src="/assets/3.jpg"
                alt="au"
              />
            </a>
          </div>
          <a className="cursor-pointer">
            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
              audray_cattyln
            </div>
          </a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
            <a className=" block bg-white p-0.5 rounded-full cursor-pointer">
              <img
                className="rounded-full w-16 h-16"
                src="/assets/4.jpg"
                alt="rit"
              />
            </a>
          </div>
          <a className="cursor-pointer">
            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
              xRitaxx
            </div>
          </a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
            <a className=" block bg-white p-0.5 rounded-full cursor-pointer">
              <img
                className="rounded-full w-16 h-16"
                src="/assets/5.jpg"
                alt="gio"
              />
            </a>
          </div>
          <a className="cursor-pointer">
            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
              giovanino
            </div>
          </a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
            <a className=" block bg-white p-0.5 rounded-full cursor-pointer">
              <img
                className="rounded-full w-16 h-16"
                src="/assets/6.jpg"
                alt="setia"
              />
            </a>
          </div>
          <a className="cursor-pointer">
            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
              setia_aja
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
