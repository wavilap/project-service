import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter
} from './styles'

export const Service = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Electricidad</CardTitle>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </CardHeader>
      <CardFooter>
        <button type="button">Editar</button>
        <button type="button">Eliminar</button>
      </CardFooter>
    </Card>
  )
}