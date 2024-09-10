

import React from 'react'
import { FormationItem } from './ui/FormationItem'
import { Title } from '../Title';
import { TimeRelative } from '@/plugins/Time';

export const FormationInfo = () => {
  return (
    <div className=' items-start mt-5 transl '>
      <Title>Experiencia</Title>
      <FormationItem cn=' rotate-2'  year={`Agosto 2020 - Actualidad (${TimeRelative('08-09-2020')})`} icon='icon' workplace='Emerix' title='Programador' />
      <FormationItem cn='-translate-y-3 -rotate-2 bg-blue-300 ' year={`Marzo 2024 - Julio 2024`} icon='icon' workplace='Alura Latam' title='Estudiante Front-end' />
      <FormationItem cn='-translate-y-3  rotate-3 bg-purple-500' year={`Enero 2024 - Actualidad`} icon='icon' workplace='DevTalles' title='React Roadmap' />
    </div>
  )
}
