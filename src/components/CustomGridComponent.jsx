import React from 'react';

export const CustomGridComponent = ({ features = [], heading, paragraph }) => {
  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      {heading && (
        <h2 className="text-2xl sm:text-3xl lg:w-[400px] font-bold text-gray-800 text-center mb-4">
          {heading}
        </h2>
      )}

      {paragraph && (
        <p className="text-center text-gray-600 max-w-2xl mb-8 sm:mb-12">
          {paragraph}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-lg transition-shadow 
              ${index === 3 ? 'lg:col-span-1 lg:row-span-2' : ''} 
              ${index === 5 ? 'lg:col-span-1 lg:row-span-2' : ''}`}
          >
            {feature.icon && feature.icon}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <a href="#" className="text-red-500 font-medium hover:underline mb-2">
              View details &rarr;
            </a>
            {feature.image && (
              <img
                src={feature.image}
                alt={`${feature.title} illustration`}
                className="mt-4 w-full object-cover rounded-md"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
