import React from 'react';


import {Container, Title} from './styled'
import {InputMoeda, Input,Select, InputData} from '../../components/Input/index'
import {Cadastrar, Atualizar} from '../Button/index'
import { faCalendarAlt, faEdit } from '@fortawesome/free-regular-svg-icons'


interface Props {
   onClick: (event: any) => void
   onNome: (event: any) => void
   onSistema?: (event: any) => void
   onCpf: (event: any) => void
   onValorRenda: (event: any) => void
   onValorEmprestimo: (event: any) => void
   onDataEmprestimo: (event: any) => void
   onDataCadastro: (event: any) => void
   onValueSistema?: (event: any) => void
   valueCpf?: String
   valueNome?: String
   valueSistema?: String
   valueValorRenda?: String
   valueValorEmprestimo?: String
   valueDataEmprestimo?: String
   valueDataCadastro?: String
   cadastrar: boolean
   valueSelect?: any
   ref?: any
   Iputselect?: any

}

const  Formulario =  (props:Props) => {

    return(
        <>
        <Container>
            
            <Title>Cadastro de Clientes</Title>
            
            {props.Iputselect}

            {!props.cadastrar ? <Input placeholder='Sistema' type='text'
                onChange={props.onValueSistema} readyonly={true}  
                value={props.valueSistema}/> : null }
                
            

            
            <Input placeholder='NOME COMPLETO' type='text'
                onChange={props.onNome} 
                value={props.valueNome}/>
                

            <Input placeholder='CPF' type='text' mask='999.999.999-99'
                onChange={props.onCpf}
                value={props.valueCpf} />

            <InputMoeda placeholder='VALOR DA RENDA' type='text'
                onChange={props.onValorRenda}
                value={props.valueValorRenda} />

            <InputMoeda placeholder='VALOR DO EMPRESTIMO' type='text'
                onChange={props.onValorEmprestimo}
                value={props.valueValorEmprestimo} />
   
            <InputData title='DATA DO EMPRESTIMO' type='date'
                onChange={props.onDataEmprestimo}
                value={props.valueDataEmprestimo}/>

            <InputData title='DATA DO CADASTRO' type='date'
                onChange={props.onDataCadastro}
                value={props.valueDataCadastro} />

            {props.cadastrar ? <Cadastrar title='Cadastrar' iconName={faCalendarAlt} onClick={props.onClick}/>:
                <Atualizar iconName={faEdit} title='Atualizar' onClick={props.onClick}/>
            }    

        
        </Container>
        </>
    )   
}

export default Formulario