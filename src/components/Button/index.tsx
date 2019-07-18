import React from 'react'

import {ButtonCadastrar, Container, Title } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faEdit } from '@fortawesome/free-regular-svg-icons'
import './index.css'
import { icon } from '@fortawesome/fontawesome-svg-core';
    
    

interface Props {
    title: string
    onClick?: (event: object) => void
    iconName: any
  }

const Cadastrar = (props:Props) => {
    return(
        <ButtonCadastrar onClick={props.onClick}>
            <Container>
                <FontAwesomeIcon icon={props.iconName} className="icon" size="5x" />
            </Container>
            <Title>{props.title}</Title>
        </ButtonCadastrar>
    )
}

const Atualizar = (props:Props) => {
    return(
        <ButtonCadastrar className='colorDiv' onClick={props.onClick}>
            <Container className='colorBtn'>
                <FontAwesomeIcon icon={props.iconName} className="icon" size="5x" />
            </Container>
            <Title>{props.title}</Title>
        </ButtonCadastrar>
    )
}

export  {Cadastrar, Atualizar}