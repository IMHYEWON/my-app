import { Noto_Sans_KR, Nanum_Gothic_Coding, Inter, Nanum_Gothic } from "next/font/google";
import Image from "next/image";
import { Tab, TabGroup, TabList } from '@headlessui/react';
import { BasicSwitch } from "@/components/toggle/switch";
import { TextEncrypted } from "@/components/text/encryptedText";
import { useState } from "react";
import Tooltip from "@/components/tooltip";
import { calculateDay } from "@/utils/dateutils";
import { techStack } from "@/data/tech";
import { Mailbox, Github } from "lucide-react";
import Link from "next/link";

const notoSansKR_400 = Noto_Sans_KR({
    subsets: ['latin'],
    weight: '500'
});

const nanumGothicCoding = Nanum_Gothic_Coding({
    subsets: ['latin'],
    weight: '400'
});

const inter = Inter({
    subsets: ['latin'],
    weight: '500'
});

const interLight = Inter({
    subsets: ['latin'],
    weight: '400'
});


const productionTechStack = techStack[0];
const hobbyTechStack = techStack[1];
export default function About() {

    const [isHobby, setIsHobby] = useState(false);

    const handleToggle = (value: boolean) => {
        setIsHobby(value);
    }

    const currentTechStack = isHobby ? hobbyTechStack : productionTechStack;


    return (
        <>
            <div className="pt-[10vh] sm:pt-[20vh] flex flex-col items-center justify-center">
                <Image alt="profile" src={"/images/circleprofile.png"} width={180} height={180}></Image>
                <h3 className="underline decoration-2 decoration-lime-500/[.33] dark:decoration-lime-700 text-xl sm:text-2xl m-4 dark:text-slate-50">
                    <TextEncrypted text="Software engineer" interval={50} />
                </h3>
                <h1 className={`${notoSansKR_400.className} text-2xl sm:text-4xl mb-2 font-bold
                                            dark:text-slate-50`}>장혜원, Hyewon Jang</h1>
                <div className="flex flex-row">
                    <p className={`${nanumGothicCoding.className} text-md mb-2 mr-2 hover:font-bold text-stone-600 dark:text-slate-100`}>안녕하세요</p>
                    <Tooltip key={'eng'} content={'기본 회화정도 할 수 있어요.'} direction={'bottom'}>
                        <p className={`${nanumGothicCoding.className} text-l mb-2 mr-2 hover:font-bold text-stone-600 dark:text-slate-100`}>Hello</p>
                    </Tooltip>
                    <Tooltip key={'jap'} content={`배운 지 ` + calculateDay() + `일 됐어요`} direction={'bottom'}>
                        <p className={`${nanumGothicCoding.className} text-l mb-2 mr-2 hover:font-bold text-stone-600 dark:text-slate-100`}>こんにちは</p>
                    </Tooltip>
                    <Tooltip key={'fre'} content={'알파벳을 읽을 수 있어요.'} direction={'bottom'}>
                        <p className={`${nanumGothicCoding.className} text-l mb-2 mr-2 hover:font-bold text-stone-600 dark:text-slate-100`}>Bonjour</p>
                    </Tooltip>
                </div>
                <div className={`${nanumGothicCoding.className}`} >
                    <div className="flex flex-row items-center mt-1">
                        <Mailbox size={30} className="rounded-full p-1 dark:hover:bg-stone-200 hover:bg-gray-100 transition" />
                        <p className="text-sm ml-2 dark:text-slate-50">hyewon1118@gmail.com</p>
                    </div>
                    <div className="flex flex-row items-center ">
                        <Github size={30} className="rounded-full p-1 dark:hover:bg-stone-200 hover:bg-gray-100 transition" />
                        <Link href="https://github.com/IMHYEWON">
                            <p className="text-sm ml-2 dark:text-slate-50">github.com/IMHYEWON</p>
                        </Link>
                    </div>
                </div>
                <div className={`${inter.className} tracking-wide text-sm sm:text-base text-stone-900 dark:text-stone-100 mt-6 mx-5 sm:mx-40 md:mx-52`}>
                    <span className="inline underline decoration-2 decoration-blue-600/[.33] dark:decoration-blue-400 font-bold">사람을 좋아하는 개발자</span>
                    <span className="font-medium">입니다. 조직의 구성원과 함께 커뮤니케이션하는 것이 즐겁습니다. 나와는 다른 의견에는 흥미로움을 느끼며 같은 의견에는 짜릿함을 느낍니다. </span>
                </div>
                <div className={`${inter.className} tracking-wide text-sm sm:text-base text-stone-900 dark:text-stone-100 mt-2 mx-5 sm:mx-40 md:mx-52`}>
                    <span className="font-medium">내가 속한 조직의 </span>
                    <span className="inline underline decoration-2 decoration-rose-600/[.33] dark:decoration-rose-400 font-bold">Mission</span>
                    <span className="font-medium">에 큰 관심을 가지고 있습니다. 동료들과 함께 미션의식을 가지고 같은 목표를 달성하기 위해 노력합니다. </span>
                    <span className="inline underline decoration-2 decoration-rose-600/[.33] dark:decoration-rose-400 font-bold">내 성장은 곧 팀의 성장, 팀의 성장은 곧 내 성장</span>
                    <span className="font-medium">내 성장은 곧 팀의 성장, 팀의 성장은 곧 내 성장이라는 것을 믿습니다. </span>

                </div>
                <div className={`${inter.className} tracking-wide text-sm sm:text-base text-stone-800 dark:text-stone-100 mt-2 mx-5 sm:mx-40 md:mx-52`}>
                    <span className="inline underline decoration-2 decoration-orange-600/[.33] dark:decoration-orange-400 font-bold">합리적</span>
                    <span className="font-medium">입니다. 조직이 가지고 있는 리소스, 마주친 문제, 현재 조직의 문화를 고려해 최적의 의사결정을 만드려고 노력합니다.
                        조직의 구성원 다수가 불편함을 느끼지 않는 한에서 새로운 의견과 기술을 도입하려고 노력합니다. 간혹 어떤이는 불편해하기도 하지만, 제가 가진 실천력과 성과로서 마음을 열게하는데는 자신 있습니다. </span>
                </div>
                <div className={`${inter.className} tracking-wide text-sm sm:text-base text-stone-800 dark:text-stone-100 mt-2 mx-5 sm:mx-40 md:mx-52`}>
                    <span className="inline underline decoration-2 decoration-teal-600/[.33] dark:decoration-teal-400 font-bold">소심한 관종</span>
                    <span className="font-medium">입니다. 조직이 당면한 문제나 불편함을 해결한 경우 Confluent 혹은 Slack으로 해결과정을 공유하는 것을 좋아합니다. (늘어가는 이모지 수와 좋아요 수를 보고 행복함을 느낍니다.)</span>
                </div>
                <div className="self-start pt-20 mt-15 sm:mx-20 sm:px-20">
                    <div className="flex justify-between items-center">
                        <p className={`${inter.className} text-2xl text-bold text-black dark:text-stone-50`}>Tech Stack</p>
                        <BasicSwitch onToggle={handleToggle} />
                    </div>
                    <div className={`${interLight.className} ml-1 text-stone-600 dark:text-stone-100 mb-4`}>{currentTechStack.name} Level</div>
                    <TabGroup>
                        <TabList className="">
                            {currentTechStack.skills.map((skill, index) => (
                                skill && skill.items.map((item, index) => (
                                    <Tab key={index} className="text-sm mr-1 mb-1 px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">{item}</Tab>
                                ))
                            ))
                            }
                        </TabList>
                    </TabGroup>
                </div>
            </div>
        </>
    );

}