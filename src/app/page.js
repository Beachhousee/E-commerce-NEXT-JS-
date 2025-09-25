import FeaturedProduct from '@/components/home/FeaturedProduct'
import HeroSection from '@/components/home/HeroSection'

import RecentlyAdded from '@/components/home/RecentlyAdded'
import React from 'react'

function Home() {
  return (
   <>
    <RecentlyAdded></RecentlyAdded>
   <HeroSection></HeroSection>
   <FeaturedProduct></FeaturedProduct>
  
   </>
  )
}

export default Home
