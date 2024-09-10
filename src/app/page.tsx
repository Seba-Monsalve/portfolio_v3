import Image from "next/image";
import { FormationInfo } from "./components/FormationInfo/FormationInfo";
import { InteresSection } from "./sections/Intereses";
import { ContactSection } from "./sections/ContactSection";
import profilePic from '/public/foto perfil.png'
import { TecnologiaSection } from './sections/TecnologiaSection';
import { HabilidadesSection } from './sections/HabilidadesSection';
import { IdiomasSection } from "./sections/IdiomasSection";
import { ProyectosSection } from "./sections/ProyectosSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-row  gap-5 transition-all bg-[#486869] p-10 hover:bg-[#bb944a]">
        <div className=" flex flex-row  items-center justify-center gap-9">
          <div className="flex flex-col gap-1 ">
            <span className="text-5xl w-3/5 text-white">Seba</span>
            <span className="text-5xl rotate-3 bg-cyan-300">Monsalve</span>
          </div>
          <p className="w-2/3 text-gray-300">Me llamo Sebastian Monsalve y soy un programador Full Stack.
            <br />
            Con un amplio background en distintas tecnologias, busco la oportunidad de aprender y otorgar valor a traves de mi conocimientos en programación. </p>
        </div>
        {/* 
        <div>
          Minim do deserunt proident quis fugiat nostrud. Dolore tempor officia laboris sit commodo qui adipisicing adipisicing pariatur labore dolore occaecat irure. Ipsum id qui ut excepteur.</div> */}
      </div>

      {/* <div className="bg-green-400 w-full p-2">
        Velit ad cupidatat sint officia exercitation amet elit sit sint elit Lorem ullamco non.
      </div> */}
      <br />
      <div className="flex flex-row w-full">
        {/* CLOUMNA1 */}
        <div className="flex flex-col w-full items-center p-4 rounded-xxl  ">
          <Image alt='fotoperfil' width={300} height={300} className=" grayscale-0 hover:grayscale  shadow-xl transition-all bg-white -rotate-6  border hover:rotate-0 " src={profilePic} />
          <br />
          <FormationInfo />
        </div>

        {/* COLUMNA2 */}
        <div className="flex flex-col w-full gap-3 p-5" >

          <HabilidadesSection />
          <br />
          <TecnologiaSection />

        </div>

        {/* COLUMNA3 */}
        <div className="flex flex-col  w-full  gap- p-5">
          <IdiomasSection />
          <br />
          <InteresSection />
          <br />
          <ProyectosSection />
        </div>
      </div>
      <ContactSection />
    </>
  );
}
