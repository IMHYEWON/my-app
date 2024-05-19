import { Inter } from "next/font/google";
import { lotteProject, webcashProject, Period, Project} from "@/data/career";
import { Key } from "react";

const inter = Inter({
    subsets: ['latin'],
    weight: '500'
});

const interLight = Inter({
    subsets: ['latin'],
    weight: '400'
});


export default function Experience() {

    return (
        <>
            <div className={`${inter.className} tracking-wide self-start mt-14 sm:mx-20 sm:px-20`}>
                <h1 className={`text-2xl mb-4`}>Experience</h1>
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022.12 ~ </span>
                        <span className="inline text-sm font-normal text-teal-500"> 재직중</span>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">롯데 e커머스(롯데ON)</h3>
                        <span className="inline text-base text-gray-500 dark:text-white">SO개발팀</span>
                        <p className={`${interLight.className} mb-8 text-base font-normal text-gray-700 dark:text-gray-400`}>
                            MSA 기반의 이커머스 플랫폼을 개발하고 있습니다. Seller Office 및 Back Office 공통시스템을 개발하고 있습니다.
                            주로 Java, Spring, Mybatis, Kafka, Redis, MySQL, Gitlab, Grafana 등을 사용하고 있습니다.
                        </p>
                        <p className={`${inter.className} underline text-teal-500 decoration-teal-500 ml-4 mb-2 text-md`}>Projects</p>
                        <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-4">
                            {lotteProject && lotteProject.projects && lotteProject.projects.map((project:Project, index:number) => (
                            <li className="mb-6 ms-4" key={project.id}>
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{project.period.start} ~ </span>
                                <span className="inline text-sm font-normal text-gray-400 dark:text-gray-500">{project.period.end}</span>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                {
                                    project.description.map((desc:string, index:number) => (
                                        <p key={index} className={`${interLight.className} mb-1 text-base font-normal text-gray-700 dark:text-gray-400`}>
                                            {desc}
                                        </p>
                                    ))
                                }
                            </li>
                            ))}
                        </ol>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-40 dark:text-gray-500">2020.10 ~ 2022.05</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">웹케시</h3>
                        <span className="inline text-base text-gray-500 dark:text-white">rERP개발팀</span>
                        <p className={`${interLight.className} mb-8 text-base font-normal text-gray-700 dark:text-gray-400`}>
                            웹 ERP 서비스를 개발하고 유지운영했습니다. 주로 대학교 산학협력단에서 사용하는 ERP서비스를 담당하여 구매, 연구비 등의 업무 시스템을 개발했습니다.
                        </p>
                        <p className={`${inter.className} underline text-teal-500 decoration-teal-500 ml-4 mb-2 text-md`}>Projects</p>
                        <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-4">
                            {webcashProject && webcashProject.projects && webcashProject.projects.map((project:Project, index:number) => (
                            <li className="mb-6 ms-4" key={project.id}>
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{project.period.start} ~ </span>
                                <span className="inline text-sm font-normal text-gray-400 dark:text-gray-500">{project.period.end}</span>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                {
                                    project.description.map((desc:string, index:number) => (
                                        <p key={index} className={`${interLight.className} mb-1 text-base font-normal text-gray-700 dark:text-gray-400`}>
                                            {desc}
                                        </p>
                                    ))
                                }
                            </li>
                            ))}
                        </ol>
                    </li>
                </ol>
            </div>
        </>
    )
}