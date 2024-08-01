import Image from "next/image";
import { useTypingEffect } from "@/components/hooks/useTypingEffect"; // 경로를 실제 경로로 변경하세요
import Link from "next/link";

export default function Iam() {
    const text = "Hi, What brings you here?\n Anyway, I'm Hyewon!";
    const typedText = useTypingEffect(text, 50, true);

    return (
        <>
            <div className="absolute inset-0 h-full w-full bg-black">
                <div className="py-20 flex items-center justify-center">
                    <div className="relative">
                        <Image className="mt-30" src="/images/KK.png" alt="I am" width={960} height={540} />
                        <div className="absolute flex flex-col items-center bottom-6 sm:bottom-16 left-1/2 transform -translate-x-1/2">
                            <div className="text-left break-words bg-transparent p-1 sm:p-5 rounded-xl font-base sm:font-bold max-w-2xl sm:max-w-lg text-gray-200 text-xs sm:text-xl md:text-2xl">
                                {typedText}
                            </div>
                            <div className="relative top-3 sm:top-9">
                                <Link href="../keyword">
                                    <div className="triangle"></div>
                                </Link>
                                {/* <Iam /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
