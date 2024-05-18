import React from 'react';
import PropertyImage from '../assets/property.jpg'; // Adjust the path to your image

const BeforeFooter = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between text-white ">
      <div className="md:w-1/2 p-20 bg-blue-700 ">
        <h2 className="text-4xl font-bold mb-4">Subscribe Newsletter</h2>
        <p className="mb-4">Get started by choosing from one of our pre-built page templates to showcase your properties</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 mb-4 text-black outline-none rounded"
        />
        <button className="w-full bg-blue-800 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">
          Subscribe
        </button>
      </div>
      <div id='cover' className="md:w-1/2">

      </div>
    </div>
  );
};

export default BeforeFooter;
