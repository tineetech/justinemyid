/* eslint-disable */
import React from 'react';

const SectionMain = ({ className = '', style = {}, children }: any) => {
  // Kelas default yang Anda inginkan
  const defaultClasses = "relative w-full h-[90%] pb-5 scroll-hide rounded-2xl bg-gray-800 container overflow-auto";

  // Gabungkan kelas default dengan kelas tambahan dari props
  const combinedClasses = `${defaultClasses} ${className}`.trim();

  return (
    <section className={combinedClasses} style={style}>
      {children}
    </section>
  );
};

export default SectionMain;