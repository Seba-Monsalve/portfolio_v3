"use client";
import Image from "next/image";
import { FormationInfo } from "./components/FormationInfo/FormationInfo";
import { InteresSection } from "./sections/Intereses";
import { ContactSection } from "./sections/ContactSection";
import profilePic from "/public/foto perfil.png";
import { TecnologiaSection } from "./sections/TecnologiaSection";
import { HabilidadesSection } from "./sections/HabilidadesSection";
import { IdiomasSection } from "./sections/IdiomasSection";
import { ProyectosSection } from "./sections/ProyectosSection";
import { ModeToggle } from "./components/ModeToggle";
import { Logo } from "./components/Logo";
import { PawPrint } from "lucide-react";
import Link from "next/link";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

export default function Home() {
  return (
    <>
      <div
        className="flex flex-row  gap-5 transition-all p-10 rounded-b-3xl 
       bg-[#486869] 
       hover:bg-[#bb944a]
      hover:dark:bg-[#825d87]
      dark:bg-[#5d729a]
      "
      >
        <div className=" flex flex-col md:flex-row  items-center justify-center gap-9">
          <Logo textSize="text-5xl" />
          <p className="w-2/3 text-gray-200">
            Mi nombre <b>Sebastian Monsalve</b> y soy un programador{" "}
            <b>Full Stack</b>.
            <br />
            Con un amplio background en distintas tecnologias, busco la
            oportunidad de seguir aprendiendo y otorgar valor a traves de mi
            conocimientos en programación.{" "}
          </p>
        </div>
        {/* 
        <div>
          Minim do deserunt proident quis fugiat nostrud. Dolore tempor officia laboris sit commodo qui adipisicing adipisicing pariatur labore dolore occaecat irure. Ipsum id qui ut excepteur.</div> */}
        <ModeToggle />
      </div>
      {/* <div className="bg-green-400 w-full p-2">
        Velit ad cupidatat sint officia exercitation amet elit sit sint elit Lorem ullamco non.
      </div> */}

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="flex flex-col mx-auto items-center justify-center  w-fit -mt-5 -mb-2  bg-rose-200  px-6 py-4 rounded-3xl   shadow-lg shadow-gray-500 cursor-pointer ">
            <span className=" bg-white flex flex-row gap-2 p-2  rounded-full shadow-lg shadow-gray-500 animate-bounce transition-all duration-1200">
              <PawPrint className="text-rose-500 h-10 w-10 " />

              <h2 className="text-3xl font-bold text-gray-800">PetCare</h2>
            </span>
            <span className="text-gray-500 text-sm font-semibold -mt-2">
              <br />
              <span className="flex flex-col items-center">

                <span className="mt-1 dark:text-gray-700 text-gray-200 font-semibold text-base text-center">
                  Descubre el proyecto que cuida de tus mascotas y facilita tu día a día.
                </span>
                <span className="mt-2 flex items-center gap-2 text-rose-400 font-medium text-sm">
                  <PawPrint className="w-5 h-5 animate-bounce" />
                  Gestiona vacunas, historial médico y mucho más
                </span>
              </span>
            </span>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-[#486869] text-gray-200 rounded-3xl shadow-lg shadow-gray-500">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">
              <Link
                href="https://petcare-backend-977g.onrender.com/"
                target="_blank"
                className="flex gap-3 text-rose-200 w-fit p-2 px-5 hover:bg-rose-400 rounded-lg hover:text-white transition-all duration-200"
              >
                <PawPrint />
                PetCare
              </Link>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <p className="text-gray-200 my-2">
                PetCare es una aplicacion web que permite gestionar la salud y
                el bienestar de tus mascotas. Con funcionalidades como
                recordatorios de vacunas e historial medico, PetCare te ayuda a mantener a tus amigos peludos
                felices y saludables.
              </p>
              <div className="my-4">
                <table className="min-w-full text-left text-sm border border-gray-400 rounded-lg overflow-hidden">
                  <thead className=" text-white">
                    <tr>
                      <th className="px-4 py-2">Parte</th>
                      <th className="px-4 py-2">Tecnologías</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="bg-white">
                      <td className="border-t border-gray-400 px-4 py-2">Frontend</td>
                      <td className="border-t border-gray-400 px-4 py-2">ReactJS, Typescript, Tailwind CSS, Zustand, Tanstack Query, zod, Formik, Axios</td>
                    </tr>
                    <tr className="bg-white">

                      <td className="border-t border-gray-400 px-4 py-2">Backend</td>
                      <td className="border-t border-gray-400 px-4 py-2">NodeJS (Express), Prisma ORM, Postgres (Docker)</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-gray-200 my-2 flex flex-col items-center justify-center" >
                  <h1 className="tex2xl font-bold text-gray-200 my-2">
                    Credenciales de acceso para pruebas
                  </h1>
                  <p>
                    email: asd@asd.cl
                  </p>
                  <p>
                    password: asdasd
                  </p>

                </p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className=" text-black hover:opacity-90 " >Volver</AlertDialogCancel>
            <AlertDialogAction className="bg-rose-500 text-white hover:opacity-90 hover:bg-red-500">

              <Link
                href="https://petcare-backend-977g.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 text-gray-200  p-2 px-5  rounded-lg hover:text-white transition-all duration-200"
              > Ir al Proyecto</Link>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="flex md:flex-row w-full flex-col">
        {/* CLOUMNA1 */}
        <div className="flex flex-col w-full items-center p-4 rounded-xxl  ">
          <Image
            alt="fotoperfil"
            width={300}
            height={300}
            className=" grayscale-0 hover:grayscale  shadow-xl hover:shadow-gray-700 transition-all bg-white -rotate-6  border hover:rotate-0 "
            src={profilePic}
          />
          <br />
          <FormationInfo />
        </div>

        {/* COLUMNA2 */}
        <div className="flex flex-col w-full gap-3 p-5">
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
