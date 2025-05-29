import {BsFillMoonStarsFill} from 'react-icons/bs';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import mateus from "../public/mateus.jpeg";
import dev from "../public/dev-ed-wave.png";

export default function Home() {
  return (
   <div>
      <head>
        <title>Portifolio Mateus Caetano de Oliveira</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
       <main className="bg-white px-10">
        <section className="min-h-screen">

          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Mateus</h1>
              <ul className=" flex items-center">
                <li>
                  <BsFillMoonStarsFill className="cursor-pointer text-2x1"/>
                </li>
                <li className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-5 py-2 rounded-md ml-8" href="#">Curriculo</li>
              </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Mateus Caetano</h2>
            <h3 className="text-2xl py-2">Desenvolvedor web</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar nisi ut eleifend blandit. Mauris in pharetra enim, non porttitor lorem. Nulla tincidunt massa sit amet lacus suscipit lacinia. 
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <FaSquareInstagram/>
            <FaLinkedin/>
          </div>
          <div className='relative bg-gradient-to-b from-teal-500 mx-auto h-80 w-80 rounded-full mt-20 overflow-hidden'>
            <Image src={mateus} layout='fill' objectFit='cover' />
          </div>
        </section>
        
        <section>
          <h3 className='text-3xl py-1'>Habilidades em destaque</h3>
          <p className='text-md py-2 leading-8 text-gray-800'>
            Desenvolvedor full stack web com entendi
          </p>
          33
        </section>
      </main>
   </div>

  );
}
