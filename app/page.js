"use client" //
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import mateus from "../public/mateus.jpeg";
import dev from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import code from "../public/code.png";
import web1 from "../public/web1.png"
import { useState } from 'react';

export default function Home() {

  return (
   <div>
      <head>
        <title>Portifolio Mateus Caetano de Oliveira</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
       <main className="bg-white px-10 md:px-20 lg:px-4">
        <section className="min-h-screen">
      
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Mateus</h1>
              <ul className=" flex items-center">
                <li className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-5 py-2 rounded-md ml-8" href="#">Curriculo</li>
              </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Mateus Caetano</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Full stack web developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl md-text-w-xl mx-auto">
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
         </div>

         <div className='md:flex justify-evenly'>
         <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image className='mx-auto' src={design} width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'> Front-end</h3>
           
            <p className='text-gray-800 py-1 '>Html & css</p>
            <p className='text-gray-800 py-1 '>React & next.js</p>
            <p className='text-gray-800 py-1 '>Tailwind & bootstrap 5</p>
         </div>

         <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image className='mx-auto' src={code} width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Back end</h3>
            <p className='text-gray-800 py-1 '>Javascript & typescript</p>
            <p className='text-gray-800 py-1 '>Node.js & express</p>
             <p className='text-gray-800 py-1 '>Banco de dados Sql & NoSql</p>
         </div>

         
         </div>

         
        </section>
        
        <section>
          <div className='m-4 bg-white p-4 rounded shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='bg-white p-4 rounded shadow text-center hover:bg-gray-300'> 
              <Image className='mx-auto' src={web1} />
              
              <p className='font-bold'>Projeto 1</p>
              <p className='text-sm text-gray-600'>Descrição</p>
            </div>
            <div className='bg-white p-4 rounded shadow text-center hover:bg-gray-300'> 
              <Image className='mx-auto' src={web1} />
              
              <p className='font-bold'>Projeto 1</p>
              <p className='text-sm text-gray-600'>Descrição</p>
            </div>
            <div className='bg-white p-4 rounded shadow text-center hover:bg-gray-300'> 
              <Image className='mx-auto' src={web1} />
              
              <p className='font-bold'>Projeto 1</p>
              <p className='text-sm text-gray-600'>Descrição</p>
            </div>
          </div>
        </section>
      </main>
   </div>

  );
}
