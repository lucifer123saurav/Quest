import React from 'react'
import { CustomGridComponent } from './CustomGridComponent';
import SportImage from '../logo/Sports.jpeg';
import HealthImage from '../logo/Health.jpeg';
import LearningImage from '../logo/Learning_Activites.jpeg';

export const ServiceProviders = () => {
    const heading = "Empowering Service Providers Across Industries";

    const paragraph = "Wheather you're in sports education, wellness, household services, or niche markets, our technology simplifies your businessoperations, making it easier for you to focus on what you do best."
    const features = [
       
        {
          image: SportImage,
          title: 'Sports',
          description: 'From fitness studios academies, Rmax empowers sports busineses',
        },

        {
            image: HealthImage,
            title: 'Healthcare & Wellness',
            description: 'From fitness studios academies, Rmax empowers sports busineses',
        },

        {
            image: LearningImage,
            title: 'Learning Activites',
            description: 'From fitness studios academies, Rmax empowers sports busineses',
        },
      
    ];
  return (
    <CustomGridComponent features={features} heading = {heading} paragraph = {paragraph} component ={"ServiceProviders"}/>
  )
}
