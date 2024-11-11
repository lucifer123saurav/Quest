import React from 'react'
import FrequentlyQuestion from '../components/FrequentlyQuestion'
import Navbar from '../components/Navbar'
import PricingComponent from '../components/PricingComponent';

export const Pricing = () => {
    const iSSearchbar = false;
  return (
    <>
    
    <Navbar iSSearchbar={iSSearchbar}/>
    <PricingComponent/>
    <FrequentlyQuestion/>
    </>
  )
}
