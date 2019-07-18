import React from 'react'
import { TdStyled, TableStyled, TrStyled  } from './styled';

interface TD {
    content: any
    className?: any
}

interface TR {
    onClick: (event: any) => any
    id?: any
    content: any
    className?: any
}

interface TABLE {
    content: any
    head: any
}

const Td = (props:TD) => (
    <TdStyled className={props.className}>
        {props.content}
    </TdStyled>
)

const Table = (props:TABLE) => (
    <TableStyled>
        <thead>
            {props.head}
        </thead>
        <tbody>
            {props.content}
        </tbody>
    </TableStyled>
)

const Tr = (props:TR) => (
    <TrStyled className={props.className} onClick={()=> props.onClick(props.id)} >
        {props.content}
    </TrStyled>
)

export {Td, Table, Tr}