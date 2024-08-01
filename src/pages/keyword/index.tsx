import Image from "next/image";
import { Pixelify_Sans } from 'next/font/google';
import { animalcrossing } from "../../../public/icons/animalcrossing/animalcrossings"; 
import SiteHead from "@/components/meta/sitehead";

const pixelify = Pixelify_Sans({
    subsets: ['latin'],
    weight: '400'
});

export default function Keyword() {

    const buttons = [
        { id: 1, label: 'English', hover: true, background: 'bg-cyan-300', href: '/cherrt' },
        { id: 2, label: 'Guitar', hover: true, background: 'bg-cyan-300', href: '/cherrt' },
        { id: 3, label: 'Programming', hover: true, background: 'bg-cyan-300', href: '/cherrt' },
        { id: 4, label: '🐹', hover: false, background: 'bg-stone-200', href: '/cherrt' },
        { id: 5, label: 'Animal Crossing', background: 'bg-cyan-300', hover: true, href: '/cherrt' },
        { id: 6, label: 'Trip', hover: true,background: 'bg-cyan-300',  href: '/cherrt' },
        { id: 7, label: 'Japanese',hover: true,  background: 'bg-cyan-300', href: '/cherrt' },
      ];
    return (
        <>
            <SiteHead title='introduce' description='나는 ..' image='' url='' />
            <div className="min-h-screen flex items-center justify-center bg-gray-100/10 p-4">
                <div className={`${pixelify.className} relative w-[400px] content-center px-4`}>
                    <p className="text-xl mb-4">🪼 My keyword</p>
                        {buttons.map((button) => (
                            <button key={button.id} className={`rounded-full ${button.background} ${button.hover ? `hover:bg-cyan-500`:''} py-1 mb-1 px-4 mr-1`}>{button.label}</button>
                        ))}
                </div>
            </div>

        </>
    )
};
