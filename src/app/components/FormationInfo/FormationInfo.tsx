

import React from 'react'
import { FormationItem } from './ui/FormationItem'
import { Title } from '../Title';

export const FormationInfo = () => {
  return (
    <div className='w-2/3 items-start mt-5 '>
      <Title>Experiencia</Title>

      <FormationItem
        year='Agosto - 2020 - Actualidad'
        icon='icon'
        workplace='Emerix'
        title='Programador'
        position='Programmer'
      />
    </div>
  )
}
