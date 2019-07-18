import styled from 'styled-components/macro'

export const TextInput = styled.input`
   width: 260px;
   height: 45px;
   background-color: #f6f6f6;
   border-radius: 5px;
   border: solid 1px #E2DFDF;
   margin: 5px;
   padding: 0 10px;
   color: #005480;
   font-size: 14px;
   font-weight: bold;
   font-family: Arial, Helvetica, sans-serif;
   
::-webkit-input-placeholder {
    color: #005480;
}

:-moz-placeholder { /* Firefox 18- */
   color: #005480;  
}

::-moz-placeholder {  /* Firefox 19+ */
   color: #005480;  
}

:-ms-input-placeholder {  
   color: #005480;  
}
`

export const InputSelect = styled.select`
   width: 260px;
   height: 45px;
   background-color: #f6f6f6;
   border-radius: 5px;
   border: solid 1px #E2DFDF;
   margin: 5px;
   padding: 0 10px;
   color: #005480;
   font-size: 14px;
   font-weight: bold;
   font-family: Arial, Helvetica, sans-serif;
`

export const InputLabel = styled.label`
   font-size: 14px;
   font-weight: bold;
   font-family: Arial, Helvetica, sans-serif;
   color: #005480;
   display: block;
`
export const Container = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-direction: column;
`
