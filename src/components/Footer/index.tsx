import React from 'react'

import {Container, Title} from './styled'

interface Props {
    title: string
  }

const Footer = (props:Props) => {
    return(
        <Container>
            <Title>{props.title}</Title>
        </Container>
    )
}

export default Footer