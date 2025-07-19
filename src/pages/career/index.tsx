import Header from "@/components/header";
import { Inter, Nanum_Gothic_Coding } from "next/font/google";
import Experience from "@/components/career/experience";
import { Project } from "../api/projects";
import { PrismaClient } from "@prisma/client";
import SiteHead from "@/components/meta/sitehead";
import CareerMindset from "./mindset";
import About from "./about";
import { Provider, LikeButton } from "@lyket/react";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
    subsets: ['latin'],
    weight: '500'
});


const nanumGothicCoding = Nanum_Gothic_Coding({
    subsets: ['latin'],
    weight: '400'
});

interface ProjectProps {
    projects: Project[];
}

export default function Career({ projects }: ProjectProps) {

    const GA_ID = process.env.GAID || '';
    const sendLikeMessage = async function (userLiked:boolean) {

        if (!userLiked) {
            return;
        }

        // 좋아요를 누른 경우, 알러트/컨펌으로 고마움 표시
        alert('Thank you for liking! 😊');

        const likeMessage = '누군가 좋아요를 눌렀어!';
        try {
            const response = await fetch('/api/slack', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: likeMessage }),
            });

            const data = await response.json();

        } catch (error) {
            if (error instanceof Error) {
                console.log(`Error: ${error.message}`);
            } else {
                console.log('An unknown error occurred');
            }
        }
    };

    return (
        <>
            <SiteHead title='Career' description='See my Career and Experience as a developer' image='' url='' />
            <div className="relative min-h-screen absolute inset-0 
                            bg-white dark:bg-customBlack 
                            bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#424242_1px,transparent_1px)]
                            [background-size:16px_16px] ">
                <div className="">
                    <Header />
                    <GoogleAnalytics gaId={GA_ID} />
                    <section id="about" className="flex flex-col items-center justify-center mx-4 sm:mx-10">
                        <About />
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
                        <CareerMindset />
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
                    <section id="heart" className="flex flex-col items-center mx-10">
                        <div className={`${nanumGothicCoding.className} mt-10 mb-40 flex flex-col items-center justify-center`}>
                            <p className="text-sm mb-4  dark:text-stone-50">이 좋아요를 누르시면 아무 일도 생기지 않지만 그저 제 기분이 조금 좋아집니다.</p>
                            <Provider apiKey="pt_34a1e35f9003410a77964242732dfa" >
                                <LikeButton
                                    namespace="testing-react"
                                    id="everybody-like-now"
                                    component={LikeButton.templates.Twitter}
                                    onPress={(e) => sendLikeMessage(e.attributes.userHasLiked)}
                                />
                            </Provider>
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
                    order: 'asc',
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