import { ReactNode } from 'react';
import { Transition } from '@headlessui/react';
import { Nanum_Gothic_Coding } from 'next/font/google';
import { useState } from 'react';

const nanumGothicCoding = Nanum_Gothic_Coding({
    subsets: ['latin'],
    weight: '400'
  });

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  direction: 'top' | 'bottom';
}

export default function Tooltip({ children, content, direction }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="flex items-center justify-center"
      >
        {children}
      </div>
      <Transition
        as="div"
        show={isVisible}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {direction === 'top' && (
        <div className={`${nanumGothicCoding.className} absolute z-10 px-3 py-2 
                        text-sm font-medium text-white bg-gray-900 rounded-lg 
                        shadow-sm bottom-full mb-2 left-1/2 transform -translate-x-1/2`}
            style={{ whiteSpace: 'nowrap', maxWidth: '200px' }}
            >
          {content}
          <div className="absolute w-3 h-3 bg-gray-900 transform rotate-45 bottom-[-4px] left-1/2 -translate-x-1/2 dark:bg-gray-700"></div>
        </div>
        )}
        {direction === 'bottom' && (
        <div className={`${nanumGothicCoding.className} absolute z-10 px-3 py-2 
                        text-sm font-medium text-white bg-gray-900 rounded-lg 
                        shadow-sm top-full mt-2 left-1/2 transform -translate-x-1/2`}
            style={{ whiteSpace: 'nowrap', maxWidth: '200px' }}
            >
          {content}
          <div className="absolute w-3 h-3 bg-gray-900 transform rotate-45 top-[-4px] left-1/2 -translate-x-1/2 dark:bg-gray-700"></div>
        </div>)}
      </Transition>
    </div>
  );
}
