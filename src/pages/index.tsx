import MessageInput from '@/components/whoareyou';
import MainHeader from "@/components/header";
import Head from "next/head";

export default function Home() {

  return (
    <>
      <Head>
        <title>Hyewon Homepage</title>
        <meta
          name="description"
          content="Hyewon's personal homepage. Welcome! I am Hyewon."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`py-[15vh] sm:py-[20vh] max-w-md mx-4 sm:mx-auto space-x-2 md:space-x-8 flex flex-col items-center justify-center`}
      >
        <MainHeader />
        <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
          <MessageInput />
        </div>
      </main>
    </>
  );
}
