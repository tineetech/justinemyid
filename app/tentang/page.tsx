import LayoutMain from '@/components/LayoutMain'
import MagicBento from '@/components/MagicBento'
import SectionMain from '@/components/SectionMain'
import React from 'react'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang - Justine",
};

const page = () => {
  return (
    <LayoutMain>
    <SectionMain className='container px-5 py-5'>
        
        <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
        />
    </SectionMain>
    </LayoutMain>
  )
}

export default page