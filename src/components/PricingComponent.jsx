import React from 'react';

const PricingComponent = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 text-center">
      {/* Header Section */}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Flexible Plans, Transparent Pricing
      </h2>
      <p className="mt-3 text-lg text-gray-500">
        Find the Perfect Fit for You
      </p>
      <p className="text-sm font-medium text-red-500 mt-1">
        30-day free trial with money-back guarantee.
      </p>

      {/* Pricing Table */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800">Compare our plans</h3>
        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Features</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  <div>
                    Starter
                    <p className="text-xs text-gray-400 mt-1">$17/month, billed monthly</p>
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  <div>
                    Premium
                    <p className="text-xs text-gray-400 mt-1">$88/month, billed monthly</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                    <td className="px-6 py-4 text-gray-900 text-left font-semibold">Basic Management</td>
                    <td className="px-6 py-4 text-left text-gray-500"></td>
                    <td className="px-6 py-4 text-left text-gray-500"></td>
                </tr>
                <tr>
                    <td className="px-6 py-4 text-gray-900 text-left font-semibold">Users</td>
                    <td className="px-6 py-4 text-left text-gray-500">1</td>
                    <td className="px-6 py-4 text-left text-gray-500">15</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 text-gray-900 text-left font-semibold">Branches</td>
                    <td className="px-6 py-4 text-left text-gray-500">1</td>
                    <td className="px-6 py-4 text-left text-gray-500">10</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 text-gray-900 text-left font-semibold">Courses</td>
                    <td className="px-6 py-4 text-left text-gray-500">3</td>
                    <td className="px-6 py-4 text-left text-gray-500">15/branch</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 text-gray-900 text-left font-semibold">Max. Students Allowed</td>
                    <td className="px-6 py-4 text-left text-gray-500">25</td>
                    <td className="px-6 py-4 text-left text-gray-500">500</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 text-gray-900 text-left font-semibold">Communication</td>
                    <td className="px-6 py-4 text-left text-gray-500">No</td>
                    <td className="px-6 py-4 text-left text-gray-500">Yes</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 text-gray-900 text-left font-semibold">Bulk Updates</td>
                    <td className="px-6 py-4 text-left text-gray-500">No</td>
                    <td className="px-6 py-4 text-left text-gray-500">Yes</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 text-gray-900 text-left font-semibold">User Roles</td>
                    <td className="px-6 py-4 text-left text-gray-500">No</td>
                    <td className="px-6 py-4 text-left text-gray-500">Yes</td>
                </tr>
              <tr>
                <td className="px-6 py-4 text-left text-gray-500"></td>
                <td className="px-6 py-4 text-left text-gray-500">
                    <div className="text-left">
                        <button className=" bg-red-100 text-red-600 py-2 px-4 rounded-md text-sm font-semibold">
                            Get Started
                        </button>
                        <p className="text-xs text-gray-500 mt-1">No credit card required</p>
                    </div>
                </td>
                <td className="px-6 py-4 text-left text-gray-500">
                    <div className="text-left ">
                        <button className=" bg-red-100 text-red-600 py-2 px-4 rounded-md text-sm font-semibold">
                            Get Started
                        </button>
                        <p className="text-xs text-gray-500 mt-1">No credit card required</p>
                    </div>
                </td>



              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center ">
           


        </div>
    </div>
    </div>
  );
};

export default PricingComponent;


