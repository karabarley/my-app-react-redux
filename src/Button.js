import React from 'react';
import styled from 'styled-components';
import { WrapperLabel } from './index'

const ButtonWrapper = styled.div`
    text-align: center;
    font-family: Arial;
    border: 1px blue solid;
`

const Button = ({handleLogin, value}) => (
    <ButtonWrapper>
        <WrapperLabel>Button Component</WrapperLabel>
        <button onClick={handleLogin}>{value}</button>
    </ButtonWrapper>
)

export default Button;