import MessageInput from '@/components/whoareyou';
import MainHeader from "@/components/heading";
import Head from "next/head";
import SiteHead from '@/components/meta/sitehead';

export default function Home() {

  return (
    <>
      <SiteHead title='Welcome to Hyewons home' description='Explore' image='' url=''/>
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
