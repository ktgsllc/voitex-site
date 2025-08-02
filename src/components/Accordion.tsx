'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type Props = {
  question: string;
  answer: string;
};

export default function Accordion({ question, answer }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 rounded-md border bg-white shadow-sm transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left"
      >
        <span className="font-semibold text-gray-800">{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      <div
        className={`overflow-hidden px-4 pb-4 text-gray-700 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </div>
  );
}
