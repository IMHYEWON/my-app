import { useState } from 'react';
import { CornerDownLeft } from "lucide-react";
import { Pixelify_Sans } from "next/font/google";

const pixelify = Pixelify_Sans({ subsets: ["latin"] });

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (!inputValue.trim()) {
      alert('누구세용?');
      return;
    }

    try {
      const response = await fetch('/api/slack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('아하?!');
        setInputValue('');
      } else {
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(`Error: ${error.message}`);
      } else {
        alert('An unknown error occurred');
      }
    }
  };

  return (
    <main
      className={`py-[15vh] sm:py-[20vh] flex flex-col items-center justify-center ${pixelify.className}`}
    >
      <h1 className="transition hover:scale-110 z-10 text-4xl animate-title font-display whitespace-nowrap bg-clip-text mb-8">
        Welcome ! I am Hyewon
      </h1>
      <div className="max-w-md space-y-4 w-full animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
        <div className="bg-black rounded-xl shadow-lg h-fit flex flex-row px-1 items-center w-full"> 
        <input type="text" 
                placeholder="Who are you?" 
                value={inputValue}
                onChange={handleInputChange}
                className="bg-transparent text-white placeholder:text-gray-400 ring-0 outline-none resize-none py-2.5 px-2 font-mono text-sm h-10 w-full transition-all duration-300" />
          <button 
              onClick={handleSubmit}
              className="text-white rounded-lg hover:bg-white/25 focus:bg-white/25 w-8 h-8 aspect-square flex items-center justify-center ring-0 outline-0">
            <CornerDownLeft size={16} className="-ml-px"/>
          </button>
        </div>
      </div>
    </main>
  );
}
