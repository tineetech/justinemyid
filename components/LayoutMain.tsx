import React from 'react';
import Sidebar from "@/components/Sidebar";
import Squares from "@/components/Squares";

const LayoutMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full md:flex justify-center gap-7 items-center relative h-screen overflow-hidden bg-gray-900 text-gray-300 overflow-y-auto">
      <Squares
        speed={1}
        squareSize={20}
        direction='diagonal'
        borderColor='#1f2937'
        hoverFillColor='#374151'
      />
      <div className='px-2 md:px-10 gap-7 w-full overlay-hidden h-screen flex items-center'>
        <Sidebar />
        {children}
      </div>
    </main>
  );
};

export default LayoutMain;