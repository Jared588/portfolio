import Header from "../_components/Header";
import { VideoPlayer } from "../_components/VideoPlayer";
import Image from "next/image";

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#dddddd] to-[#b9b9b9] text-black">
      <Header />
      <div className="flex flex-grow flex-col p-6 pt-20 text-center">
        <h1 className="pb-8 text-6xl font-extrabold tracking-tight lg:text-7xl">
          Creative <span className="text-blue-900">Corner</span>
        </h1>

        <div className="flex flex-col items-center justify-center lg:p-14">
          <div className="flex flex-col items-center py-10 lg:px-20">
            <h1 className="text-4xl lg:text-5xl">Video Editing 📹</h1>
            <h2 className="pt-2 text-xl text-blue-900">Media</h2>
            <p className="mt-10 text-lg">
              I enjoy creating and editing engaging video content for a range of
              independent projects. With a keen eye for detail, I focus on
              bringing each vision to life through high-quality edits. Whether
              it&apos;s for social media or other digital platforms, my goal is
              to produce videos that truly connect with viewers.
            </p>
            <div className="pt-20 lg:w-1/2 lg:p-10">
              <VideoPlayer />
            </div>
          </div>

          <div className="flex flex-col items-center py-10 lg:px-20">
            <h1 className="text-4xl lg:text-5xl">Music Production 🎹</h1>
            <h2 className="pt-2 text-xl text-blue-900">Media</h2>
            <p className="mt-10 text-lg">
              I have a passion for creating and producing music for different
              audiences. With an ear for detail, I love bringing ideas to life
              through sound, whether it’s crafting catchy melodies or shaping
              unique soundscapes. My goal is to produce high-quality tracks that
              resonate with listeners and enhance the overall experience of any
              project.
            </p>
            <div className="flex justify-center pt-20 lg:w-1/2 lg:p-10">
              <Image
                src="/Ableton.png"
                alt="Screenshot of Ableton Live audio editing software interface"
                width={600}
                height={300}
              />
            </div>
          </div>

          <div className="flex flex-col items-center py-10 lg:px-20">
            <h1 className="text-4xl lg:text-5xl">Scripting ✒️</h1>
            <h2 className="pt-2 text-xl text-blue-900">Media</h2>
            <p className="mt-10 text-lg">
              I enjoy crafting scripts for various projects, focusing on
              storytelling and engaging content. Whether it&apos;s for videos or
              other formats, I love shaping ideas into compelling narratives
              that capture the audience&apos;s attention. My goal is to create
              scripts that resonate with viewers and bring the project to life.
              To see more of my writing capabilities, check out{" "}
              <a className="text-blue-500" href="https://jareddevelops.vercel.app/">my blog</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
