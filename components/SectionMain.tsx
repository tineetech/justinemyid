/* eslint-disable */
import React from 'react';
import TargetCursor from './TargetCursor';

const SectionMain = ({ className = '', style = {}, children }: any) => {
  // Kelas default yang Anda inginkan
  const defaultClasses = "relative w-full md:h-[90%] h-[100%] pb-5 scroll-hide md:rounded-2xl bg-gray-800 overflow-auto";

  // Gabungkan kelas default dengan kelas tambahan dari props
  const combinedClasses = `${defaultClasses} ${className}`.trim();

  return (
    <section className={combinedClasses} style={style}>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      {children}
    </section>
  );
};

export default SectionMain;