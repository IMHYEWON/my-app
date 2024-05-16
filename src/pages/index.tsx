import { Pixelify_Sans } from "next/font/google";
import MessageInput from '@/components/whoareyou';
import Header from "@/components/header";

const pixelify = Pixelify_Sans({ subsets: ["latin"] });

export default function Home() {

  return (
    <main
      className={`py-[15vh] sm:py-[20vh] max-w-md mx-4 sm:mx-auto space-x-2 md:space-x-8 flex flex-col items-center justify-center ${pixelify.className}`}
        >
      <Header />
      <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">        <MessageInput />
      </div>
    </main>
  );
}
