import { Fragment, useState } from 'react';
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
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

function MyDialog({ isOpen, onClose }: DialogProps) {
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


export default function Example() {
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-amber-500 py-1 px-2 mr-1 text-sm font-medium text-white focus:outline-none data-[hover]:bg-amber-700 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        오프라인 행사
      </Button>

      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-start sm:ml-40 sm:mt-10 p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl p-6 
                                      bg-gradient-to-r from-amber-500/10 from-10% via-amber-300/30 via-30% to-amber-500/10 to-90%
                                      dark:from-amber-500/40
                                      backdrop-blur-2xl">
                  <DialogTitle as="h3" className="text-base/7 font-medium text-stone-700 dark:text-gray-100">
                    오프라인 참석 행사
                  </DialogTitle>
                  <div className='mt-2 text-sm/6 text-stone-700 dark:text-gray-100'>
                    <ul>
                      <li className='list-disc list-inline ml-4 '>판교 퇴근길 밋업 with 인프런 #01 타입스크립트 대시보드</li>
                      <li className='list-disc list-inline ml-4 '>2회 kakao tech meet - 23.07.28</li>
                      <li className='list-disc list-inline ml-4 '>데이터야놀자 2023 - 23.10.14</li>
                      <li className='list-disc list-inline ml-4 '>우아콘 2023 - 23.11.15</li>
                      <li className='list-disc list-inline ml-4 '>4회 kakao tech meet - 23.12.12</li>
                      <li className='list-disc list-inline ml-4 '>『튜링의 사과』 오리지널 강의 - &apos;웹 보안의 기본 메커니즘&apos; - 24.05.02</li>
                      <li className='list-disc list-inline ml-4 '>『튜링의 사과』 오리지널 강의 - &apos;Next.js와 Vercel을 활용한 효율적인 웹 개발&apos; - 24.05.09</li>


                    </ul>
                  </div>
                  <div className="mt-4">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-amber-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-amber-600 data-[open]:bg-amber-600 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={close}
                    >
                      Got it, thanks!
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export { MyDialog, Example };
