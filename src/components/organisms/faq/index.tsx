"use client";

import { useState } from 'react';
import { FAQ } from '@/constants/faq/index';
import { Button } from '@/components/atoms/button';

export const FAQC = () => {
  const [openID, setOpenID] = useState<number>(1);

  const handleClick = (id: number) => {
    setOpenID(openID === id ? id : id);
  };

  return (
    <div className="mx-auto mt-10 w-[85%] text-white">
      {FAQ.map((item) => (
        <div key={item.id} className="border-b border-gray-200">
          <Button variant='none'
            className={`w-full  cursor-pointer p-4 text-left outline-none transition duration-400`}
            onClick={() => handleClick(item.id)}
          >
            <div className="flex justify-between w-full items-center space-x-2">
              <span>{item.Q}</span>
              <span>{openID === item.id ? '-' : '+'}</span>
            </div>
          </Button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${openID === item.id ? 'max-h-[500px] opacity-100 text-gray-300' : 'max-h-0 opacity-0'}`}
          >
            <div className="p-4 rounded-b-lg">
              {item.A}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQC;
