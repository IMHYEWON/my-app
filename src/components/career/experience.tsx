import { Description, DescriptionFlag, Project } from "@/pages/api/projects";
import { formatDateToYearMonth } from "@/utils/dateutils";
import { isValidString } from "@/utils/stringutils";
import { Inter } from "next/font/google";
// import { lotteProject, webcashProject, Period, Project} from "@/data/career";

const inter = Inter({
    subsets: ['latin'],
    weight: '500'
});

const interLight = Inter({
    subsets: ['latin'],
    weight: '400'
});

type ProjectProps = {
    projects: Project[];
}

const classMap: Record<DescriptionFlag, string | null> = {
    'h1': `mb-2 text-sm sm:text-base font-semibold text-gray-800 dark:text-stone-100`,
    'h2': `mt-4 text-base sm:text-base font-semibold text-gray-800 dark:text-stone-200`,
    'li': `mb-1 text-sm sm:text-sm font-normal text-gray-700 dark:text-stone-300`,
    'default': `${interLight.className} mb-1 text-sm sm:text-base font-normal text-gray-700 dark:text-stone-300`,
    'OTHER': `${interLight.className} mb-1 text-sm sm:text-base font-normal text-gray-700 dark:text-stone-100`, // 기타 다른 flag 처리
};

export default function Experience({ projects }: ProjectProps) {
    const lotteProject = projects && projects.filter((project) => project.project_name === '롯데e커머스');
    const webcashProject = projects && projects.filter((project) => project.project_name === '웹케시');

    console.log('lotteProject:', lotteProject);
    return (
        <>
            <div className={`${inter.className} tracking-wide self-start mt-14 sm:mx-20 sm:px-20`}>
                <h1 className={`text-2xl mb-4 dark:text-stone-50 `}>Work Experience</h1>
                <ol className="relative border-s border-gray-200 dark:border-stone-500">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-teal-400 rounded-full mt-1.5 -start-1.5 border border-teal-400 dark:border-teal-900 dark:bg-teal-300"></div>
                        <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-stone-400">2022.12 ~ </span>
                        <span className="inline text-sm font-normal text-teal-500"> 재직중</span>
                        <div className="flex items-center">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">롯데 e커머스(롯데ON)</h3>
                            <h3 className="ml-4 text-base text-gray-600 dark:text-white mb-2">롯데쇼핑 통합 e커머스 플랫폼</h3>
                        </div>

                        <span className="inline text-base text-gray-500 dark:text-white">SO개발팀, 정직원</span>

                        <p className={`${interLight.className} mt-4 mb-2 text-sm sm:text-base font-normal text-gray-800 dark: dark:text-stone-100`}>
                            <b>MSA 기반의 이커머스 플랫폼에서 Seller Office 및 Back Office 공통시스템을 개발</b>하고 있습니다.
                            주로 Java, Spring, Mybatis, Kafka, Redis, MySQL, Gitlab, Grafana 등을 사용하고 있습니다.
                        </p>
                        <p className={`${interLight.className} mb-2 text-sm sm:text-base font-normal text-gray-800 dark: dark:text-stone-100`}>
                            <b>MSA 아키텍쳐에서의 기준정보의 관리, 개발 표준 프로세스 수립</b>을 통해 서비스간의 혼란을 최소화하고, 개발 조직이 개인정보, 사용자 권한 등의 처리를 신경쓰지 않고 비즈니스에만 집중 할 수 있도록 하는 환경을 구성하는 것이 제 파트의 미션입니다.
                        </p>
                        <p className={`${interLight.className} mb-2 text-sm sm:text-base font-normal text-gray-800 dark: dark:text-stone-100`}>
                            완성도 높은 프로덕트와 클린한 아키텍쳐를 빌딩하기 위해 <b>기획단계부터 적극적인 협업과 커뮤니케이션을</b> 통해 시스템을 설계하고 개발하고 있습니다.
                        </p>
                        <p className={`${interLight.className} mb-8 text-sm sm:text-base font-normal text-gray-800 dark: dark:text-stone-100`}>
                            적극적인 개발 아티클 작성과 코드리뷰를 통해 <b>함께 성장하는 문화</b>를 만들고 있습니다.
                        </p>

                        <p className={`${inter.className} underline text-teal-500 decoration-teal-500 ml-4 mb-2 text-md`}>Projects</p>
                        <ol className="relative border-s border-gray-200 dark:border-stone-500 ml-2 sm:ml-4 ">
                            {lotteProject && lotteProject.map((project: Project, index: number) => (
                                <li className={`${interLight.className} mb-6 ms-4`} key={project.id}>
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white  dark:border-stone-900 dark:bg-stone-500"></div>
                                    <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-stone-400">{formatDateToYearMonth(project.period_start)} ~ </span>
                                    <span className={isValidString(project.period_end) ? "inline text-sm font-normal text-gray-400 dark:text-stone-400" : "inline text-sm text-teal-500 dark:text-teal-400"}>
                                        {isValidString(project.period_end) ? formatDateToYearMonth(project.period_end) : '진행중'}
                                    </span>
                                    <h3 className="text-base sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                    {project.descriptions.map((desc) => {
                                        const className = classMap[desc.flag];
                                        // 'DEFAULT'인 경우 렌더링하지 않음
                                        if (!className) {
                                            return null;
                                        }

                                        if (desc.flag === 'li') {
                                            return (
                                                <div key={desc.id} className="flex flex-row items-start">
                                                    <svg className="mr-2 flex-shrink-0 w-3 h-3 text-teal-500 dark:text-teal-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                                    </svg>
                                                    <p key={desc.id} className={className}>
                                                        {'' + desc.description}
                                                    </p>
                                                </div>

                                            );
                                        }

                                        return (
                                            <p key={desc.id} className={className}>
                                                {desc.description}
                                            </p>
                                        );
                                    })}
                                </li>
                            ))}
                        </ol>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-stone-900 dark:bg-stone-500"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-40 dark:text-stone-400">2020.10 ~ 2022.05</time>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">웹케시</h3>
                        <div className="flex items-center">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">웹케시</h3>
                            <h3 className="ml-4 text-base text-gray-600 dark:text-white mb-2">연구관리, 연구성과, 지식재산권, 회계, 인사급여 등 산학협력단 업무관리 서비스</h3>
                        </div>
                        <span className="inline text-base text-gray-500 dark:text-white">rERP개발팀</span>
                        <p className={`${interLight.className} mb-3 text-sm sm:text-base font-normal text-gray-700 dark: dark:text-stone-100`}>
                            <b>Saas, On-Premise 형태의 웹 ERP 서비스를 개발하고 유지 운영</b>했습니다. 주로 대학교 산학협력단을 위한 ERP 서비스를 담당했고, 결재, 과제, 연구원 계약 등의 서비스를 개발했습니다.
                        </p>
                        <p className={`${interLight.className} mb-8 text-sm sm:text-base font-normal text-gray-700 dark: dark:text-stone-100`}>
                            외부 연구비 집행 관리 시스템과 연계할 수 있는 인터페이스, 배치를 개선 및 관리해 시스템의 안정성에 기여했습니다.
                        </p>
                        <p className={`${inter.className} underline text-teal-500 decoration-teal-500 ml-4 mb-2 text-md`}>Projects</p>
                        <ol className="relative border-s border-gray-200 dark:border-stone-500 ml-2 sm:ml-4">
                            {webcashProject && webcashProject.map((project: Project, index: number) => (
                                <li className="mb-6 ms-4" key={project.id}>
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-stone-900 dark:bg-stone-500"></div>
                                    <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-stone-400">{formatDateToYearMonth(project.period_start)} ~ </span>
                                    <span className={isValidString(project.period_end) ? "inline text-sm font-normal text-gray-400 dark:text-stone-400" : "inline text-sm text-teal-500 dark:text-teal-400"}>
                                        {isValidString(project.period_end) ? formatDateToYearMonth(project.period_end) : '진행중'}
                                    </span>
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                    {project.descriptions.map((desc) => {
                                        const className = classMap[desc.flag];
                                        if (!className) {
                                            return null;
                                        }

                                        if (desc.flag === 'li') {
                                            return (
                                                <div key={desc.id} className="flex flex-row items-start">
                                                    <svg className="mr-2 flex-shrink-0 w-3 h-3 text-teal-500 dark:text-teal-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                                    </svg>
                                                    <p key={desc.id} className={className}>
                                                        {'' + desc.description}
                                                    </p>
                                                </div>

                                            );
                                        }

                                        return (
                                            <p key={desc.id} className={className}>
                                                {desc.description}
                                            </p>
                                        );
                                    })}
                                </li>
                            ))}
                        </ol>
                    </li>
                </ol>
            </div>
        </>
    )
}