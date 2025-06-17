import React from 'react';

const HospitalStructure = () => {
  return (
    <div className="container flex flex-col lg:flex-row  gap-2 mx-auto  sm:mb-20 px-4 sm:px-8 lg:px-30">
      {/* Box 1 */}
      <div className="flex-1 bg-gray-200 rounded-md p-4 mx-2 text-center justify-center shadow-sm">
        <h3 className="font-bold text-xl text-gray-800 mb-2">JCI & NABH ACCREDITED HOSPITAL</h3>
        <p className="text-gray-600">Blood Bank | Lab | Nursing Excellence</p>
      </div>

      {/* Box 2 */}
      <div className="flex-1 bg-pink-100 rounded-md p-4 mx-2 text-center shadow-sm">
        <h3 className="font-bold text-2xl text-gray-800 mb-2">375</h3>
        <p className="text-gray-600">Hospital Beds</p>
      </div>

      {/* Box 3 */}
      <div className="flex-1 bg-red-100 rounded-md p-4 mx-2 text-center shadow-sm">
        <h3 className="font-bold text-2xl text-gray-800 mb-2">15 OTs</h3>
        <p className="text-gray-600">& 194 ICU Beds</p>
      </div>

      {/* Box 4 */}
      <div className="flex-1 bg-pink-200 rounded-md p-4 mx-2 text-center shadow-sm">
        <h3 className="font-bold text-2xl text-gray-800 mb-2">Robotic</h3>
        <p className="text-gray-600">Surgeries</p>
      </div>
    </div>
  );
};

export default HospitalStructure;
