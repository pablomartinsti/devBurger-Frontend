import styled from 'styled-components'
import { Button } from '../../../components'

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

form{
    background-color: #565656;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;

}
 
`
export const Label = styled.p`
 font-size: 15px;
 color: #ffffff;
 margin-bottom: 3px;
`
export const Input = styled.input`
 height: 40px;
 border-radius: 10px;
 background: #ffffff;
 border: none;
 box-shadow: 0px 4px 14px rgba(0,0,0,0.1);
 padding-left: 10px;
 
 width: 100%;
 min-width: 280px;

`

export const ButtonStyles = styled(Button)`
width: 100%;
margin-top: 25px;
`
export const LabelUpload = styled.label`
cursor: pointer;
display: flex;
align-items: center;
border:  1px dashed #ffffff ;
border-radius: 5px;
padding: 10px;

gap: 10px;

input{
    opacity:0;
    width: 1px;

}
`

export const ContainerInput = styled.div`
display: flex;
align-items: baseline;
gap:10px;

    input{
    width: 15px;
    height: 15px;
    cursor: pointer;

    }
`
