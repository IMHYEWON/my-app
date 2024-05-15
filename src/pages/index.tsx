import { Pixelify_Sans } from "next/font/google";
import MessageInput from '@/components/whoareyou';

const pixelify = Pixelify_Sans({ subsets: ["latin"] });

export default function Home() {

  return (
    <main
      className={`py-[15vh] sm:py-[20vh] max-w-md mx-4 sm:mx-auto space-x-2 md:space-x-8 flex flex-col items-center justify-center ${pixelify.className}`}
        >
      <h1 className="transition hover:scale-110 z-10 text-2xl sm:text-4xl animate-title font-display whitespace-nowrap bg-clip-text mb-8">
        Welcome ! I am Hyewon
      </h1>
      <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">        <MessageInput />
      </div>
    </main>
  );
}
