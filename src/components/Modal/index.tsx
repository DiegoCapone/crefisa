import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core';

import './index.css'




import {Barra,
     Button,
     ContainerDiv} from './styled'
    
    
import {Container,
    ContainerModal,
    Description,  DescriptionTitle, Title,} from './styled'
    

interface Props{
    onClick: (event: any) => void
    cpf: any
    valorRenda: any
    dataCadastro: any
    sistema: any
    nome: any
}
    
    
const Modal = (props:Props) => (
    <Container>
            <ContainerDiv>
                <Description className='description'>
                    Parabéns, seu cadastro foi efetuado com sucesso
                </Description>
                <Button onClick={props.onClick}>
                    <FontAwesomeIcon icon={faTimesCircle} size="3x" className='iconColor' />
                </Button>
            </ContainerDiv>

        <ContainerModal>

            <Barra >
                <Title>{props.nome}</Title>
            </Barra>

            <Description>
                <DescriptionTitle>CPF:</DescriptionTitle>{props.cpf}
            </Description>

            <Description>
                <DescriptionTitle>Valor da Renda:</DescriptionTitle>{props.valorRenda}
            </Description>

            <Description>
                <DescriptionTitle>Data do Cadastro:</DescriptionTitle>{props.dataCadastro}
            </Description>

            <Description>
                <DescriptionTitle>Sistema:</DescriptionTitle>{props.sistema}
            </Description>

        </ContainerModal>
    </Container>
)

export default Modal
