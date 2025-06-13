"use client" //
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import Image from "next/image";
import mateus from "../public/mateus.jpeg";
import dev from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import code from "../public/code.png";
import web1 from "../public/web1.jpg"
import web2 from "../public/projeto2.png"
import { useState } from 'react';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
 
    return (
   <div  className={darkMode ? "dark" : ""}>
      <head>
        <title>Portifolio Mateus Caetano de Oliveira</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
       <main className="bg-white px-10 md:px-20 lg:px-4 dark:bg-gray-900">
        <section className="min-h-screen">
      
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl  dark:text-gray-300">Mateus</h1>
              <ul className=" flex items-center">
                <li> 
                  <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
                  </li>
                <li className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-5 py-2 rounded-md ml-8" href="#">Curriculo</li>
              </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Mateus Caetano</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-600">Full stack web developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl md-text-w-xl mx-auto dark:text-gray-300">
              Desenvolvedor apaixonado por criar soluções digitais completas, desde a interface do usuário até a infraestrutura de back-end.
               Com expertise em JavaScript, TypeScript, React, Node.js e bancos de dados SQL/NoSQL, construo aplicações escaláveis, 
               performáticas e responsivas.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.instagram.com/mateuscaetano952/">
              <FaSquareInstagram/>
            </a>
            <a href="https://www.linkedin.com/in/mateus-caetano-b57085265/">
            <FaLinkedin/>
            </a>
            <a href="https://www.linkedin.com/in/mateus-caetano-b57085265/">
            <FaGithub />
            </a>
          </div>
          <div className='relative bg-gradient-to-b from-teal-500 mx-auto h-80 w-80 rounded-full mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={mateus} layout='fill' objectFit='cover' />
          </div>
        </section>
        
        <section>
         <div className="text-center p-10">
           <h3 className='text-3xl py-1'>Habilidades em destaque</h3>
                 <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <FaHtml5 />
              <FaCss3Alt />
              <FaJs/>
              <SiTypescript />
              <FaReact />
              <FaNodeJs />
              <RiTailwindCssFill />

        
          </div>
         </div>

         <div className='md:flex justify-evenly'>
         <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image className='mx-auto' src={design} width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2  dark:text-gray-400'> Front-end</h3>
           
            <p className='text-gray-800 py-1 dark:text-gray-200'>Construção de site modernos</p>
            <p className='text-gray-800 py-1 dark:text-gray-200'>Responsividade</p>
            <p className='text-gray-800 py-1 dark:text-gray-200'>Ui/ux designer</p>
         </div>

         <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image className='mx-auto  ' src={code} width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-400'>Back end</h3>
            <p className='text-gray-800 py-1 dark:text-gray-200'>Api restfull</p>
            <p className='text-gray-800 py-1 dark:text-gray-200'>Mvc</p>
             <p className='text-gray-800 py-1 dark:text-gray-200'>Banco de dados Sql & NoSql</p>
         </div>

         
         </div>

         
        </section>
        
        <section>
          <div className='m-4 bg-white p-4 rounded shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='bg-white p-4 rounded shadow text-center hover:bg-gray-300'> 
              <a href='https://github.com/mateuscaetano952/Cadastro_alunod_api_rest'>
                <Image className='mx-auto' src={web1} />
              </a>
              
              <p className='font-bold'>Cadastro de alunos Api rest</p>
              <p className='text-sm text-gray-600'>
                <ul>
                  <li>Cadastro de alunos com suporte a imagens</li>
                  <li>Api rest</li>
                  <li>Autentificação com JWT (JSON Web Token).</li>
                  <li>
                  
                  </li>
                </ul>
              </p>
            </div>

            
            <div className='bg-white p-4 rounded shadow text-center hover:bg-gray-300'> 
              <a href='https://github.com/mateuscaetano952/projeto_finans_webdev2022'>
                <Image className='mx-auto' src={web2} />
              </a>
              
              <p className='font-bold'>Projeto finans</p>
              <p className='text-sm text-gray-600'>
                <ul>
                  <li>Html & Css</li>
                  <li>Responsividade</li>
                  <li>Bootstrap.</li>
                  <li>
                  
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>

<section class="bg-white">
    <footer class="bg-neutral-700 text-center dark:bg-neutral-700 lg:text-left">
  <div class="bg-black/5 p-4 text-center text-surface dark:text-white">
    © 2025 Copyright:
    <a href="https://tw-elements.com/">Mateus Caetano de Oliveira</a>
  </div>
</footer>
</section>
        
      </main>
   </div>

  );
}
