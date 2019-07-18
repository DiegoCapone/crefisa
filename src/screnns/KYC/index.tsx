import React, {Component} from 'react'

import {Container, ContainerTable} from './styled'
import {Input} from '../../components/Input/index'
import {Cadastrar} from '../../components/Button/index'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import Propaganda from '../../assets/img/propaganda.png'

import Imagem from '../../components/Imagem/index'
import Menu from '../../components/Menu/index'
import Footer from '../../components/Footer'
import { Table, Tr, Td} from '../../components/Table/index'
import api from '../../Service/api'




interface Cliente{
    CPF: String,
    DataCadastro: String,
    DataEmprestimo: String,
    Nome: String,
    Sistema: String,
    ValorEmprestimo: String,
    ValorRenda: String
    ID: String
    Status: any
}

interface Props {
    clientes: Cliente[],
    cpf: any
}


export default class Kyc extends Component<{},Props> {
    
    constructor(props:Props) {
        super(props);
        this.state = {
            clientes: [],
            cpf: ''
        }
    }
    getValue = (id:any) =>{
        
    }

    getKyc = async () => {

        if(this.state.cpf == ''){
            return alert('digite um cpf')
        }

        const request = 
        await api.get(`KYC?CPF=${this.state.cpf.split('.').join('').split('-').join('')}`)
        const Totvs = request.data.Totvs
        const Cache = request.data.Cache
        const visao = Totvs.concat(Cache)
        const filtro = visao.filter((item:any) => item.CPF != '')
        await this.setState({clientes: filtro})

        if(filtro.length == 0){
            return alert('cpf não encontrado')
        }

        console.log(filtro)
    }

    popularTable = () =>{
        const cliente = this.state.clientes
        return cliente.map(item => {
            if(item.CPF != ''|| item.CPF != undefined){
                return (<Tr onClick={this.getValue} id={item.ID} content={
                    <>
                    <Td content={item.Nome} />
                    <Td content={item.CPF} />
                    <Td content={item.DataCadastro} />
                    <Td content={item.DataEmprestimo} />
                    <Td content={item.ValorRenda} />
                    <Td content={item.ValorEmprestimo} />
                    <Td content={item.Sistema} />
                    <Td content={item.Status.length != 0 ? item.Status[0].situacao : 'OK'} />
                    </>
                }/>)
            }
            

        })
    }

    render(){

        const table = this.popularTable()
        return(
        <>
            <Menu/>
            <Container>
                <Input placeholder='CPF' type='text' mask='999.999.999-99'
                onChange={event => this.setState({cpf: event.target.value})}/>
                <Cadastrar onClick={this.getKyc} iconName={faUser} title='Buscar Cadastro'/>
            </Container>
            <ContainerTable>
            <Table 
            head={
            <Tr onClick={this.getValue} content={
                <>
                <Td className='th' content={'Nome'} />
                <Td className='th' content={'CPF'} />
                <Td className='th' content={'Data de Cadastro'} />
                <Td className='th' content={'Data do Emprestimo'} />
                <Td className='th' content={'Valor da Renda'} />
                <Td className='th' content={'Valor do Emprestimo'} />
                <Td className='th' content={'Sistema'} />
                <Td className='th' content={'Status'} />

                </>
            } />
                
        }
        content={
            table
        }/>
        </ContainerTable>
            <Imagem img={Propaganda}/>
            <Footer title='GrupoMir'/>
        </>
        )
    }
}    
