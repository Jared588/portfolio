import Header from "../_components/Header";

export default function ContactMe() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-200 text-black">
      <Header />
      <div className="flex flex-grow flex-col justify-center gap-y-4 p-6 pb-52 text-center">
        <h1 className="pb-8 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Contact <span className="text-blue-900">Me</span>
        </h1>
        <p className="text-3xl">📧 jaredeprice@proton.me</p>
      </div>
    </main>
  );
}
