import Image from "next/image"
import Link from "next/link";
import { IoMdDownload } from 'react-icons/io';
import React from "react";


export default function Navbar() {
  return (
<div className="bg-white z-50 sticky top-0 sm:max-w-full">
 <header className="text-gray-600 bg-white body-font">
   <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
         <Image src={'/canva-MADB7gcn1LQ.jpg'} alt="rose" width={100} height={100} className="w-10 rounded-full h-10" />
          <span className="ml-3 text-xl">Web Development</span>
     </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center   text-base justify-center">
          <a href={"hero"} className="mr-5 hover:text-blue-600 font-bold cursor-pointer p-1 rounded-md">Home</a>
         <a href={"#about"} className="mr-5 hover:text-blue-600 font-bold cursor-pointer p-1 rounded-md">About</a>
         <a href={"#project"} className="mr-5 hover:text-blue-600 font-bold cursor-pointer p-1 rounded-md">Projects</a>
         <a href={"#skills"} className="mr-5 hover:text-blue-600 font-bold cursor-pointer p-1 rounded-md">Skills</a>
       {/* <Link href={d}></Link> */}
       <a href={"#contact"} className="mr-5 hover:text-blue-600 font-bold cursor-pointer p-1 rounded-md">Contact</a>
       </nav>
       <Link href={('/Yaseen CV.png')}>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3
     focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Download cv
    <IoMdDownload className="m-2 text-2xl text-blue-300"/>
    </button>
    </Link>
   </div>
 </header>
</div> 
            ) 
 }