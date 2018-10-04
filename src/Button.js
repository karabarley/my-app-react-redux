import React from 'react';
import styled from 'styled-components';
import { WrapperLabel } from './index'

const ButtonWrapper = styled.div`
    text-align: center;
    font-family: Arial;
    border: 1px blue solid;
`


const GitButton = styled.div`
    color: #fff;
    background-color: #28a745;
    background-image: linear-gradient(-180deg,#34d058 0%,#28a745 90%);
    padding: 6px 12px;
    max-width: 266px;
    width: 75%;
    margin: 0 auto;
    ser-select: none;
    background-repeat: repeat-x;
    background-position: -1px -1px;
    background-size: 110% 110%;
    border: 1px solid rgba(27,31,35,0.2);
    border-radius: 0.25em;
    -webkit-appearance: none;
`
const Button = ({handleLogin, value}) => (
    <ButtonWrapper>
        <WrapperLabel>Button Component</WrapperLabel>
        <GitButton onClick={handleLogin}>{value}</GitButton>
    </ButtonWrapper>
)

export default Button;