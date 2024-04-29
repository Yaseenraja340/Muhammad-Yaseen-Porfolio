import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const About = () => {
  return (
    <div id='about' className='-mt-15'>
      <section className="text-gray-600 body-font bg-white">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-6xl font-medium text-gray-900 -mx-36 -mt-20 mb-12">
        About Me
      </h1>
      <p className=" leading-relaxed -mx-64 mb-12">
      Hi! I am Muhammad Yaseen, I'm 18 years old. I am web developer <br /> with creating and manage website. Proficient in HTML, CSS, and JavaScript. 
      </p>
      <Link href={('/Yaseen CV.png')}>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg -mx-32 mr-6 -mb-8 ">
          View CV
        </button>
      </div>
      </Link>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
