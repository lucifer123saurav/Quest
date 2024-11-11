import React from 'react'
import Landing from '../components/Landing'
import { Onboarding } from '../components/Onboarding'
import { ServiceProviders } from '../components/ServiceProviders'
import FrequentlyQuestion from '../components/FrequentlyQuestion'
import Navbar from '../components/Navbar'
import { RMax } from '../components/RMax'
import Plans from '../components/Plans'



export const Home = () => {
  return (
    <>
        <Navbar/>
        <Landing/>
        <Onboarding/>
        <RMax/>
        <ServiceProviders/>
        <Plans/>
        <FrequentlyQuestion/>
    </> 
  )
}
