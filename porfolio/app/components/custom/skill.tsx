import React from 'react'
import { CiSquareCheck } from "react-icons/ci";
const Skill = () => {
  return (
    <div id='skills'>
      <section className="text-gray-600 body-font -mt-20">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-6xl mb-10 font-medium title-font text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-16">
   {/* <skills /> */}
      <div className="p-4 md:w-1/3 ">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col md:h-2 md:max-w-full">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <CiSquareCheck className="text-xl font-bold" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute h-1 bg-blue-500 rounded-xl w-[100%]'></div>
            </div>
            
             <p className='text-blue-500 text-right font-bold'>100%</p>
          </div>
        </div>
      </div>
      {/* <Skills /> */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <CiSquareCheck className="text-xl font-bold" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute h-1 bg-blue-500 rounded-xl w-[95%]'></div>
            </div>
            
             <p className='text-blue-500 text-right font-bold'>95%</p>
          </div>
        </div>
      </div>
      {/* <Skills /> */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <CiSquareCheck className="text-xl font-bold" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Typescript
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute h-1 bg-blue-500 rounded-xl w-[90%]'></div>
            </div>
            
             <p className='text-blue-500 text-right font-bold'>90%</p>
          </div>
        </div>
      </div>
      {/* <Skills /> */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <CiSquareCheck className="text-xl font-bold" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Next.js
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute h-1 bg-blue-500 rounded-xl w-[70%]'></div>
            </div>
            
             <p className='text-blue-500 text-right font-bold'>70%</p>
          </div>
        </div>
      </div>
      {/* <skills /> */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <CiSquareCheck className="text-xl font-bold" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Others
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute h-1 bg-blue-500 rounded-xl w-[70%]'></div>
            </div>
            
             <p className='text-blue-500 text-right font-bold'>80%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
 </section>
</div>
  )
}

export default Skill
