import { Nanum_Gothic_Coding } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
import { Home , GraduationCap, CircleUserRound, BugPlay} from 'lucide-react';
const nanumGothicCoding = Nanum_Gothic_Coding({
    subsets: ['latin'],
    weight: '400'
  });

export default function Header() {
    return (
      <nav className={`${nanumGothicCoding.className} bg-white border-gray-200 dark:bg-gray-900`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium grid grid-cols-4 gap-2 border border-gray-100 rounded-lg bg-gray-50 md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className='flex flex-col items-center justify-center w-full px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors'>
                <Link
                  href="/"
                  className="block py-2 hover:bg-gray-100 transition-colors rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white">
                  <Home size={20} className='-ml-px'/>
                </Link>
              </li>
              <li className='flex flex-col items-center justify-center w-full px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors'>
                <Link
                  href="#"
                  className="block py-2 hover:bg-gray-100 transition-colors rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white">
                  <CircleUserRound size={20} className='-ml-px'/>
                </Link>
              </li>
              <li className='flex flex-col items-center justify-center w-full px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors'>
                <Link
                  href="#"
                  className="block py-2 hover:bg-gray-100 transition-colors rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white">
                  <GraduationCap size={20} className='-ml-px'/>
                </Link>
              </li>
              <li className='flex flex-col items-center justify-center w-full px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors'>
                <Link
                  href="#"
                  className="block py-2 hover:bg-gray-100 transition-colors rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white">
                  <BugPlay size={20} className='-ml-px'/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}