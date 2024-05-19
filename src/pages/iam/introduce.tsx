import Image from "next/image";
import { Concert_One } from 'next/font/google';
import { animalcrossing } from "../../../public/icons/animalcrossing/animalcrossings"; 

const concert = Concert_One({
    subsets: ['latin'],
    weight: '400'
});

export default function Iam() {

    const buttons = [
        { id: 1, icon: animalcrossing.butterfly, label: 'cherry', href: '/cherrt' },
        { id: 2, icon: animalcrossing.cap, label: 'cherry', href: '/cherrt' },
        { id: 3, icon: animalcrossing.cherry, label: 'cherry', href: '/cherrt' },
        { id: 4, icon: animalcrossing.money, label: 'cherry', href: '/cherrt' },
        { id:5, icon: animalcrossing.peach, label: 'cherry', href: '/cherrt' },
        { id:6, icon: animalcrossing.items, label: 'cherry', href: '/cherrt' },
        { id:7, icon: animalcrossing.plant, label: 'cherry', href: '/cherrt' },
        { id:8, icon: animalcrossing.plant, label: 'cherry', href: '/cherrt' },
        { id:9, icon: animalcrossing.starFragment, label: 'cherry', href: '/cherrt' },
        { id:10, icon: animalcrossing.tulip, label: 'cherry', href: '/cherrt' },
        { id:11, icon: animalcrossing.items, label: 'cherry', href: '/cherrt' },
        { id:12, icon: animalcrossing.items, label: 'cherry', href: '/cherrt' },
        { id:13, icon: animalcrossing.items, label: 'cherry', href: '/cherrt' },
        { id:14, icon: animalcrossing.items, label: 'cherry', href: '/cherrt' },

      ];
    return (
        <>
            <div className="bg-custom-pattern bg-cover bg-no-repeat bg-center h-screen">
                <div className="flex flex-col items-center justify-center">
                    <div className={`${concert.className} text-4xl text-stone-600 font-bold pt-24 text-center`}>
                        Hyewon&apos;s inventory
                    </div>
                    <div className="mt-14 grid grid-cols-4 gap-8">
                        {buttons.map((button) => (
                            <a
                                key={button.label}
                                href={button.href}
                                className="flex flex-col items-center justify-center p-4 rounded-full hover:bg-amber-100/75 transition-colors">
                                <button.icon alt={button.label} width={48} height={48} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
};