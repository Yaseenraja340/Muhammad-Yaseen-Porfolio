import Image from "next/image"
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
   <div className=""> 
<footer className="text-gray-600 body-font bg-white ">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={'/rose wallpaper.png'} alt="rose" width={100} height={100} className="w-10 rounded-full h-10" />
      <span className="ml-3 text-xl">Panaverse</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 writes
     
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link rel="stylesheet" target="_blank" href={"https://web.facebook.com/?_rdc=1&_rdr"}  >
    <FaFacebook className="text-3xl hover:text-[#3b5996]"/>
     </Link>
    </span>
  </div>
</footer>

</div>
            ) 
 }