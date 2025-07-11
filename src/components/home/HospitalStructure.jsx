import React from 'react';

const HospitalStructure = () => {
  return (
    <>
     
    <div className="container gap-4 mx-auto pb-10 py-5 px-10 lg:px-40">
      <div className="text-center mb-10">
        <h2 className="flex justify-start text-4xl text-gray-800 ">Hospital Structure</h2>
      </div>
      <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 items-top justify-between'>
      {/* Box 1 */}
      <div className="flex-1 bg-gray-200 rounded-md p-4 mx-2 text-center justify-center shadow-sm">
        <h3 className="font-bold text-xl text-gray-800 mb-2">NABH ACCREDITED HOSPITAL</h3>
      </div>

      {/* Box 2 */}
      <div className="flex-1 bg-pink-100 rounded-md p-4 mx-2 text-center shadow-sm flex items-center justify-center">
        <div>
        <h3 className="font-bold text-xl text-gray-800 mb-2">40</h3>
        <h3 className="font-bold text-xl text-gray-800 mb-2">Hospital Beds</h3>
        {/* <p className="text-gray-600 font-bold">Hospital Beds</p> */}
        </div>
      </div>   

      {/* Box 3 */}
      {/* <div className="flex-1 bg-red-100 rounded-md p-4 mx-2 text-center shadow-sm">
        <h3 className="font-bold text-2xl text-gray-800 mb-2">1</h3>
        <p className="text-gray-600 font-bold">OT</p>
      </div> */}
      <div className="flex-1 bg-red-100 rounded-md p-4 mx-2 text-center shadow-sm flex items-center justify-center">
        <div>
        <h3 className="font-bold text-xl text-gray-800 mb-2">1 OT</h3>
        <h3 className="font-bold text-xl text-gray-800 mb-2">6 ICU Beds</h3>
        {/* <p className="text-gray-600 font-bold">OT</p> */}
        </div>
      </div>

      {/* Box 4 */}
      <div className="flex-1 bg-pink-200 rounded-md p-4 mx-2 text-center shadow-sm flex items-center justify-center">
        <div>
        <h3 className="font-bold text-xl text-gray-800 mb-2">Private Room</h3>
        <h3 className="font-bold text-xl text-gray-800 mb-2">Super Dulex</h3>
        {/* <p className="text-gray-600 font-bold">ICU Beds</p> */}
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default HospitalStructure;
