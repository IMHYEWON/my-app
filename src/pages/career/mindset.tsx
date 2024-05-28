import { Inter } from "next/font/google";
import { Button } from '@headlessui/react';

import { EventDialog } from "@/components/dialog";

const inter = Inter({
    subsets: ['latin'],
    weight: '500'
});
export default function CareerMindset() {

    return (
        <>
            <div className={`${inter.className} tracking-wide  self-start mt-14 sm:mx-20 sm:px-20`}>
                <h1 className={`text-2xl mb-4  dark:text-stone-50`}>Developer Mindset</h1>
                <div>
                    <h2 className="text-lg mb-4 font-semibold text-gray-900 dark:text-white 
                                inline underline decoration-2 decoration-indigo-600/[.33] dark:decoration-indigo-400/80">
                        더 나은 개발 문화에 관심이 있습니다.
                    </h2>
                    <ul className="ml-4 list-disc list-inside text-sm sm:text-base font-normal text-gray-800 dark:text-gray-100">
                        <li className="mb-0.5">지속적으로 레거시를 줄이고 코드 품질의 개선을 위해 노력합니다.</li>
                        <li className="mb-0.5 ml-4">소나큐브 기준으로 Maintainability(유지보수성)의 Code Smell를 2.5k(23.11)에서 1.6K(23.05)로 개선했습니다.</li>
                        <li className="mb-0.5 ml-4 line-through text-gray-400">리팩토링은 조금씩, 최대한 영향없이 은밀하게 진행합니다.</li>
                        <li className="mb-0.5">MR Template을 함께 도입하여 더 나은 코드 리뷰 문화에 기여했습니다.</li>
                        <li className="mb-0.5 ml-4 italic text-gray-400">MR내용에는 단순히 구현한 기능에 대한 나열보다는, 고민과 선택의 이유를 작성하는 것을 좋아합니다.</li>
                        <li className="mb-0.5"><b>업무 생산성 증대</b>및 반복적인 업무와 문의를 줄이는데 관심이 있습니다.</li>
                        <li className="mb-0.5 ml-4">공통 파트라서 내부직원 문의가 매우 많아 이에 소요되는 공수를 줄이고 자동화할 수 있도록 노력했습니다.</li>
                        <li className="mb-0.5 ml-4">자주 인입되는 문의는 가이드를 작성하고, 자주 발생되는 휴먼 에러는 시스템에서 방지할 수 있도록 노력했습니다.</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-lg mb-4 font-semibold text-gray-900 dark:text-white 
                                            inline underline decoration-2 decoration-orange-600/[.33] dark:decoration-orange-400/80">
                        Best Practice, Bad Practice 에 관심이 있습니다.
                    </h2>
                    <ul className="ml-4 list-disc list-inside text-sm sm:text-base font-normal text-gray-800 dark:text-gray-100">
                        <li className="mb-0.5">Conference, 밋업, 세미나 등을 좋아합니다.</li>
                        <li className="mb-0.5 ml-4">
                            <EventDialog />
                            에도 자주 참여하고
                            <a href='https://github.com/IMHYEWON/tech-youtube-notes' target="_blank" rel="noopener noreferrer">
                                <Button
                                    className="rounded-md bg-amber-500 py-1 px-2 ml-2 mr-1 text-sm font-medium text-white focus:outline-none data-[hover]:bg-amber-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                > 영상
                                </Button>
                            </a>
                            으로도 보면서 다른 회사, 조직의 아키텍쳐와 Best Practice를 보는 것이 즐겁습니다.
                        </li>

                    </ul>
                </div>
                <div className="mt-8">
                    <h2 className="text-lg mb-4 font-semibold text-gray-900 dark:text-white 
                                                inline underline decoration-2 decoration-blue-600/[.33] dark:decoration-blue-400/80">
                        개발 아티클을 작성하고 공유하는 것을 좋아합니다.
                    </h2>
                    <ul className="ml-4 list-disc list-inside text-sm sm:text-base font-normal text-gray-800 dark:text-gray-100">

                    </ul>
                </div>
            </div>
            <div className={`${inter.className} tracking-wide  self-start mt-14 sm:mx-20 sm:px-20`}>
                <h1 className={`text-2xl mb-4  dark:text-stone-50`}>Personal Mindset</h1>
                <ul className="ml-4 list-disc list-inside text-sm sm:text-base font-normal text-gray-800 dark:text-gray-100">
                    <li className="mb-0.5">결과보다는 과정을 조금 더 중요하게 생각합니다. 실패 없이 얻은 성공은 내 것이 아니라고 여깁니다.</li>
                    <li className="mb-0.5">
                        <span>타고난 기질은 겁쟁이에 가깝지만, 그동안의 경험으로 </span>
                        <span className="inline underline decoration-2 decoration-rose-600/[.33] dark:decoration-rose-400/80">사실은 별 거 아닐수도 있다</span>
                        <span>라는 것을 알고 도전하려고 합니다.</span>
                    </li>
                    <li className="mb-0.5">모든 이에게 늘 친절하려고 노력합니다.</li>
                    <li className="mb-0.5">부족한 점이 많다는 것은 곧 잠재력과 가능성이 많다는 것</li>
                </ul>
            </div>
        </>
    )
}