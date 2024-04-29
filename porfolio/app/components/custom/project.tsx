import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Project = () => {
  return (
<div id='project'>
 <section className="text-gray-600 body-font bg-white">
     <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl font-medium title-font -mb-4 -mt-16 text-gray-900">My Projects</h1>
        </div>
         <div className="flex flex-wrap -m-10 ">
          {/* <project/ > */}
              <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                 <div className="flex relative">
                     <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={'/best photo.jpg'} width={70} height={80} />
                      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Catering projects</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">CATERING</h1>
                                 <p className="leading-relaxed">This is the project which i have created for those who  owns a Catering business.</p>
                                 <Link target='_blank' href={""}>
                                <p className="leading-relaxed text-blue-500 hover:underline">View project..</p>
                                </Link>
                      </div>
                   </div>
              </div>
          {/* {project/ >}     */}
          <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                 <div className="flex relative">
                     <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={'/study.jpg'} width={70} height={80} />
                      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Catering projects</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">CATERING</h1>
                                 <p className="leading-relaxed">This is the project which i have created for those who  owns a Catering business.</p>
                                 <Link target='_blank' href={""}>
                                <p className="leading-relaxed text-blue-500 hover:underline">View project..</p>
                                </Link>
                      </div>
                   </div>
              </div>
          {/* <project/ >    */}
          
          <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                 <div className="flex relative">
                     <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={'/download.png'} width={70} height={80} />
                      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">SMS projects</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">sms</h1>
                                 <p className="leading-relaxed">This is the project which i have created for those who  owns a SMS business.</p>
                                 <Link target='_blank' href={""}>
                                <p className="leading-relaxed text-blue-500 hover:underline">View project..</p>
                                </Link>
                      </div>
                   </div>
              </div>
        </div>
      </div>   
 </section>
</div>
  )
}

export default Project














              