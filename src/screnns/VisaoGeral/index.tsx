import React, {Component}from 'react'
import api from '../../Service/api'
import './index.css'

import {Container, ContainerTable} from './styled'

import Menu from '../../components/Menu/index'
import Formulario from '../../components/Formulario'
import Footer from '../../components/Footer/index'
import {Table ,Td, Tr} from '../../components/Table/index'






interface Cliente{
    CPF: any,
    DataCadastro: String,
    DataEmprestimo: String,
    Nome: String,
    Sistema: String,
    ValorEmprestimo: String,
    ValorRenda: String
    ID: any
    Status: any
}

interface Props {
    clientes: Cliente[],
    Sistema: String,
    Nome: String,
    CPF: any,
    ValorRenda: String,
    ValorEmprestimo: String,
    DataCadastro: any,
    DataEmprestimo: any
}



export default class VisaoGeral extends Component<{},Props> {
    
    constructor(props:Props) {
        super(props);
        this.state = {
            clientes: [],
            Sistema: '',
            Nome: '',
            CPF: '',
            ValorRenda: '',
            ValorEmprestimo: '',
            DataCadastro: null,
            DataEmprestimo: null
        }
    }

    async componentDidMount(){
        const request = await api.get('Visao')
        const Totvs = request.data.Totvs
        const Cache = request.data.Cache
        const visao = Totvs.concat(Cache)
        await this.setState({clientes: visao })
        console.log(this.state.clientes)
    }

    getValue = (id:any) =>{
        const value = this.state.clientes.filter(item => id == item.ID)
        this.setState({
        Sistema: value[0].Sistema,
        Nome: value[0].Nome,
        CPF: value[0].CPF,
        ValorRenda: value[0].ValorRenda,
        ValorEmprestimo: value[0].ValorEmprestimo,
        DataCadastro: value[0].DataCadastro,
        DataEmprestimo: value[0].DataEmprestimo})

        console.log(value[0].Nome)
    }


    popularTable = () =>{
        const cliente = this.state.clientes
        
        return cliente.map(item => {

            
            return (<Tr onClick={this.getValue} id={item.ID} content={
                <>
                <Td content={item.Nome} />
                <Td content={item.CPF} />
                <Td content={item.DataCadastro} />
                <Td content={item.DataEmprestimo} />
                <Td content={item.ValorRenda} />
                <Td content={item.ValorEmprestimo} />
                <Td content={item.Sistema} />
                <Td content={
                    `${item.Status.length == 0  ? 'OK' :item.Status[0].situacao},` + '\n' +
                    `${item.Status.length == 2  ? item.Status[1].situacao : ''}`  } />
                </>
            }/>)


        })
    }


    response = async () => {
        console.log('teste') 
    }


    public render(){

        const table = this.popularTable()

        return(
            <>
        <Menu/>
        <Container>
            <ContainerTable>
        <Table 
        head={
            <Tr  onClick={this.getValue} content={
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
        content={table}/>
        </ContainerTable>
   
    
            
            
        
            

            {/* <Formulario 
                onClick={this.response}

                onNome={event => this.setState({Nome: event.target.value})}
                valueNome={this.state.Nome}

                onCpf={event => this.setState({CPF: event.target.value})}
                valueCpf={this.state.CPF}

                onValorEmprestimo={event => this.setState({ ValorEmprestimo:event.target.value})}
                valueValorEmprestimo={this.state.ValorEmprestimo}

                onValorRenda={event => this.setState({ValorRenda:event.target.value})}
                valueValorRenda={this.state.ValorRenda}

                onDataCadastro={event => this.setState({DataCadastro:event.target.value})}
                valueDataCadastro={this.state.DataCadastro}

                onDataEmprestimo={event => this.setState({DataEmprestimo:event.target.value})}
                valueDataEmprestimo={this.state.DataEmprestimo}

                onSistema={event => this.setState({Sistema:event.target.value})}
                valueSistema={this.state.Sistema}

                
                cadastrar={false}
                /> */}
        </Container>
        <Footer  title='GrupoMir'/>
        </>
        
        )
    }

}

