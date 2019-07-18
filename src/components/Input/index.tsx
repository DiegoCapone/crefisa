import React from 'react'
import { InputSelect, InputLabel, Container} from './styled'
import NumberFormat from 'react-number-format';
import InputMask from 'react-input-mask';
import '../Input/index.css'


interface Props {
    placeholder?: string
    value?: any
    onChange?: (event: any) => void
    type?: string
    mask?: any
    readyonly?: boolean
    ClassName?: any
}

interface Data {
  value?: any
  onChange?: (event: any) => void
  type?: string
  title: String
}

interface Select {
  value?: any
  onChange?: (event: any) => void
  type?: string
  ClassName?: any
  options: any
  ref?: any
}

interface Label {
  title: String
}

const Input = (props:Props) => (
    <InputMask
        className={props.ClassName ? props.ClassName: 'input'}
        mask={props.mask}
        placeholder={props.placeholder} 
        type={props.type} 
        onChange={props.onChange}
        value={props.value} 
        readOnly={props.readyonly}
        />
)

const InputMoeda = (props:Props) => (
  <NumberFormat
      decimalScale={2}
      fixedDecimalScale={true}
      thousandSeparator={true}
      prefix={'R$'}
      className='input'
      mask={props.mask}
      placeholder={props.placeholder} 
      onChange={props.onChange}
      value={props.value} />
)

const Select = (props:Select) =>(
  <InputSelect ref={props.ref} className={props.ClassName} >
    {props.options}
    {/* <option value='undefined'>Sistema</option>
    <option value='cache'>Cache</option> */}
  </InputSelect>
)

const Label = (props:Label) => (
  <InputLabel>{props.title}</InputLabel>
)

const InputData = (props:Data) => (
  <Container>
  <Label title={props.title} />
  <Input
  type={props.type} 
  onChange={props.onChange}
  value={props.value}/>
  </Container>
)


export  {InputMoeda, Input , Select, Label, InputData}
