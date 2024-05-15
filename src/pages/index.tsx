import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";

const pixelify = Pixelify_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${pixelify.className}`}
    >
      <h1 className="transition hover:scale-110 z-10 text-4xl animate-title font-display whitespace-nowrap bg-clip-text ">
        Welcome ! I am Hyewon
      </h1>
    </main>
  );
}
