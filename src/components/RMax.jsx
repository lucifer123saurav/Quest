import React from 'react';
import { AiOutlineCalendar, AiOutlineUser, AiOutlineStar } from 'react-icons/ai';
import { FaBullhorn, FaMapMarkerAlt } from 'react-icons/fa';
import CustomWebsiteImage from '../logo/CustomWebsite2.jpeg';
import BillingImage from '../logo/Billing2.jpg';
import { CustomGridComponent } from './CustomGridComponent';

export const RMax = () => {

    const heading = 'Why Rmax?';
    const paragraph = 'Rmax is designed to simplify and transform the way service businesses operate. From onboarding, scheduling, and billing to client management, payments, and growth, Rmax integrates everything in one easy-to-use platform connecting all the stakeholders.';
  

    const features = [
        {
          icon: <AiOutlineCalendar className="text-4xl text-red-500" />,
          title: 'Scheduling',
          description: 'Manage appointments, classes, and events, workshops with...',
        },
        {
          icon: <AiOutlineUser className="text-4xl text-red-500" />,
          title: 'Client Management & CRM',
          description: 'Keep track of customer data, preferences, and interactions to...',
        },
        {
          icon: <AiOutlineStar className="text-4xl text-red-500" />,
          title: 'AI Powered Insights',
          description: 'Know exactly what is happening in business and get actionable...',
        },
        {
          image: BillingImage,
          title: 'Billing & Payments',
          description: 'Streamline invoicing and payments with automated workflows, reducing...',
        },
        {
          icon: <FaBullhorn className="text-4xl text-red-500" />,
          title: 'Marketing & Engagement Tools',
          description: 'Boost client retention and grow your business with integrated...',
        },
        {
          image: CustomWebsiteImage,
          title: 'Custom Branded Website',
          description: 'Qest\'s Custom Branded Website Builder allows you to create a fully personalized...',
        },
        {
          icon: <FaMapMarkerAlt className="text-4xl text-red-500" />,
          title: 'Multi-Location Management',
          description: 'Manage multiple locations with ease, assigning roles and permissions...',
        },
    ];
  return (

    <CustomGridComponent  features = {features} heading = {heading} paragraph = {paragraph} />

  );
};
