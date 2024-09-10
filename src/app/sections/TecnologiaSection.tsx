import React from 'react'
import { Title } from '../components/Title'
import { FaBootstrap, FaCss3Alt, FaDatabase, FaDocker, FaGitAlt, FaHtml5, FaNodeJs, FaReact, FaSass, FaSquareJs } from 'react-icons/fa6'
import { RiNextjsFill } from 'react-icons/ri'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { SiMongodb, SiPowerbi, SiShadcnui, SiTypescript } from 'react-icons/si'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { DiMsqlServer } from 'react-icons/di'

export const TecnologiaSection = () => {
    return (
        <div>
            <Title > Tecnologías</Title>
            <div className="grid grid-cols-3 h-[200px] lg:h-full sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-y-5 p-6 justify-center items-center overflow-auto">

                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            < FaHtml5 size={60} className='
                            dark:fill-white 
                            dark:hover:bg-slate-200 
                             hover:fill-blue-500
                              dark:hover:fill-blue-500 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10 transition-all duration-250' />
                        </TooltipTrigger>
                        <TooltipContent side='bottom' >
                            <p>HTML5</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            < FaCss3Alt size={60} className='hover:fill-orange-500  shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10  transition-all duration-250' />
                        </TooltipTrigger>
                        <TooltipContent side='bottom' >
                            <p>CSS3</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            < FaSquareJs size={60} className='hover:fill-yellow-500 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10  transition-all duration-250' />
                        </TooltipTrigger>
                        <TooltipContent side='bottom' >
                            <p>JavaScript</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            < SiTypescript size={60} className=' hover:fill-blue-500 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10  transition-all duration-250' />
                        </TooltipTrigger>
                        <TooltipContent side='bottom' >
                            <p>TypeScript </p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            < FaReact size={60} className=' hover:fill-blue-400 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10  transition-all duration-250' />
                        </TooltipTrigger>
                        <TooltipContent side='bottom' >
                            <p>ReactJS</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            < RiNextjsFill size={60} className='shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10  transition-all duration-250' />
                        </TooltipTrigger>
                        <TooltipContent side='bottom' >
                            <p>Next.js</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            < FaNodeJs size={60} className='hover:fill-green-700 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10  transition-all duration-250' />
                        </TooltipTrigger>
                        <TooltipContent side='bottom' >
                            <p>NodeJS</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            < FaSass size={60} className=' hover:fill-pink-500 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10  transition-all duration-250' />
                        </TooltipTrigger>
                        <TooltipContent side='bottom' >
                            <p>SASS</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            < FaBootstrap size={60} className='hover:fill-purple-900 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10  transition-all duration-250' />
                        </TooltipTrigger>
                        <TooltipContent side='bottom' >
                            <p>Bootstrap</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            < BiLogoTailwindCss size={60} className=' hover:fill-blue-400  shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10  transition-all duration-250' />
                        </TooltipTrigger>
                        <TooltipContent side='bottom' >
                            <p>TailwindCss</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            < FaGitAlt size={60} className='hover:fill-orange-600  shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10  transition-all duration-250' />
                        </TooltipTrigger>
                        <TooltipContent side='bottom' >
                            <p>Git</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            < FaDocker size={60} className='hover:fill-blue-600  shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10  transition-all duration-250' />
                        </TooltipTrigger>
                        <TooltipContent side='bottom' >
                            <p>Docker</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            < SiPowerbi size={60} className='hover:fill-yellow-500  shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10  transition-all duration-250' />
                        </TooltipTrigger>
                        <TooltipContent side='bottom' >
                            <p>PowerBI</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            < DiMsqlServer size={60} className='hover:fill-red-500 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10  transition-all duration-250' />
                        </TooltipTrigger>
                        <TooltipContent side='bottom' >
                            <p>MS SQL</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            < SiMongodb size={60} className='hover:fill-green-700 shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10  transition-all duration-250' />
                        </TooltipTrigger>
                        <TooltipContent side='bottom' >
                            <p>Mongodb </p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            < SiShadcnui size={60} className='shadow-lg rounded-lg p-1 hover:-translate-y-2 hover:z-10  transition-all duration-250' />
                        </TooltipTrigger>
                        <TooltipContent side='bottom' >
                            <p>Shadcn/UI  </p>
                        </TooltipContent>
                    </Tooltip>

                </TooltipProvider>
            </div>
        </div>
    )
}
