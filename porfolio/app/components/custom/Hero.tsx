"use client";
import Image from "next/image";
import Link from "next/link";
// import React from "react";
import Typewriter from "typewriter-effect";
const url='diamond.png'

export default function Hero() {
  return (
    <div className="-mb-16 sm:overflow-hidden bg-[url('/study.jpg')] bg-no-repeat
     bg-cover bg-right-bottom">
      <hr />
      <section className="text-gray-600 body-font bg-center  bg-cover custom-image h-[600px] ">
      {/* <div
  className="w-full h-screen"
  st="background-image: url('/diamond.png')"></div> */}
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
              <p className="text -mt-12">I AM</p>
              <Typewriter
                options={{
                  strings: [
                    "AI-EXPERT",
                    "BLOCK-CHAIN DEVELOPER",
                    "UI/UX DESIGNER",
                    "WEB-DEVELOPER",
                  ],
                  autoStart: true,
                  loop: true,
                }} 
               />
            </h1>
            <p className="mb-8 leading-relaxed text-white font-semibold">
            I want to introduce myself and my skills in a way that is clear, concise, and catches the reader's attention.I am web developer with creating and manage website. My skills include coding in HTML, CSS, Typescript, and Next.js, as well as working with CMSs.
            </p>
            <Link href={"./Contacts"

            }> 
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact Us
              </button>
            </div>
            </Link>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-12">
            <Image
              className="object-cover object-center -mx-6 ml-24 -mt-6 w-[15rem] h-[15rem]  rounded-full shadow-2xl shadow-current border border-black"
              alt="hero"
              width={500}
              height={300}
              src={require("../../../public/WhatsApp Image 2023-08-20 at 9.35.09 AM (2).jpeg")}
            />
          </div>
        </div>
      </section>
    </div>
  ); 
}
