import React from 'react'
import DefaultIcon from './images/default.svg'
import ComponentIcon from './images/component.svg'

export const Loader = ({type}) => (
  (type === 'component') ? (
    <img className={`loader--icon`} src={ComponentIcon} alt='Carregando' />
  ) : (
    <img className={`loader--icon`} src={DefaultIcon} alt='Carregando' />
  )
)
