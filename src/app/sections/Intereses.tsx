import { GiCoffeeBeans, GiGuitarHead } from 'react-icons/gi'
import { Title } from '../components/Title'
import { MdForest } from 'react-icons/md'
import { FaBowlFood, FaComputer } from 'react-icons/fa6'
import { ImBooks } from 'react-icons/im'

export const InteresSection = () => {
  return (
    <div>
    <Title > Intereses</Title>
    <div className="grid grid-cols-3 gap-5 p-3">
      <div className="flex flex-row items-center hover:font-semibold justify-evenly hover:scale-125  transition-all duration-150"><GiGuitarHead size={40} /> Musica</div>
      <div className="flex flex-row items-center hover:font-semibold justify-evenly hover:scale-125  transition-all duration-150"><GiCoffeeBeans size={40} /> Café</div>
      <div className="flex flex-row items-center hover:font-semibold justify-evenly hover:scale-125  transition-all duration-150"><MdForest size={40} /> Naturaleza</div>
      <div className="flex flex-row items-center hover:font-semibold justify-evenly hover:scale-125  transition-all duration-150"><FaBowlFood size={40} /> Comida</div>
      <div className="flex flex-row items-center hover:font-semibold justify-evenly hover:scale-125  transition-all duration-150"><ImBooks size={40} /> Libros</div>
      <div className="flex flex-row items-center hover:font-semibold justify-evenly hover:scale-125  transition-all duration-150"><FaComputer size={40} /> Coding</div>
    </div>
  </div>
  )
}
