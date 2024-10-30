import Header from "../_components/Header";
import { VideoPlayer } from "../_components/VideoPlayer";

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#dddddd] to-[#b9b9b9] text-black">
      <Header />
      <div className="flex flex-grow flex-col p-6 pt-20 text-center">
        <h1 className="pb-8 lg:text-7xl font-extrabold tracking-tight text-6xl">
          Creative <span className="text-blue-900">Corner</span>
        </h1>

        <div className="flex flex-col items-center justify-center lg:p-14">
          <div className="flex flex-col items-center  lg:px-20 py-10">
            <h1 className="text-4xl lg:text-5xl">Video Editing</h1>
            <h2 className="pt-2 text-xl text-blue-900">Media</h2>
            <p className="mt-10 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="lg:w-1/2 lg:p-10 pt-20">
              <VideoPlayer />
            </div>
          </div>

          <div className=" lg:px-20 py-10">
            <h1 className="text-4xl lg:text-5xl">Music Production</h1>
            <h2 className="pt-2 text-xl text-blue-900">Media</h2>
            <p className="mt-10 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
