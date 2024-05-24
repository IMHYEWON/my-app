import { Mailbox, Github } from "lucide-react";
import Header from "@/components/header";
import Image from "next/image";
import { Noto_Sans_KR, Nanum_Gothic_Coding, Inter, Nanum_Gothic } from "next/font/google";
import { TextEncrypted } from "@/components/text/encryptedText";
import Link from "next/link";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { techStack } from "@/data/tech";
import { BasicSwitch } from "@/components/toggle/switch";
import { useState } from "react";
import Experience from "@/components/career/experience";
import Tooltip from "@/components/tooltip";
import { Project } from "../api/projects";

const notoSansKR_400 = Noto_Sans_KR({
    subsets: ['latin'],
    weight: '500'
});

const nanumGothicCoding = Nanum_Gothic_Coding({
    subsets: ['latin'],
    weight: '400'
});

const nanumGothic = Nanum_Gothic({
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
interface ProjectProps {
    projects: Project[];
}

export default function Career({ projects }: ProjectProps ) {

    const [isHobby, setIsHobby] = useState(false);

    const handleToggle = (value: boolean) => {
        setIsHobby(value);
    }

    const currentTechStack = isHobby ? hobbyTechStack : productionTechStack;


    return (
        <>
            <div className="relative min-h-screen absolute inset-0 
                            bg-white dark:bg-customBlack 
                            bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#424242_1px,transparent_1px)]
                            [background-size:16px_16px] ">
                <div className="">
                    <Header />
                    <section id="about" className="flex flex-col items-center justify-center mx-4 sm:mx-10">
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
                                <Tooltip key={'jap'} content={'배운지 50일 됐어요.'} direction={'bottom'}>
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
                    </section>
                    <section id="experience" className="flex flex-col items-center justify-start mx-10">
                        <Experience projects={projects} />
                    </section>
                    <section id="education" className="flex flex-col items-center justify-start mx-10">
                        <div className={`${inter.className} tracking-wide  self-start mt-14 sm:mx-20 sm:px-20`}>
                            <h1 className={`text-2xl mb-4  dark:text-stone-50`}>Education</h1>
                            <ol className="relative border-s border-gray-200 dark:border-stone-700">
                                <li className="mb-10 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-stone-900 dark:bg-stone-500"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-stone-400">2015.03 ~ 2021.02</time>
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">세종대학교 소프트웨어학과 졸업</h3>
                                </li>
                                <li className="mb-10 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-stone-900 dark:bg-stone-500"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-40 dark:text-stone-400">2011.03 ~ 2014.02</time>
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">구리 인창고등학교 졸업</h3>
                                </li>
                            </ol>
                        </div>
                    </section>
                </div>
            </div>
        </>

    )
}

export async function getServerSideProps() {
    console.log('getServerSideProps');
    console.log(`https://${process.env.VERCEL_URL}`);
    const url = process.env.VERCEL_URL?.startsWith('http') ? process.env.VERCEL_URL : 'https://my-8lg54u87h-hazels-projects-f079e5be.vercel.app';

    try {
        const res = await fetch(`${url}/api/projects`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const contentType = res.headers.get('content-type');
        if (!res.ok) {
            console.error('Failed to fetch projects:', res);
            return {
                props: {
                    projects: [],
                },
            };
        }

        if (!contentType || !contentType.includes('application/json')) {
            console.error('Received non-JSON response:', await res.text());
            return {
                props: {
                    projects: [],
                },
            };
        }

        const projects = await res.json();
        console.log(projects);

        return {
            props: {
                projects,
            },
        };
    } catch (error) {
        console.error('Error fetching projects:', error);
        return {
            props: {
                projects: [],
            },
        };
    }
}