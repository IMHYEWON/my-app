import { Mailbox, Github } from "lucide-react";
import Header from "@/components/header";
import Image from "next/image";
import { Noto_Sans_KR, Nanum_Gothic_Coding, Inter } from "next/font/google";
import { TextEncrypted } from "@/components/text/encryptedText";
import Link from "next/link";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { tectStack } from "./teck";
import {BasicSwitch, SlidingTabBar} from "@/components/toggle/switch";
import { useState } from "react";

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

const productionTechStack = tectStack[0];
const developmentTechStack = tectStack[1];

export default function Career() {
    const [isSwitchChecked, setIsSwitchChecked] = useState(false);
    const [stackLevel, setStackLevel] = useState('production');

    return (
        <>
            <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                <Header />
                <section id="about" className="flex flex-col items-center justify-center mx-10">
                    <div className="py-[15vh] sm:py-[20vh] flex flex-col items-center justify-center">
                        <Image alt="profile" src={"/images/circleprofile.png"} width={180} height={180}></Image>
                        <h3 className="underline decoration-2 decoration-lime-500/[.33] text-xl sm:text-2xl m-4">
                            <TextEncrypted text="Software engineer" interval={50} />
                        </h3>
                        <h1 className={`${notoSansKR_400.className} text-2xl sm:text-4xl mb-2 font-bold`}>장혜원, Hyewon Jang</h1>
                        <p className={`${nanumGothicCoding.className} text-l mb-2 text-stone-600`}>안녕하세요 Hello Bonjour</p>
                        <div className={`${nanumGothicCoding.className}`} >
                            <div className="flex flex-row items-center mt-1">
                                <Mailbox size={30} className="rounded-full p-1 hover:bg-gray-100 transition"/>
                                <p className="text-sm">hyewon1118@gmail.com</p>
                            </div>
                            <div className="flex flex-row items-center ">
                                <Github size={30} className="rounded-full p-1 hover:bg-gray-100 transition"/>
                                <Link href="https://github.com/IMHYEWON">
                                <p className="text-sm">github.com/IMHYEWON</p>
                                </Link>
                            </div>
                        </div>
                        <div className={`${nanumGothicCoding.className} text-sm text-gray-800 mt-6`}>
                            <p> 저는 소프트웨어 개발자로서 다양한 경험을 쌓아왔습니다.</p>
                            <p >안녕하세요. 저는 소프트웨어 엔지니어 장혜원입니다.</p>
                            <p>다양한 경험을 통해 저는 빠르게 배우고 적응하는 능력을 갖추었습니다.</p>
                            <p >저는 새로운 기술을 배우고 적용하는 것을 즐기며, 끊임없이 도전하는 것을 좋아합니다.</p>
                            <p >저는 새로운 기술을 배우고 적용하는 것을 즐기며, 끊임없이 도전하는 것을 좋아합니다.</p>
                        </div>
                        <div className="self-start mt-10 sm:mx-20 sm:px-20">
                            <div className="flex justify-between items-center">
                                <p className={`${inter.className} text-2xl mb-2 text-bold text-black`}>Tech Stack</p>
                                <BasicSwitch />
                            </div>
                            <TabGroup>
                                <TabList className="">
                                    {productionTechStack.skills.map((skill, index) => (
                                        skill && skill.items.map((item, index) => (
                                            <Tab key={index} className="text-sm mr-1 mb-1 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">{item}</Tab>
                                        ))
                                        ))
                                    } 
      
                                </TabList>    
                            </TabGroup>
                        </div>
                    </div>
     
                </section>
                <section id="education" className="flex flex-col items-center justify-center">
                    <div className="py-[15vh] sm:py-[20vh] flex flex-col items-center justify-center">
                        <h1 className={`${notoSansKR_400.className} text-4xl mb-4 font-bold`}>Education</h1>
                        <div className={`${nanumGothicCoding.className} text-l mb-4 text-stone-600`}>
                            <p>2015.03 ~ 2021.10</p>
                            <p>세종대학교 소프트웨어과 졸업</p>
                        </div>
                    </div>
                    </section>
                <section id="experience" className="flex flex-col items-center justify-center">
                    <div className="py-[15vh] sm:py-[20vh] flex flex-col items-center justify-center">
                        <h1 className={`${notoSansKR_400.className} text-4xl mb-4 font-bold`}>Experience</h1>
                        <div className={`${nanumGothicCoding.className} text-l mb-4 text-stone-600`}>
                            <p>2020.03 ~ 2020.12</p>
                            <p>롯데 e커머스 </p>
                        </div>
                        <div className={`${nanumGothicCoding.className} text-l mb-4 text-stone-600`}>
                            <p>2020.03 ~ 2020.12</p>
                            <p>웹케시 </p>
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
}
