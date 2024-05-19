import { Nanum_Gothic_Coding } from 'next/font/google';
import Link from 'next/link';
import { Home, GraduationCap, CircleUserRound, BugPlay } from 'lucide-react';
import Tooltip from "@/components/tooltip";

const nanumGothicCoding = Nanum_Gothic_Coding({
    subsets: ['latin'],
    weight: '400'
});

export default function Header() {
        return (
        <nav className={`${nanumGothicCoding.className} drop-shadow-sm fixed z-50 w-full bg-white border-stone-200 dark:bg-stone-900`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-3">
                <div className="w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium grid grid-cols-4 gap-2 border border-stone-100 rounded-lg bg-stone-50 md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-stone-800 md:dark:bg-stone-900 dark:border-stone-700">
                        <Tooltip key={'home'} content={'Home'} direction={'bottom'}>
                            <li className='flex flex-col items-center justify-center w-full px-2 py-2 rounded-lg hover:bg-stone-100 transition-colors'>
                                <Link
                                    href="/"
                                    className="block py-2 hover:bg-stone-100 transition-colors rounded md:bg-transparent md:text-stone-700 md:p-0 dark:text-white">
                                    <Home size={20} className='-ml-px' />
                                </Link>
                            </li>
                        </Tooltip>
                        <Tooltip key={'about'} content={'About'} direction={'bottom'}>
                            <li className='flex flex-col items-center justify-center w-full px-2 py-2 rounded-lg hover:bg-stone-100 transition-colors'>
                                <Link
                                    href="#about"
                                    className="block py-2 hover:bg-stone-100 transition-colors rounded md:bg-transparent md:text-stone-700 md:p-0 dark:text-white">
                                    <CircleUserRound size={20} className='-ml-px' />
                                </Link>
                            </li>
                        </Tooltip>
                        <Tooltip key={'education'} content={'Education'} direction={'bottom'}>
                            <li className='flex flex-col items-center justify-center w-full px-2 py-2 rounded-lg hover:bg-stone-100 transition-colors'>
                                <Link
                                    href="#education"
                                    className="block py-2 hover:bg-stone-100 transition-colors rounded md:bg-transparent md:text-stone-700 md:p-0 dark:text-white">
                                    <GraduationCap size={20} className='-ml-px' />
                                </Link>
                            </li>
                        </Tooltip>
                        <Tooltip key={'experience'} content={'Experience'} direction={'bottom'}>
                            <li className='flex flex-col items-center justify-center w-full px-2 py-2 rounded-lg hover:bg-stone-100 transition-colors'>
                                <Link
                                    href="#experience"
                                    className="block py-2 hover:bg-stone-100 transition-colors rounded md:bg-transparent md:text-stone-700 md:p-0 dark:text-white">
                                    <BugPlay size={20} className='-ml-px' />
                                </Link>
                            </li>
                        </Tooltip>
                    </ul>
                </div>
            </div>
        </nav>
    );
}