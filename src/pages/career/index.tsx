import { Mailbox, Github } from "lucide-react";
import Header from "@/components/header";
import Image from "next/image";
import { Noto_Sans_KR, Nanum_Gothic_Coding, Inter, Nanum_Gothic } from "next/font/google";
import { TextEncrypted } from "@/components/text/encryptedText";
import Link from "next/link";
import { Button, Tab, TabGroup, TabList } from '@headlessui/react';
import { techStack } from "@/data/tech";
import { BasicSwitch } from "@/components/toggle/switch";
import { useState } from "react";
import Experience from "@/components/career/experience";
import Tooltip from "@/components/tooltip";
import { Project } from "../api/projects";
import { PrismaClient } from "@prisma/client";
import SiteHead from "@/components/meta/sitehead";
import { Example } from "@/components/dialog";

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
            <SiteHead title='Career' description='See my Career and Experience as a developer' image='' url=''/>
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
                    </section>
                    <section id="developer" className="flex flex-col items-center justify-start mx-10">
                        <div className={`${inter.className} tracking-wide  self-start mt-14 sm:mx-20 sm:px-20`}>
                            <h1 className={`text-2xl mb-4  dark:text-stone-50`}>Skills</h1>
                            <ul className="ml-4 list-disc list-inside text-sm sm:text-base font-normal text-gray-800 dark:text-gray-100">
                                <li className="mb-0.5">Java, Spring Boot기반으로 <b>RESTful API</b> 가이드에 맞게 API를 설계 및 개발하고 있습니다.</li>
                                <li className="mb-0.5"> RDMBS (MySQL, PostgreSQL)을 사용하며 <b>쿼리 최적화 및 구조</b>에 관심이 있습니다.</li>
                                <li className="mb-0.5"><b>CI/CD 자동화 환경</b>에서 협업 및 개발하며 로컬에서는 <b>Docker Compose</b>로 필요한 리소스 환경을 만들어 개발합니다.</li>
                                <li className="mb-0.5"><b>Grafana, Whatap, DataDog, Elastic Search, kibana, 슬랙 알람</b> 등을 통해 시스템을 모니터링 합니다. </li>
                                <li className="mb-0.5 ml-4">모니터링을 통해 이슈와 SLOW 쿼리에 대한 주의를 기울이고 이를 개선하려고 노력 합니다.</li>
                                <li className="mb-0.5">기본적인 Git 전략에 대해 이해하고 적절하게 사용할 수 있습니다.</li>
                            </ul>
                        </div>
                    </section>
                    <section id="mindset" className="flex flex-col items-center justify-start mx-10">
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
                                        <Example />
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
                    </section>
                    <section id="developer" className="flex flex-col items-center justify-start mx-10">
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
    console.log('process.env.API_FEATURE_FLA : ', process.env.API_FEATURE_FLAG);

    if (process.env.API_FEATURE_FLAG === 'INTERNAL') {
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
    } else {
        const prisma = new PrismaClient();
        try {
            const projects = await prisma.project.findMany({
                include: {
                    descriptions: true,
                },
                orderBy: {
                    id: 'asc',
                },
            });
            // Date 객체를 문자열로 변환
            const serializedProjects = projects.map(project => ({
                ...project,
                period_start: project.period_start ? project.period_start.toISOString() : null,
                period_end: project.period_end ? project.period_end.toISOString() : null,
            }));
    
            return {
                props: {
                    projects: serializedProjects,
                },
            };
        } catch (error) {
            console.error(error);
            return {
                props: {
                    projects: [],
                },
            };
        } finally {
            await prisma.$disconnect();
        }
    }


}