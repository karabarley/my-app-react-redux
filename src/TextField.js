import React from 'react';
import styled from 'styled-components';
import { WrapperLabel } from './index';

const TextFieldWrapper = styled.div`
    text-align: center;
    font-family: Arial;
    border: 1px blue solid;
`
const TextField = ({label, value, name, handleChange}) => (
    <React.Fragment>        
        <TextFieldWrapper>
            <WrapperLabel>TextField Component</WrapperLabel>
            <label>{label}</label>
            <br/>
            <input 
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