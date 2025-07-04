import React from 'react';
import Sidebar from "@/components/Sidebar";
import Squares from "@/components/Squares";


const LayoutMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full px-10 md:flex justify-center gap-7 items-center relative h-screen overflow-hidden bg-gray-900 text-gray-300 overflow-y-auto">
      <Squares
        speed={1}
        squareSize={20}
        direction='diagonal'
        borderColor='#1f2937'
        hoverFillColor='#374151'
      />
      <Sidebar />
      {children}
    </main>
  );
};

export default LayoutMain;