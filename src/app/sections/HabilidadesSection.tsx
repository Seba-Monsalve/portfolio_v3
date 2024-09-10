import React from 'react'
import { Title } from '../components/Title'
import { FaBugSlash, FaCode, FaLightbulb } from 'react-icons/fa6'
import { MdGroups2 } from 'react-icons/md'
import { GrBeacon } from 'react-icons/gr'
import { WiTime1 } from 'react-icons/wi'

export const HabilidadesSection = () => {
    return (
        <div className="flex flex-col gap-3">
            <Title > Habilidades</Title>
            <div className="grid grid-cols-2 w-full gap-3">
                <div className="flex flex-row items-center  justify-around p-1  bg-[#c9b753] opacity-100
    text-white rounded-lg hover:opacity-70 cursor-pointer ">
                    <FaBugSlash size={40} />Bug hunter
                </div>
                <div className="flex flex-row items-center  justify-around p-1  bg-[#5d729a] opacity-100
    text-white rounded-lg hover:opacity-70 cursor-pointer ">
                    <MdGroups2 size={40} />Team Player
                </div>
                <div className="flex flex-row items-center  justify-around p-1  bg-[#825d87] opacity-100
    text-white rounded-lg hover:opacity-70 cursor-pointer  ">
                    <FaLightbulb className='hover:fill-yellow-300 transition-all' size={35} />Good Ideas
                </div>
                <div className="flex flex-row items-center  justify-around p-1  bg-[#a13f49] opacity-100
    text-white rounded-lg hover:opacity-70 cursor-pointer ">
                    <FaCode size={40} />Clean Coder
                </div>
                <div className="flex flex-row items-center  justify-around p-1  bg-[#486869] opacity-100
    text-white rounded-lg hover:opacity-70 cursor-pointer ">
                    <GrBeacon size={40} /> Communication
                </div>
                <div className="flex flex-row items-center  justify-around p-1  bg-[#9c9389] opacity-100
    text-white rounded-lg hover:opacity-70 cursor-pointer ">
                    <WiTime1 className='animate-spin' size={40} /> Time Manager
                </div>
            </div>
        </div>
    )
}
