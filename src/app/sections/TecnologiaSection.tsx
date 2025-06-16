"use client";
import React from "react";
import { Title } from "../components/Title";
import {
  // FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  // FaJenkins,
  FaNodeJs,
  FaReact,
  FaSass,
  FaSquareJs,
} from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import {
  SiExpress,
  SiJest,
  SiMongodb,
  SiNestjs,
  SiPrisma,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DiMsqlServer, DiPostgresql } from "react-icons/di";

export const TecnologiaSection = () => {
  return (
    <div>
      <Title> Tecnologías</Title>
      <div className="grid grid-cols-3 h-[350px] lg:h-fit sm:grid-cols-5 md:grid-cols-2 lg:grid-cols-5 gap-y-5 p-3 justify-center items-center overflow-auto rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <FaHtml5
                  size={60}
                  className="
                
                hover:fill-blue-500
                
                
                              shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10  transition-all duration-250"
                />
              </div></TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">


              <p>HTML5</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <FaCss3Alt
                  size={60}
                  className="
                hover:fill-orange-500  shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
                />
              </div></TooltipTrigger>

            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">


              <p>CSS3</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <FaSquareJs
                  size={60}
                  className="hover:fill-yellow-500 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
                />
              </div></TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">



              <p>JavaScript</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <SiTypescript
                  size={60}
                  className=" hover:fill-blue-500 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
                />
              </div></TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">



              <p>TypeScript </p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <FaReact
                  size={60}
                  className=" hover:fill-blue-400 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
                />
              </div></TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">



              <p>React JS / Native</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <RiNextjsFill
                  size={60}
                  className="shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
                />
              </div></TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">



              <p>Next.js</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <FaNodeJs
                  size={60}
                  className="hover:fill-green-700 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
                />
              </div></TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">



              <p>NodeJS</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <FaSass
                  size={60}
                  className=" hover:fill-pink-500 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
                />
              </div></TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">



              <p>SASS</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <FaBootstrap
                  size={60}
                  className="
                dark:hover:fill-purple-500
                hover:fill-purple-900 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
                />

              </div></TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">


              <p>Bootstrap</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <BiLogoTailwindCss
                  size={60}
                  className=" hover:fill-blue-400  shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
                />
              </div></TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">



              <p>TailwindCss</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <FaGitAlt
                  size={60}
                  className="hover:fill-orange-600  shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
                />
              </div></TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">



              <p>Git</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <FaDocker
                  size={60}
                  className="
                dark:hover:fill-blue-400
                hover:fill-blue-600
                shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"

                />
              </div></TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">


              <p>Docker</p>
            </TooltipContent>
          </Tooltip>

          {/* <Tooltip>
            <TooltipTrigger asChild>
            <div>
            </div>
            size={60}
            className="hover:fill-yellow-500  shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
            />
            </div></TooltipTrigger>
                  <TooltipContent side="bottom" className="-mt-4 p-1 w-full">


            <p>PowerBI</p>
            
            </TooltipContent>
          </Tooltip> */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <DiMsqlServer
                  size={60}
                  className="hover:fill-red-500 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
                />
              </div></TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">



              <p>MS SQL</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <SiMongodb
                  size={60}
                  className="hover:fill-green-700 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
                />
              </div></TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">



              <p>Mongodb </p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <SiShadcnui
                  size={60}
                  className="shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
                />
              </div></TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">



              <p>Shadcn/UI </p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <DiPostgresql
                  size={60}
                  className=" hover:fill-blue-500 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
                />
              </div></TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">



              <p>PostgreSQL </p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <SiPrisma
                  size={60}
                  className=" hover:fill-gray-400 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
                />
              </div></TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">



              <p>Prisma ORM </p>
            </TooltipContent>
          </Tooltip>

          {/* Express */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <SiExpress
                  size={60}
                  className=" dark:hover:bg-gray-900 hover:rounded-3xl shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
                />
              </div></TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">



              <p>Express</p>
            </TooltipContent>
          </Tooltip>

          {/* NestJS */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div>

                <SiNestjs
                  size={60}
                  className=" hover:fill-red-600 hover:rounded-3xl shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
                />
              </div></TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 w-full">



              <p>NestJS</p>
            </TooltipContent>
          </Tooltip>

          {/* Angular */}
          {/* <Tooltip>
            <TooltipTrigger asChild>
            <div>
            </div>
            size={60}
            className="hover:fill-red-600  hover:rounded-3xl shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
            />
            </div></TooltipTrigger>
                  <TooltipContent side="bottom" className="-mt-4 p-1 w-full">


            <p>Angular</p>
            
            </TooltipContent>
          </Tooltip> */}

          {/* Jenkins */}
          {/* <Tooltip>
            <TooltipTrigger asChild>
            <div>
            </div>
            size={60}
            className="shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10   transition-all duration-250"
            />
            </div></TooltipTrigger>
                  <TooltipContent side="bottom" className="-mt-4 p-1 w-full">


            <p>Jenkins</p>
            
            </TooltipContent>
          </Tooltip>
           */}
          {/* Jest */}
          <Tooltip>
            <TooltipTrigger asChild>

              <div>
                <SiJest
                  size={60}
                  className="   hover:fill-red-500  shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10  transition-all duration-250 hover:border-gray-200"
                />
              </div>

            </TooltipTrigger>
            <TooltipContent side="bottom" className="-mt-4 p-1 ">
              <p>Jest</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div >
  );
};
