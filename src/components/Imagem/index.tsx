import React from 'react'
import { Img } from './styled';


interface Props {
 img: any
}

const Imagem = (props:Props) => (
        <Img src={props.img} />
)

export default Imagem