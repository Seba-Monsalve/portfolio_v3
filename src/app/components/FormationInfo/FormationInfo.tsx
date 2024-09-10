

import React from 'react'
import { FormationItem } from './ui/FormationItem'
import { Title } from '../Title';
import { TimeRelative } from '@/plugins/Time';

export const FormationInfo = () => {
  return (
    <div className='w-2/3 items-start mt-5 '>
      <Title>Experiencia</Title>
      <FormationItem year={`Agosto 2020 - Actualidad (${TimeRelative('08-09-2020')})`} icon='icon' workplace='Emerix' title='Programador' position='Programmer'/>
    </div>
  )
}
