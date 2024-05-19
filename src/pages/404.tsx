import { TextTypingEffectWithTexts } from '@/components/text/textTypingEffectWithTexts';
import { Nanum_Gothic_Coding } from 'next/font/google';
import React from 'react';

const nanumGothicCoding = Nanum_Gothic_Coding({
    subsets: ['latin'],
    weight: '400'
});


export default function Custom404() {
    return (

        <div className="flex items-center justify-center h-screen">
            <div className={`${nanumGothicCoding.className} text-center`}>
                <p className="text-6xl font-bold">🚧</p>
                <div className='flex flex-row items-center justify-start'>
                <p className={`text-left text-2xl p-1 text-stone-800`}>Work In Progress</p>
                <TextTypingEffectWithTexts/>
                </div>
                <p className='text-stone-600'>Thank you for visiting my place ☺️</p>
                
            </div>
        </div>
    )
  }
