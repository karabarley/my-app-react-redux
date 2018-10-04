import React from 'react';
import styled from 'styled-components';
import { WrapperLabel } from './index';

const TextFieldWrapper = styled.div`
    text-align: center;
    font-family: Arial;
    border: 1px blue solid;
`

const GitInput = styled.input`
    max-width: 266px;
    width: 75%;
    padding: 6px 8px;
    font-size: 16px;
    line-height: 20px;
    color: #24292e;
    vertical-align: middle;
    background-color: #fff;
    background-color: rgb(250, 255, 189) !important;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(27,31,35,0.075);
`
const TextField = ({label, value, name, handleChange}) => (
    <React.Fragment>        
        <TextFieldWrapper>
            <WrapperLabel>TextField Component</WrapperLabel>
            <label>{label}</label>
            <br/>
            <GitInput 
               type='text'
               value={value}
               name={name}
               label={label}
               onChange={handleChange}
            />
        </TextFieldWrapper>
    </React.Fragment>
)
export default TextField;