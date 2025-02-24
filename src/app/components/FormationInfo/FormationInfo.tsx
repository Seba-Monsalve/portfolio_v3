

import { FormationItem } from './ui/FormationItem'
import { Title } from '../Title';

export const FormationInfo = () => {
  return (
    <div className=' items-start mt-5 '>
      <Title>Experiencia</Title>
      <FormationItem cn=' rotate-2 bg-orange-500'  year={`Agosto 2020 - Enero 2025`} icon='icon' workplace='Emerix' title='Programador' />
      <FormationItem cn='-translate-y-1 rotate-4 bg-green-500' year={`Junio 2024 - Diciembre 2024`} icon='icon' workplace='Sence - Talento Digital' title='Estudiante Full StacK Python (Django)' />
      <FormationItem cn='-translate-y-3 -rotate-2 bg-blue-300' year={`Marzo 2024 - Julio 2024`} icon='icon' workplace='Alura Latam' title='Estudiante Front-end' />
      <FormationItem cn='-translate-y-3  rotate-3 bg-purple-500' year={`Enero 2024 - Actualidad`} icon='icon' workplace='DevTalles' title='React Roadmap' />
    </div>
  )
}
