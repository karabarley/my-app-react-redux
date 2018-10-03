import React from 'react';
import styled from 'styled-components';
import TextField from './TextField';
import Button from './Button';
import { WrapperLabel } from './index';

const LoginWrapper = styled.div`
font-family: Arial;
border: 1px red solid;
padding: 10px;
` 

const Login = props => (
    <LoginWrapper>
        <WrapperLabel>Login Component</WrapperLabel>
        <TextField
            name='username'
            value={props.username}
            handleChange={props.handleChange}
            label='Github Username:'
        />
        {/* <Button
            handleLogin={props.handleLogin}
            value='Login'
        /> */}
    </LoginWrapper>

)

export default Login;