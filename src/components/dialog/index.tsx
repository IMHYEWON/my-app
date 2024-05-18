import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Nanum_Gothic_Coding } from 'next/font/google';
import { icons } from '../../../public/icons/icons';
import Tooltip from '@/components/tooltip';

const nanumGothicCoding = Nanum_Gothic_Coding({
  subsets: ['latin'],
  weight: '400'
});

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MyDialog({ isOpen, onClose }: DialogProps) {
  const buttons = [
    { icon: icons.yellowFolder, label: 'Career', href: '/career' },
    { icon: icons.greenFolder, label: 'I am ...', href: '/iam' },
    { icon: icons.redFolder, label: 'What I like', href: '/whatilike' },
  ];

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 text-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-10 transition-opacity backdrop-blur" />
          </Transition.Child>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-6 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-2xl sm:w-full sm:mt-[-10rem]">
              <div>
                <div className="mt-3 text-center sm:m-5">
                  <Dialog.Title as="h3" className={`${nanumGothicCoding.className} text-lg leading-6 text-gray-600`}>
                    Wanna Know About Me?
                  </Dialog.Title>
                  <div className="mt-4 py-4 grid grid-cols-3 gap-4">
                    {buttons.map((button) => (
                      <Tooltip key={button.label} content={button.label} direction={'top'}>
                        <a
                          key={button.label}
                          href={button.href}
                          className="flex flex-col items-center justify-center w-full px-6 py-6 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                        >
                          <button.icon className="w-12 h-12" />
                          {/* {button.label} */}
                        </a>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
