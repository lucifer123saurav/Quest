import React from 'react'
import Landing from '../components/Landing'
import { Onboarding } from '../components/Onboarding'
import { ServiceProviders } from '../components/ServiceProviders'
import { Plans } from '../components/Plans'
import { ManageBusiness } from '../components/ManageBusiness'
import FrequentlyQuestion from '../components/FrequentlyQuestion'
import Navbar from '../components/Navbar'
import { RMax } from '../components/RMax'



export const Home = () => {
  return (
    <>
        <Navbar/>
        <Landing/>
        <Onboarding/>
        <RMax/>
        <ServiceProviders/>
        <Plans/>
        <ManageBusiness/>
        <FrequentlyQuestion/>
    </> 
  )
}
