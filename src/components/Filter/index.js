import React from 'react'

import { FilterWrap, FilterItem } from './styles'

export const Filter = () => {
  return (
    <FilterWrap>
      <FilterItem>Todos</FilterItem>
      <FilterItem>Autos</FilterItem>
      <FilterItem>Salud</FilterItem>
      <FilterItem>Hogar</FilterItem>
    </FilterWrap>
  )
}