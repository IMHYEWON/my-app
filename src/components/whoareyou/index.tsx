import { useState } from 'react';
import { CornerDownLeft } from 'lucide-react';
import MyDialog from '@/components/dialog';

export default function MessageInput() {
  const [inputValue, setInputValue] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setIsDialogOpen(true);

    try {
      const response = await fetch('/api/slack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();
      console.log('Response:', data);
      if (response.ok) {
        setInputValue('');
      } else {
        throw new Error(data.error || 'Something went wrong');
      }

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
    <div className="bg-black rounded-xl shadow-lg h-fit flex flex-row px-1 items-center w-full">
      <input
        type="text"
        placeholder="Who are you?"
        className="bg-transparent text-white placeholder:text-gray-400 ring-0 outline-none resize-none py-2.5 px-2 font-mono text-sm h-10 w-full transition-all duration-300"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className="text-white rounded-lg hover:bg-white/25 focus:bg-white/25 w-8 h-8 aspect-square flex items-center justify-center ring-0 outline-0"
        onClick={handleSubmit}
      >
        <CornerDownLeft size={16} className="-ml-px" />
      </button>
    </div>
    <MyDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />

    </>
  );
}
