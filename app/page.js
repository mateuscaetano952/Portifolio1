import {BsFillMoonStarsFill} from 'react-icons/bs';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import mateus from "../public/mateus.jpeg";
import dev from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import code from "../public/code.png";
import web1 from "../public/web1.png"
import {useState} from 'react';

export default function Home() {
  const [darkMode, setDarlMode] = useState(false);

  return (
   <div className={darkmode ? "dark" : ""}>
      <head>
        <title>Portifolio Mateus Caetano de Oliveira</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
       <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">

          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Mateus</h1>
              <ul className=" flex items-center">
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2x1"/>
                </li>
                <li className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-5 py-2 rounded-md ml-8" href="#">Curriculo</li>
              </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Mateus Caetano</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Desenvolvedor web</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl md-text-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar nisi ut eleifend blandit. Mauris in pharetra enim, non porttitor lorem. Nulla tincidunt massa sit amet lacus suscipit lacinia. 
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <FaSquareInstagram/>
            <FaLinkedin/>
          </div>
          <div className='relative bg-gradient-to-b from-teal-500 mx-auto h-80 w-80 rounded-full mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={mateus} layout='fill' objectFit='cover' />
          </div>
        </section>
        
        <section>
         <div>
           <h3 className='text-3xl py-1'>Habilidades em destaque</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
            Desenvolvedor full stack web com entendi
            </p>
          
         </div>
         <div className='md:flex gap-5 lg:flex gap-10'>
         <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={design} width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Beatiful Deisgns</h3>
            <p className='py-2'>
              Lorem asdasd asdasd aaaaaaaaa ssda sdsd
              adsdasdasd
            </p>
            <h4 className='py-4 text-teal-600'> Design tools i use</h4>
            <p className='text-gray-800 py-1 '>ASDAsdasdads</p>
            <p className='text-gray-800 py-1 '>ASDAsdasdads</p>
            <p className='text-gray-800 py-1 '>ASDAsdasdads</p>
         </div>

         <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={design} width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Beatiful Deisgns</h3>
            <p className='py-2'>
              Lorem asdasd asdasd aaaaaaaaa ssda sdsd
              adsdasdasd
            </p>
            <h4 className='py-4 text-teal-600'> Design tools i use</h4>
            <p className='text-gray-800 py-1 '>ASDAsdasdads</p>
            <p className='text-gray-800 py-1 '>ASDAsdasdads</p>
            <p className='text-gray-800 py-1 '>ASDAsdasdads</p>
         </div>

         <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={design} width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Beatiful Deisgns</h3>
            <p className='py-2'>
              Lorem asdasd asdasd aaaaaaaaa ssda sdsd
              adsdasdasd
            </p>
            <h4 className='py-4 text-teal-600'> Design tools i use</h4>
            <p className='text-gray-800 py-1 '>ASDAsdasdads</p>
            <p className='text-gray-800 py-1 '>ASDAsdasdads</p>
            <p className='text-gray-800 py-1 '>ASDAsdasdads</p>
         </div>
         
         </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Portifolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
            Desenvolvedor full stack web com entendi
            </p>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'>
                <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/> 
              </div>
               <div className='basis-1/3 flex-1'>
                <Image src={web1}  className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/> 
              </div>
               <div className='basis-1/3 flex-1'>
                <Image src={web1}  className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/> 
              </div>
            </div>

          </div>
        </section>
      </main>
   </div>

  );
}
