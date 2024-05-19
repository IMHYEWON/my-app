import { Nanum_Gothic_Coding } from 'next/font/google';

const nanumGothicCoding = Nanum_Gothic_Coding({
    subsets: ['latin'],
    weight: '400'
});

export default function Custom404() {
    return (

        <div className="flex items-center justify-center h-screen">
            <div className={`${nanumGothicCoding.className} text-center`}>
                <h1 className="text-6xl font-bold">🚧</h1>
                <h2 className={`text-2xl p-1 text-stone-800`}>Work In Progress..</h2>
                <p className='text-stone-600'>Thank you for visiting my place ☺️</p>
            </div>
        </div>
    )
  }