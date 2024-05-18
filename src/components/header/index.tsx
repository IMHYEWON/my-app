import { useState } from 'react';
import { Pixelify_Sans } from "next/font/google";

import CatIcon from '../../../public/icons/cat.svg';
import FrogIcon from '../../../public/icons/frog.svg';
import TurtleIcon from '../../../public/icons/turtle.svg';
import MusicIcon from '../../../public/icons/music.svg';
import BalloonIcon from '../../../public/icons/balloon.svg';
import UfoIcon from '../../../public/icons/ufo.svg';

const icons = [CatIcon, FrogIcon, TurtleIcon, MusicIcon, BalloonIcon, UfoIcon];
const pixelify = Pixelify_Sans({ subsets: ["latin"] });

export default function MainHeader() {
  const [showIcon, setShowIcon] = useState(false);
  const [IconComponent, setIconComponent] = useState(() => icons[0]);
  const [rightPosition, setRightPosition] = useState<string>('-1rem');

  const handleMouseEnter = () => {
    const randomIndex = Math.floor(Math.random() * icons.length);
    const randomRight = `${Math.floor(Math.random() * 20) + 1}rem`;
    
    setIconComponent(() => icons[randomIndex]);
    setRightPosition(randomRight);
    setShowIcon(true);
    setTimeout(() => setShowIcon(false), 1000); // 1초 후에 아이콘 사라지기
  };

  return (
    <div className="relative">
      <h1
        className={`${pixelify.className} transition hover:scale-110 z-10 text-4xl animate-title font-display whitespace-nowrap bg-clip-text mb-8`}
        onMouseEnter={handleMouseEnter}
      >
        Welcome ! I am Hyewon
      </h1>
      {showIcon && (
          <span className="heart" style={{ top: '-2rem', right: rightPosition }}>
            <IconComponent width={32} height={32} /> {/* 랜덤 아이콘 사용 */}
          </span>
        )}
    </div>
  );
}
