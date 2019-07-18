import React, {Component} from 'react'
import {Container} from './styled'
import Menu from '../../components/Menu/index'
import Formulario from '../../components/Formulario/index'

import Footer from '../../components/Footer/index'
import api from '../../Service/api'
import './index.css'
import Imagem from '../../components/Imagem';
import Visita from '../../assets/img/visita.png'
import Modal from '../../components/Modal/index'






interface Sistema{
    sistema: String
}


interface Props {
    sistema: String,
    nome: String,
    cpf: String,
    valorRenda: String,
    valorEmprestimo: String,
    dataCadastro: any,
    dataEmprestimo: any,
    modal: boolean
    cadastrar: boolean
    options: Sistema[]
}

const initialState = {
    sistema: '',
    nome: '',
    cpf: '',
    valorRenda: '',
    valorEmprestimo: '',
    dataCadastro: '',
    dataEmprestimo: '',
    modal: false,
    cadastrar: true,
    options: []
}


export default class Home extends Component<{},Props> {
    
    constructor(props:Props) {
        super(props);
        this.state = {
            sistema: '',
            nome: '',
            cpf: '',
            valorRenda: '',
            valorEmprestimo: '',
            dataCadastro: '',
            dataEmprestimo: '',
            modal: false,
            cadastrar: true,
            options: []
        }
    }

    async componentDidMount(){
        this.popularOptions()   
    }

    async popularOptions(){
        const resp =  await api.get('sistemas')
        this.setState({options: resp.data})
        console.log(this.state.options)
    }
    

    cadastrar = () =>{

        if(this.state.sistema == '' || this.state.sistema == 'undefined'){
            return alert('Sistema não foi selecionado')
        }

        if(this.state.cpf == ''){
            return alert('campo cpf não foi preenchido')
        }

        if(this.state.nome == ''){
            return alert('campo nome não foi preenchido')
        }

        if(this.state.dataCadastro == ''){
            return alert('data de cadastro não foi preenchida')
        }

        if(this.state.dataEmprestimo == ''){
            return alert('data de emprestimo não foi preenchido')
        }

        if(this.state.valorEmprestimo == ''){
            return alert('valor emprestimo não foi preenchido')
        }

        if(this.state.valorRenda == ''){
            return alert('valor da renda não foi preenchido')
        }


        api.post('Cliente', {
            sistema: this.state.sistema,
            nome: this.state.nome,
            cpf: this.state.cpf.split('.').join('').split('-').join(''),
            valorRenda: this.state.valorRenda.split('R$')[1],
            valorEmprestimo: this.state.valorEmprestimo.split('R$')[1],
            dataCadastro: this.state.dataCadastro,
            dataEmprestimo: this.state.dataEmprestimo,
        }).then(res =>
            this.setState({modal: true})
        ).catch(e => {
            alert(e)
        })
            
    }

    closeModal = () => {
        this.setState({...initialState})
        this.popularOptions()
    }


    public render(){

        return(
            <>
            <Menu />
            <Container>
                {this.state.modal ? <Modal 
                cpf={this.state.cpf}
                dataCadastro={this.state.dataCadastro}
                valorRenda={this.state.valorRenda}
                sistema={this.state.sistema}
                nome={this.state.nome}
                onClick={this.closeModal}/> : null}

                
                
                <Formulario
                    onClick={this.cadastrar}
                    onNome={event => this.setState({nome:event.target.value})}
                    valueNome={this.state.nome}

                    onCpf={event => this.setState({cpf:event.target.value})}
                    valueCpf={this.state.cpf}

                    onValorEmprestimo={event => this.setState({valorEmprestimo:event.target.value})}
                    valueValorEmprestimo={this.state.valorEmprestimo}

                    onValorRenda={event => this.setState({valorRenda:event.target.value})}
                    valueValorRenda={this.state.valorRenda}

                    onDataCadastro={event => this.setState({dataCadastro:event.target.value})}
                    valueDataCadastro={this.state.dataCadastro}

                    onDataEmprestimo={event => this.setState({dataEmprestimo:event.target.value})}
                    valueDataEmprestimo={this.state.dataEmprestimo}

                    onValueSistema={event => this.setState({sistema: event.target.value})}

                    cadastrar={true}

                    Iputselect={
                        <select
                        className='select'
                        onChange={event => this.setState({sistema:event.target.value})}>
                            <option value='undefined'>Sistema</option>
                            {this.state.options.map((item:any) => {
                                return <option key={item.Sistema} value={item.Sistema}>{item.Sistema}</option>
                            }) }
                        
                        </select> }
                    />


                <Imagem img={Visita}/>
            </Container>
            <Footer title='Grupo Mir' />
            </>
        )
    }

}

