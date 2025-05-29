import Image from "next/image";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

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
                <li className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8s" href="#">Curriculo</li>
              </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Mateus Caetano</h2>
            <h3 className="text-2xl py-2">Desenvolvedor web</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
          <div className="text-5xl flex justify-center">
            <FaSquareInstagram/>
            <FaLinkedin/>
          </div>
        </section>
      </main>
   </div>

  );
}
