import LayoutMain from '@/components/LayoutMain'
import SectionMain from '@/components/SectionMain'
import React from 'react'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Komunitas - Justine",
};

const Page = () => {
  return (
    <LayoutMain>
      <SectionMain className='p-5'>
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">Komunitas</h2>
          <p className="text-gray-400">
            Segera Hadir..
          </p>
          <hr className="mt-4 border-gray-700" />
        </div>

      </SectionMain>
    </LayoutMain>
  )
}

export default Page