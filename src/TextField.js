import React from 'react';
import styled from 'styled-components';
import { WrapperLabel } from './index';

const TextFieldWrapper = styled.div`
    text-align: center;
    font-family: Arial;
    border: 1px blue solid;
`
const TextField = props => (
    <React.Fragment>        
        <TextFieldWrapper>
            <WrapperLabel>TextField Component</WrapperLabel>
            <label>{props.label}</label>
            <br/>
            <input 
               type='text'
               value={props.value}
               name={props.name}
               label={props.label}
               onChange={props.handleChange}
            />
        </TextFieldWrapper>
    </React.Fragment>
)
export default TextField;